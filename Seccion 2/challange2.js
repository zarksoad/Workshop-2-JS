const actividades = {};
const actividades_validadas = {};
const presupuesto = parseFloat(prompt('Ingresa tu presupuesto diario'));
let ahorro_diario = parseInt(prompt('Cuantos deseas ahorrar diariamente'));

// actividades
function actividades_diarias(actividades) {
  continuar = true;
  while (continuar) {
    const actividad = prompt(
      'Ingresa el tipo de actividad que deseas realizar:'
    );
    const costo = parseInt(prompt('Ingresa el costo de la actividad:'));
    if (!isNaN(costo)) {
      actividades[actividad] = costo;
    }
    continuar = confirm('Deseas agregar un nueva actividad');
    if (!continuar) break;
  }
}
actividades_diarias(actividades);
alert(JSON.stringify(actividades));

let presupuesto_final = parseFloat(presupuesto - ahorro_diario);

suma = 0;
for (actividad in actividades) {
  suma += actividades[actividad];
}
let continues = true;
while (continues) {
  alert('Tu presupuesto final es ' + presupuesto_final);
  if (suma > presupuesto_final) {
    alert(
      'No puedes comprar todas las actividades, estan fuera de tu presupuesto'
    );
    let actividad_a_comprar = prompt(
      'Escoge la actividad a comprar: ' + JSON.stringify(actividades)
    );
    for (key in actividades) {
      llave = key;
      costo = actividades[llave];
      if (llave === actividad_a_comprar) {
        presupuesto_final = presupuesto_final - actividades[llave];
        if (presupuesto_final < 0) {
          alert('No puedes comprar la actividad.');
          delete actividades;
        } else {
          actividades_validadas[key] = costo;
          alert('actividad Comprada');
        }
      }
    }
  } else {
    alert('Has comprado todas las actividades');
    continues = false;
    alert(JSON.stringify(actividades));
    if (!continues) break;
  }
  continues = confirm('Deseas compar un nuevo articulo');
  if (!continues) break;
}

alert(JSON.stringify(actividades_validadas));
