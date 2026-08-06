import { describe, it, expect } from "vitest";
import {
  parseNum,
  sepDecimalDe,
  detectarSep,
  csvLine,
  fechaISO,
  filaEncabezado,
  numRaro,
  detectarFormatoNum,
} from "../src/lib/core.js";

// Cobertura de la lógica calibrada para los formatos numéricos reales de los
// sistemas de las cooperativas (formato argentino vs. punto decimal).

describe("parseNum", () => {
  it("interpreta formato argentino con miles y coma decimal", () => {
    expect(parseNum("1.234,56")).toBe(1234.56);
    expect(parseNum("1.234.567,89")).toBe(1234567.89);
  });

  it("interpreta formato US con coma de miles y punto decimal", () => {
    expect(parseNum("1,234.56")).toBe(1234.56);
    expect(parseNum("1234.56")).toBe(1234.56);
  });

  it("resuelve el caso ambiguo de 3 decimales según el formato indicado", () => {
    // "31.000" es 31000 en argentino y 31 en formato con punto decimal.
    expect(parseNum("31.000", "ar")).toBe(31000);
    expect(parseNum("31.000", "us")).toBe(31);
  });

  it("por defecto usa convención argentina para el caso ambiguo", () => {
    expect(parseNum("1.234")).toBe(1234);
  });

  it("interpreta negativos entre paréntesis", () => {
    expect(parseNum("(1.234,56)")).toBe(-1234.56);
  });

  it("devuelve NaN para vacío o sin dígitos", () => {
    expect(Number.isNaN(parseNum(""))).toBe(true);
    expect(Number.isNaN(parseNum("abc"))).toBe(true);
  });

  it("acepta números nativos sin transformarlos", () => {
    expect(parseNum(1234.5)).toBe(1234.5);
  });
});

describe("sepDecimalDe", () => {
  it("cuando hay coma y punto, manda el último separador", () => {
    expect(sepDecimalDe("1.234,56")).toBe(",");
    expect(sepDecimalDe("1,234.56")).toBe(".");
  });

  it("con 3 dígitos y sin formato, es ambiguo (null)", () => {
    expect(sepDecimalDe("1.000")).toBe(null);
  });

  it("con distinta cantidad de decimales, detecta el separador", () => {
    expect(sepDecimalDe("12.5")).toBe(".");
    expect(sepDecimalDe("12,5")).toBe(",");
  });

  it("sin separadores devuelve null", () => {
    expect(sepDecimalDe("1000")).toBe(null);
  });
});

describe("detectarSep", () => {
  it("detecta punto y coma", () => {
    expect(detectarSep(["a;b;c", "d;e;f"])).toBe(";");
  });
  it("detecta coma", () => {
    expect(detectarSep(["a,b", "c,d"])).toBe(",");
  });
  it("detecta tabulación", () => {
    expect(detectarSep(["a\tb", "c\td"])).toBe("\t");
  });
});

describe("csvLine", () => {
  it("respeta comillas con el separador dentro", () => {
    expect(csvLine('a,"b,c",d')).toEqual(["a", "b,c", "d"]);
  });
  it("usa el separador indicado", () => {
    expect(csvLine("a;b;c", ";")).toEqual(["a", "b", "c"]);
  });
});

describe("fechaISO", () => {
  it("normaliza fechas a AAAA-MM-DD", () => {
    expect(fechaISO("2024-03-15")).toBe("2024-03-15");
    expect(fechaISO("15/03/2024")).toBe("2024-03-15");
    expect(fechaISO("15/03/24")).toBe("2024-03-15");
  });
  it("devuelve vacío para entrada inválida", () => {
    expect(fechaISO("")).toBe("");
    expect(fechaISO("no es fecha")).toBe("");
  });
});

describe("filaEncabezado", () => {
  it("detecta la fila de encabezado real ignorando títulos", () => {
    const filas = [
      ["Reporte de stock"],
      ["Codigo", "Descripcion", "Stock", "Unidad"],
      ["1001", "Producto A", "10", "Kilos"],
    ];
    expect(filaEncabezado(filas)).toBe(1);
  });
});

describe("numRaro / detectarFormatoNum", () => {
  it("marca como raro lo que no encaja en ninguna convención", () => {
    expect(numRaro("1.234.567.89")).toBe(true);
    expect(numRaro("1.234,56")).toBe(false);
  });
  it("detecta formato por columna", () => {
    expect(detectarFormatoNum(["1.234,56", "2.000,00"])).toBe("ar");
    expect(detectarFormatoNum(["1234.5", "99.99"])).toBe("us");
  });
});
