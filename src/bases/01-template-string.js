const nombre = "Carlos";
const apellido = "Santander";

export const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = "Fernando") {
  return `Hola ${nombre}`;
}
