// Fase de preparacion
const destino = prompt('Julian ingrese su destino de viaje:');
let cant_dias = parseInt(prompt('Julian ingrese la cantidad de dias:'));
let presupuesto_viaje = parseInt(
  prompt('Julian ingrese el presupuesto de viaje ')
);
// Costo diario Actividades

let alimentacion = parseInt(
  prompt(
    'Julian  ingresa la cantidad que vas a gastar en alimentacion diariamente:'
  )
);

let alojamiento = parseInt(
  prompt('Julian ingresa cuanto cantidad vas a gastar diaria en alojamiento')
);

let diversion = parseInt(
  prompt('Julian ingresa cuanto vas a gastar diariamente en diversion:')
);

let total_diario = alimentacion + diversion + alojamiento;
let total_viaje = total_diario * cant_dias;

//Condicionales

if (total_diario * cant_dias > presupuesto_viaje) {
  alert(
    'Tu presupuesto no es suficiente para el viaje \nDeberas cambiar tu presupuesta de viaje o el numero de dias'
  );
} else {
  alert('Julian tiene suficiente dinero.');
}
