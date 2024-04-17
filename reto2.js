// Souvenirs

function validar_dato(opcion) {
  if ((opcion = true)) {
    let nombre = prompt('ingresa el nombre:');
    let costo = parseFloat(prompt('ingresa el costo:'));
    let disponibilidad = confirm(
      'Ingresa Si, si el souvenirs esta disponible o cualquier dato si no esta disponible'
    );

    alert(nombre + ' ' + typeof nombre);
    alert(costo + ' ' + typeof costo);
    alert(disponibilidad + ' ' + typeof disponibilidad);
  }
}

opcion = parseInt(
  prompt(
    'Presiona 1 para continuar validando souvenirs o cualquier otra tecla para salir.'
  )
);
if (opcion === 1) {
  validar_dato(opcion);
  opcion = prompt(
    'Presiona 1 para continuar validando souvenirs o cualquier otra tecla para salir.'
  );
  if (opcion == 1) {
    validar_dato(opcion);
    opcion = prompt(
      'Presiona 1 para continuar validando souvenirs o cualquier otra tecla para salir.'
    );
    if (opcion == 1) {
      validar_dato(opcion);
    }
  }
} else {
  alert('Has salido del programa');
}
