const SIN_LIB="No está disponible sin conexión.\n\nConectate un momento a datos o WiFi y recargá la página, o cargá los productos con ✏ Manual o 📋 Pegar datos.";
const UNIDADES=["Litros","Kilos","Bolsa 20 Kg","Bolsa 25 Kg","Bolsa 30 Kg","Bolsa 10 Kg","Bolson","Lata x 20 lts","Unidad","Bidón","Cajas"];
const COMBUSTIBLES=["Gasoil","Nafta Súper","Nafta Premium","Euro Diesel"];
const CATEGORIAS=["Agroquímicos","Fertilizantes","Semillas","Balanceados","Veterinaria","Ferretería","Supermercado","Lubricantes","Otros"];
const SECCIONES=[
  {id:"insumos",nombre:"Insumos Agropecuarios",icono:"🌱",tipo:"conteo"},
  {id:"balanceados",nombre:"Balanceados",icono:"🐄",tipo:"conteo"},
  {id:"combustibles",nombre:"Combustibles y Lubricantes",icono:"🛢",tipo:"varillaje"},
  {id:"supermercado",nombre:"Supermercado",icono:"🛒",tipo:"muestreo"},
  {id:"ferreteria",nombre:"Ferretería",icono:"🔧",tipo:"muestreo"},
  {id:"veterinaria",nombre:"Veterinaria",icono:"🐾",tipo:"muestreo"},
  {id:"arqueo",nombre:"Arqueo de Cajas",icono:"💰",tipo:"arqueo"},
  {id:"otra",nombre:"Otra sección",icono:"📋",tipo:"conteo"},
];
const CATALOGO=[
{clave:"ACEVEDO",nombre:"Coop. Agríc. Ganad. Ltda. de Acevedo",loc:"Acevedo"},
{clave:"AGRICOLA J. POSSE",nombre:"Coop. Agríc. Gan. de Justiniano Posse Ltda.",loc:"Justiniano Posse"},
{clave:"AGRONEXO",nombre:"Agronexo Coop. Agríc. Gan. de Lartigau y Tornquist Ltda.",loc:"Lartigau / Tornquist"},
{clave:"ALFA TRES ARROYOS",nombre:"Coop. Rural Alfa Ltda.",loc:"Tres Arroyos"},
{clave:"ALMAFUERTE",nombre:"Soc. Coop. Agrop. de Almafuerte Ltda.",loc:"Almafuerte"},
{clave:"ARMSTRONG",nombre:"Coop. Agropec. de Armstrong Ltda.",loc:"Armstrong"},
{clave:"ARROYO CABRAL",nombre:"Coop. Agríc. Gan. de Arroyo Cabral Ltda.",loc:"Arroyo Cabral"},
{clave:"ASCENSION",nombre:"Coop. Agríc. Gan. Ltda. de Ascensión",loc:"Ascensión"},
{clave:"BARRANCAS",nombre:"Coop. Agr. Ganad. La Unión Ltda. de Barrancas",loc:"Barrancas"},
{clave:"BASAVILBASO",nombre:"Coop. Agríc. Lucienville Ltda.",loc:"Basavilbaso"},
{clave:"BOUQUET",nombre:"Coop. Agríc. Ganad. Bouquet Ltda.",loc:"Bouquet"},
{clave:"CARABELAS",nombre:"Coop. Agrop. Ltda. de Carabelas",loc:"Carabelas"},
{clave:"CARHUE",nombre:"Coop. Agríc. Gan. Ltda. de A. Alsina",loc:"Carhué"},
{clave:"CASCALLARES",nombre:"Coop. Agríc. Ltda. de M. Cascallares",loc:"Cascallares"},
{clave:"CENTENO",nombre:"Coop. Tambera y Agríc. Ind. Arg. de Centeno Ltda.",loc:"Centeno"},
{clave:"CHACABUCO",nombre:"Coop. Defensa de Agricultores Ltda.",loc:"Chacabuco"},
{clave:"COLON",nombre:"Gran. y Elev. Arg. de Colón S.C.L.",loc:"Colón"},
{clave:"CONESA",nombre:"Coop. Agrícola Conesa Ltda.",loc:"Conesa"},
{clave:"DARREGUEIRA",nombre:"Coop. Agrop. de Darregueira Ltda.",loc:"Darregueira"},
{clave:"ELORTONDO",nombre:"Coop. Agrop. Unific. Ltda. de Elortondo",loc:"Elortondo"},
{clave:"ESPARTILLAR",nombre:"Coop. Agríc. Gan. Ltda. de Espartillar",loc:"Espartillar"},
{clave:"FREYRE",nombre:"Coop. Agríc. Gan. Cons. Freyre Ltda.",loc:"Freyre"},
{clave:"IRIGOYEN",nombre:"Coop. Agrop. Mixta Irigoyen Ltda.",loc:"Irigoyen"},
{clave:"JUNIN",nombre:"Liga Agrícola Ganadera Coop. Ltda.",loc:"Junín"},
{clave:"LA DULCE",nombre:"Coop. Agropec. La Segunda Ltda.",loc:"La Dulce"},
{clave:"LA EMANCIPACION",nombre:"La Emancipación S.C. Mixta Ltda.",loc:"La Emancipación"},
{clave:"LA PAZ",nombre:"Coop. Agropecuaria de La Paz Ltda.",loc:"La Paz"},
{clave:"LEONES",nombre:"Coop. Agríc. Gan. Leones Ltda.",loc:"Leones"},
{clave:"LOS MOLINOS",nombre:"Coop. Agríc. Gan. Los Molinos Ltda.",loc:"Los Molinos"},
{clave:"LOS TOLDOS",nombre:"Coop. Rural de Gral. Viamonte Ltda.",loc:"Los Toldos"},
{clave:"LUCAS GONZALEZ",nombre:"Coop. Agrop. El Progreso Ltda.",loc:"Lucas González"},
{clave:"MARCOS JUAREZ",nombre:"Coop. Agrop. Gral. Paz de Marcos Juárez Ltda.",loc:"Marcos Juárez"},
{clave:"MARGARITA",nombre:"Coop. Agríc. Mixta de Margarita Ltda.",loc:"Margarita"},
{clave:"MARIA SUSANA",nombre:"Coop. Federal Agríc. Ganad. de María Susana Ltda.",loc:"María Susana"},
{clave:"MARTINI",nombre:"Coop. Agrop. Embajador Martini Ltda.",loc:"Embajador Martini"},
{clave:"MAXIMO PAZ",nombre:"Coop. Agrop. Ltda. de Máximo Paz",loc:"Máximo Paz"},
{clave:"MONJE",nombre:"Coop. Agríc. Gan. Tamb. Ltda. de Monje",loc:"Monje"},
{clave:"OLAVARRIA",nombre:"Coop. Agraria Ltda. de Olavarría",loc:"Olavarría"},
{clave:"PATAGONES",nombre:"Coop. Ag. Ganad. Patagones y Viedma Ltda.",loc:"Patagones"},
{clave:"PORTEÑA",nombre:"Coop. Gan. Agríc. Cons. Porteña Ltda.",loc:"Porteña"},
{clave:"RAUCH",nombre:"Coop. Agríc. Ganad. de Rauch Ltda.",loc:"Rauch"},
{clave:"SALADILLO",nombre:"Coop. Agr. Ganad. de Saladillo Ltda.",loc:"Saladillo"},
{clave:"SAN ANTONIO DE ARECO",nombre:"Coop. Agrop. de San Antonio de Areco Ltda.",loc:"San Antonio de Areco"},
{clave:"SAN GUILLERMO",nombre:"Coop. Agríc. y Cons. Ltda. Sta. Rosa",loc:"San Guillermo"},
{clave:"SANTA ISABEL",nombre:"Coop. Agr. Unif. y Fza. Santa Isabel y Teodelina Ltda.",loc:"Santa Isabel / Teodelina"},
{clave:"SEGUI",nombre:"Coop. Serv. Púb. Gral. José de San Martín Ltda.",loc:"Seguí"},
{clave:"SILVIO PELLICO",nombre:"Soc. Coop. Unión Popular Ltda.",loc:"Silvio Pellico"},
{clave:"SUNCHALES",nombre:"Coop. Ltda. Agr. Gan. de Sunchales",loc:"Sunchales"},
{clave:"TANDIL",nombre:"Coop. Agropecuaria de Tandil Ltda.",loc:"Tandil"},
{clave:"TRES ARROYOS",nombre:"Coop. Agraria de Tres Arroyos Ltda.",loc:"Tres Arroyos"},
{clave:"UNION POSSE",nombre:"Coop. Agrop. Unión de Justiniano Posse Ltda.",loc:"Justiniano Posse"},
{clave:"VILLA TRINIDAD",nombre:"Coop. Agríc. y Gan. La Trinidad Ltda.",loc:"Villa Trinidad"}
];
// Sin clasificación de razonabilidad: se informa el hecho (sobrante/faltante), la interpretación la hace el auditor.
function clasif(sys,fis,u){if(sys===""||fis===""||sys==null||fis==null)return{label:"Sin datos",color:"#6b7280",bg:"#f9fafb"};const s=+sys,f=+fis;if(isNaN(s)||isNaN(f))return{label:"Sin datos",color:"#6b7280",bg:"#f9fafb"};const d=f-s;if(d===0)return{label:"OK",tipo:"",color:"#16a34a",bg:"#f0fdf4"};const tipo=d>0?"Sobrante":"Faltante";return{label:tipo,tipo:tipo,color:d>0?"#16a34a":"#dc2626",bg:d>0?"#f0fdf4":"#fef2f2"};}
function diff(sys,fis){if(fis===""||fis==null||sys===""||sys==null)return{abs:"",pct:""};const s=+sys,f=+fis;if(isNaN(s)||isNaN(f))return{abs:"",pct:""};return{abs:f-s,pct:s!==0?((f-s)/s*100).toFixed(2)+"%":"0.00%"};}
// Detecta el separador dominante del archivo. Antes se cortaba por coma, punto
// y coma y tabulación a la vez: en un archivo separado por ";" con decimales
// por coma ("1.234,56") partía el número y se perdían los centavos.
// Normaliza fechas de listados bancarios a AAAA-MM-DD.
function fechaISO(v){
  if(v==null||v==="")return "";
  const t=String(v).trim();
  if(/^\d{4}-\d{2}-\d{2}/.test(t))return t.slice(0,10);
  const m=/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/.exec(t);
  if(m){let[,d,mes,a]=m;a=a.length===2?(+a>70?"19":"20")+a:a;
    return a+"-"+String(mes).padStart(2,"0")+"-"+String(d).padStart(2,"0");}
  if(/^\d{5}$/.test(t)){ // serial de Excel
    const base=new Date(Date.UTC(1899,11,30));base.setUTCDate(base.getUTCDate()+Number(t));
    return base.toISOString().slice(0,10);}
  return "";
}
// Los reportes de sistema suelen traer un título y renglones en blanco antes
// de la tabla. Busca la fila que realmente es el encabezado.
function filaEncabezado(filas){
  const clave=/(cod|c[oó]d|art[ií]culo|articulo|producto|descrip|detalle|stock|exist|cantidad|cant\b|importe|precio|unidad|um\b|valor|saldo)/i;
  let mejor=0,mejorP=-1;
  for(let i=0;i<Math.min(filas.length,15);i++){
    const f=(filas[i]||[]).map(x=>String(x||"").trim());
    const llenas=f.filter(Boolean).length;
    if(llenas<2)continue;
    const aciertos=f.filter(x=>clave.test(x)).length;
    const numeros=f.filter(x=>x&&/^[\d.,\-$ ]+$/.test(x)).length;
    const p=aciertos*10+llenas-numeros*4;   // un encabezado tiene texto, no números
    if(p>mejorP){mejorP=p;mejor=i;}
  }
  return mejor;
}
function detectarSep(lines){
  const muestra=(lines||[]).filter(l=>l&&l.trim()).slice(0,25);
  if(!muestra.length)return ",";
  let mejor=",",mejorPuntaje=-1;
  for(const sep of [";","\t","|",","]){
    const cuentas=muestra.map(l=>{let n=0,q=false;for(const ch of l){if(ch==='"')q=!q;else if(ch===sep&&!q)n++;}return n;});
    const con=cuentas.filter(n=>n>0).length;
    if(!con)continue;
    const modo=cuentas.filter(n=>n>0)[0];
    const consistentes=cuentas.filter(n=>n===modo).length/cuentas.length;
    const puntaje=consistentes*100+modo;
    if(puntaje>mejorPuntaje){mejorPuntaje=puntaje;mejor=sep;}
  }
  return mejor;
}
function csvLine(l,sep){const s=sep||",";const r=[];let c="",q=false;
  for(let i=0;i<l.length;i++){const ch=l[i];
    if(ch==='"'){if(q&&l[i+1]==='"'){c+='"';i++;}else q=!q;}
    else if(ch===s&&!q){r.push(c.trim());c="";}
    else c+=ch;}
  r.push(c.trim());return r;}
const uid=()=>{try{if(typeof crypto!=="undefined"&&crypto.randomUUID)return crypto.randomUUID();}catch(e){}
  const r=(n)=>Array.from({length:n},()=>Math.floor(Math.random()*16).toString(16)).join("");
  return r(8)+"-"+r(4)+"-4"+r(3)+"-a"+r(3)+"-"+r(12)+"-"+Date.now().toString(36);};
// ── Formato numérico ──────────────────────────────────────────────────
// "31.000" es 31000 en formato argentino y 31,0 en formato con punto decimal
// (el que usan algunos sistemas, ej. los listados de Porteña). No se puede
// resolver mirando un valor suelto: se detecta por columna y se confirma en
// la pantalla de importación.
function detectarFormatoNum(valores){
  let ar=0,us=0;
  (valores||[]).forEach(v=>{
    const t=String(v==null?"":v).replace(/[$\s]/g,"").trim();
    if(!t||!/\d/.test(t))return;
    if(/,\d+$/.test(t)){ar++;return;}                    // coma decimal -> argentino
    if(/\.\d{3}(\.\d{3})+$/.test(t)){ar++;return;}       // dos o más grupos de miles
    const m=/\.(\d+)$/.exec(t);
    if(m&&m[1].length!==3){us++;return;}                 // punto con != 3 decimales
  });
  if(us>ar)return "us";
  if(ar>0)return "ar";
  return "ar"; // por defecto, convención argentina
}
// Un importe es "raro" solo si no encaja en NINGUNA de las dos convenciones.
// Ahora que el parser decide valor por valor, "1234.56" y "1.234,56" son
// igual de válidos; lo que se marca es lo que no se puede leer, como
// "1.234.567.89" (punto de miles y de centavos a la vez).
function numRaro(v){
  const t=String(v==null?"":v).replace(/[^\d.,\-]/g,"").replace(/^-/,"").trim();
  if(!t||!/\d/.test(t))return false;
  const ar=/^\d{1,3}(\.\d{3})*(,\d+)?$|^\d+(,\d+)?$/;
  const us=/^\d{1,3}(,\d{3})*(\.\d+)?$|^\d+(\.\d+)?$/;
  return !(ar.test(t)||us.test(t));
}

// Interpreta un importe decidiendo el separador decimal VALOR POR VALOR.
// Solo cuando el valor es genuinamente ambiguo ("1.234": ¿mil doscientos o
// uno con doscientos treinta y cuatro?) se usa `formato` para desempatar.
// Así un mismo archivo puede traer "1.234.567,89" y "1234.56" mezclados.
function sepDecimalDe(t,formato){
  const hayC=t.indexOf(",")>=0, hayP=t.indexOf(".")>=0;
  if(hayC&&hayP)return t.lastIndexOf(",")>t.lastIndexOf(".")?",":".";   // el último manda
  if(!hayC&&!hayP)return null;
  const sep=hayC?",":".";
  const partes=t.split(sep);
  if(partes.length>2)return null;                 // varios separadores -> miles
  const d=partes[1];
  if(d.length!==3)return sep;                     // 1, 2 o 4+ dígitos -> decimal
  // exactamente 3 dígitos: ambiguo, desempata el formato elegido
  return (formato==="us"&&sep===".")||(formato==="ar"&&sep===",")?sep:null;
}
function esAmbiguo(v){
  const t=String(v==null?"":v).replace(/[^\d.,]/g,"");
  if(!/\d/.test(t))return false;
  const hayC=t.indexOf(",")>=0,hayP=t.indexOf(".")>=0;
  if(hayC&&hayP)return false;
  if(!hayC&&!hayP)return false;
  const partes=t.split(hayC?",":".");
  return partes.length===2&&partes[1].length===3;
}
function parseNum(v,formato){
  if(v==null||v==="")return NaN;
  if(typeof v==="number")return v;
  const bruto=String(v).trim();
  let t=bruto.replace(/[^\d.,()\-]/g,"");
  if(!/\d/.test(t))return NaN;
  const neg=/^\(.*\)$/.test(bruto)||t.indexOf("-")===0;
  t=t.replace(/[()\-]/g,"");
  const dec=sepDecimalDe(t,formato);
  let r;
  if(dec){const otro=dec===","?".":",";
    r=parseFloat(t.split(otro).join("").replace(dec,"."));}
  else r=parseFloat(t.replace(/[.,]/g,""));
  if(isNaN(r))return NaN;
  return neg?-r:r;
}

const numArg=(s)=>{if(s==null||s==="")return NaN;if(typeof s==="number")return s;
  const cl=String(s).replace(/\$/g,"").replace(/\s/g,"");if(!cl)return NaN;
  if(/^-?\d+$/.test(cl))return parseFloat(cl);
  if(/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(cl))return parseFloat(cl.replace(/\./g,"").replace(",","."));
  if(/^-?\d+,\d+$/.test(cl))return parseFloat(cl.replace(",","."));
  if(/^-?\d*\.?\d+$/.test(cl))return parseFloat(cl);
  return parseFloat(cl.replace(/\./g,"").replace(",","."));};
const sumarExpr=(txt)=>{try{const s=String(txt==null?"":txt).trim();if(!s)return"";
  if(s.indexOf("+")<0){const n=numArg(s);return isNaN(n)?"":String(n);}
  const partes=s.split("+").map(x=>x.trim()).filter(x=>x!=="");
  if(!partes.length)return"";
  let tot=0,valido=false;
  for(const p of partes){const n=numArg(p);if(!isNaN(n)){tot+=n;valido=true;}}
  return valido?String(Math.round(tot*10000)/10000):"";}catch(e){return"";}};
const ESTADOS_PROD=["OK","Vencido","Roto/Dañado","Falta comprobante","No utilizable","Otro"];
const SUCS_DEFAULT={
  "ARMSTRONG":["Armstrong","Tortugas","Correa","Bustinza"],
  "ESPARTILLAR":["Espartillar","Cascada"],
  "PATAGONES":["Patagones","Cagliero","Stroeder","J.B. Casas","VillaLonga"],
  "LA EMANCIPACION":["Darregueira","Felipe Solá","Villa Iris","Rivera","Salliqueló","Guatraché","Jacinto Arauz","Doblas","Santa Rosa"],
  "SILVIO PELLICO":["Silvio Pellico"],
  "PORTEÑA":["Porteña","Chipión","Ramona","Brinkmann","La Selecta"],
  "AGRICOLA J. POSSE":["Justiniano Posse","W. Escalante","Bell Ville"],
  "LUCAS GONZALEZ":["Lucas González","Nogoyá"],
  "MARGARITA":["Margarita","Coronel DuGraty","Villa Minetti","Humboldt","Cuatro Bocas","Calchaquí"],
};
const AUDITORES=["Agostina Mandrile","Alexis Ulla","Andres Olmedo","Blas Borgatello","Camila Lisandron","Emanuel Tagliatori","Ezequiel Albanesi","Federico Serafini","Franco Diaz Russo","Gabriela Fernandez","Giuliano Lucatti","Gonzalo Tordi","Javier Silva","Juliana Canavesa","Juliana Ruggeri","Lautaro López","Lorena Sanchez","Luciana Zupel","Luciano Guillaumet","Manuela Fernandez Biaín","Matías Durá","Matías R. Ravagnan","Nicolas Cosso","Nicolas Enecoiz","Nicolás Acciarri","Roberto Lezcano","Tomas Virgilio","Verena Hastrup","Victoria Sisterna"];
const newItem=()=>({id:uid(),codigo:"",descripcion:"",stockSistema:"",stockFisico:"",unidad:"Kilos",obs:"",importe:"",estado:"OK",enMuestra:true,fotos:[]});
// Lee todas las imágenes seleccionadas (no solo la primera), las comprime y
// devuelve el array en el mismo orden en que se eligieron.
function leerFotos(fileList,cb){
  const files=[...(fileList||[])].filter(f=>f&&/^image\//.test(f.type||"")||f&&/\.(jpe?g|png|webp|heic|heif)$/i.test(f.name||""));
  if(!files.length)return;
  let pendientes=files.length;const out=new Array(files.length);
  files.forEach((f,i)=>{const r=new FileReader();
    r.onload=async(ev)=>{try{out[i]=await resizeImg(ev.target.result,800);}catch(e){console.error("foto:",e);}
      if(--pendientes===0)cb(out.filter(Boolean));};
    r.onerror=()=>{if(--pendientes===0)cb(out.filter(Boolean));};
    r.readAsDataURL(f);});
}
function resizeImg(dataUrl,maxW=800){return new Promise(r=>{
  let listo=false;const fin=(v)=>{if(!listo){listo=true;r(v);}};
  // Si la imagen no carga (HEIC no soportado, archivo dañado) se devuelve el
  // original en vez de quedar colgado y perder la foto en silencio.
  const t=setTimeout(()=>fin(dataUrl),8000);
  const img=new Image();
  img.onload=()=>{clearTimeout(t);try{let w=img.width,h=img.height;if(!w||!h)return fin(dataUrl);
    if(w>maxW){h=Math.round(h*maxW/w);w=maxW;}
    const c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(img,0,0,w,h);
    fin(c.toDataURL("image/jpeg",0.7));}catch(e){console.error("resizeImg:",e);fin(dataUrl);}};
  img.onerror=()=>{clearTimeout(t);fin(dataUrl);};
  img.src=dataUrl;});}const fmt=n=>Number(n).toLocaleString("es-AR");const fmtFecha=f=>{if(!f)return"";const s=String(f).trim();const m=/^(\d{4})-(\d{2})-(\d{2})/.exec(s);if(m)return m[3]+"/"+m[2]+"/"+m[1];const p=s.split("-");return p.length===3?p[2]+"/"+p[1]+"/"+p[0]:s;};
function interpolar(tabla,cm){if(!tabla||!tabla.length)return null;const s=[...tabla].sort((a,b)=>a.cm-b.cm);if(cm<=s[0].cm)return s[0].litros;if(cm>=s[s.length-1].cm)return s[s.length-1].litros;for(let i=0;i<s.length-1;i++){if(cm>=s[i].cm&&cm<=s[i+1].cm){const p=(cm-s[i].cm)/(s[i+1].cm-s[i].cm);return Math.round(s[i].litros+p*(s[i+1].litros-s[i].litros));}}return null;}

// ── Exports ──────────────────────────────────────────────────────────
// Constantes de dominio y utilidades puras extraídas del monolito original.
// La lógica de parseNum/sepDecimalDe está calibrada para los formatos reales
// de los sistemas de las cooperativas: no modificar sin tests que la cubran.
export {
  SIN_LIB, UNIDADES, COMBUSTIBLES, CATEGORIAS, SECCIONES, CATALOGO,
  clasif, diff, fechaISO, filaEncabezado, detectarSep, csvLine, uid,
  detectarFormatoNum, numRaro, sepDecimalDe, esAmbiguo, parseNum, numArg,
  sumarExpr, ESTADOS_PROD, SUCS_DEFAULT, AUDITORES, newItem, leerFotos,
  resizeImg, fmt, fmtFecha, interpolar,
};
