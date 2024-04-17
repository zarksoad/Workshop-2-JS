// souvernirs

const souvernirs = {};

let continuar = true;

while (continuar) {
  const llave = prompt('Ingrese el nombre del souvernir:');
  const disponible = confirm('¿El souvernir esta disponible?:');
  const precio = parseFloat(prompt('Ingrese el precio del souvernir:'));
  if (
    !isNaN(precio) &&
    typeof llave === 'string' &&
    typeof disponible === 'boolean'
  ) {
    souvernirs[llave] = { precios: precio, disponibilidad: disponible };
    alert('Souvernir agregados');
  } else {
    alert('Ingrese un valor correcto');
  }
  continuar = confirm('Deseas agregar un nuevo grupo de items');
  if (!continuar) break;
}

alert('Esta la lista de souvernirs:' + JSON.stringify(souvernirs));
