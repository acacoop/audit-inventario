import { z } from "zod";

// Validación de límite (import) para el archivo de inventario compartido.
// Es deliberadamente permisiva (.passthrough + campos opcionales) para no
// rechazar archivos reales generados por versiones previas: su objetivo es
// garantizar la forma estructural (objetos/arrays esperados) antes de mezclar
// los datos con el estado, como defensa en profundidad frente a payloads
// manipulados. La lógica de importación posterior mantiene sus validaciones.

const seccionSchema = z
  .object({
    _nombre: z.string().optional(),
    _tipo: z.string().optional(),
    items: z.array(z.any()).optional(),
  })
  .passthrough();

const sucursalSchema = z
  .object({
    nombre: z.string().optional(),
    secciones: z.record(seccionSchema).optional(),
  })
  .passthrough();

const coopSchema = z
  .object({
    nombre: z.string().optional(),
    loc: z.string().optional(),
    sucursales: z.array(sucursalSchema).optional(),
  })
  .passthrough();

export const inventarioImportadoSchema = z
  .object({
    v: z.union([z.string(), z.number()]).optional(),
    tipo: z.string().optional(),
    coop: coopSchema,
  })
  .passthrough();
