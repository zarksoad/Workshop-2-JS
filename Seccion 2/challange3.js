// Condiciones
let prognostico_clima = prompt('Escoja entre calor, frio o templado');
let espacio_restante = 100;
let limite_peso = parseInt(prompt('Escoge el limite de peso en kilos'));
let duracion_viaje = parseInt(prompt('Ingresa la duracion del viaje'));
grupo_articulos = {};
function articulos(articulos) {
  continuar = true;
  while (continuar) {
    let articulo = prompt('Ingrese el nombre del articulo');
    let peso = parseInt(prompt('Ingrese el peso del articulo'));
    let espacio = parseInt(prompt('Ingresa el espacio que ocupa el articulo'));
    let clima = prompt(
      'Ingresa el clima para el cual es mejor el articulo, entre calor frio y templado'
    );
    grupo_articulos[articulo] = {
      pesos: peso,
      espacios: espacio,
      climas: clima,
    };

    continuar = confirm('Deseas agregar un nuevo articulo');
  }
}

articulos(grupo_articulos);
