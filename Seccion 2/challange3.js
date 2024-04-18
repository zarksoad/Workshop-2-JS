// Condiciones

let prognostico_clima = prompt('Escoja entre calor, frio o templado');
let espacio_restante = parseInt(100);
let limite_peso = parseInt(prompt('Escoge el limite de peso en kilos'));
let duracion_viaje = parseInt(prompt('Ingresa la duracion del viaje'));
let grupo_articulos = {}; // Objeto para almacenar los artículos seleccionados para el viaje
let grupo_articulos_viaje_definitivo= {}// Objeto para almacenar los artículos recomendados para el viaje

// Función para ingresar detalles sobre los artículos
function articulos(articulos) {
  continuar = true;
  while (continuar) {
    let articulo = prompt('Ingrese el nombre del articulo');
    let peso = parseInt(prompt('Ingrese el peso del articulo en kilos'));
    let espacio = parseInt(prompt('Ingresa el espacio que ocupa el articulo 1 al 100'));
    let clima = prompt('Escoja donde se adecuede el articulo entre calor, frio o templado');
    let duracion = parseInt(prompt('Ingresa la duracion del articulo en dias:'));
    articulos[articulo] = {
      pesos: peso,
      espacios: espacio,
      climas: clima,
      tiempo: duracion
    };

    continuar = confirm('Deseas agregar un nuevo articulo');
  }
}

articulos(grupo_articulos);

alert(JSON.stringify(grupo_articulos))


// For para validar cada articulo para seleccionar si cumple con las condiciones del viaje priorizado tanto los items como el viaje,

for (articulo in grupo_articulos){
  if (grupo_articulos[articulo].climas === prognostico_clima  && grupo_articulos[articulo].pesos <= limite_peso && grupo_articulos[articulo].espacios <= espacio_restante && grupo_articulos[articulo].tiempo > duracion_viaje/3  ){
    alert("El articulo es recomendable para tu situacion:" + JSON.stringify(articulo) + JSON.stringify(grupo_articulos[articulo]))
    limite_peso-= grupo_articulos[articulo].pesos
    espacio_restante-= grupo_articulos[articulo].espacios
    grupo_articulos_viaje_definitivo[articulo] = grupo_articulos[articulo];
    delete grupo_articulos[articulo]  // Se elimina el articulo de la lista principal para que que queden los articulos destarcados
  }
  else if(grupo_articulos[articulo].climas === prognostico_clima  && grupo_articulos[articulo].pesos <= limite_peso && grupo_articulos[articulo].espacios <= espacio_restante) {
    alert("El articulo es recomendable para tu situacion aunque su duracion sea poca:" + JSON.stringify(articulo) + JSON.stringify(grupo_articulos[articulo]))
    limite_peso-= grupo_articulos[articulo].pesos
    espacio_restante-= grupo_articulos[articulo].espacios
    grupo_articulos_viaje_definitivo[articulo] = grupo_articulos[articulo];
    delete grupo_articulos[articulo]  

  }
  else if (grupo_articulos[articulo].climas !== prognostico_clima  && grupo_articulos[articulo].pesos <= limite_peso && grupo_articulos[articulo].espacios <= espacio_restante){
    alert("Puedes llevar el articulo: " + JSON.stringify(articulo) + JSON.stringify(grupo_articulos[articulo]))
    limite_peso-= grupo_articulos[articulo].pesos
    espacio_restante-= grupo_articulos[articulo].espacios
    grupo_articulos_viaje_definitivo[articulo] = grupo_articulos[articulo];
    delete grupo_articulos[articulo];  
  } 
  else{
    alert("No es recomendable llevar el articulo" + JSON.stringify(articulo) + JSON.stringify(grupo_articulos[articulo]))
  }
}

// Mensajes de alerta y finalización
alert("Espacio restante " +espacio_restante)
alert("Limite restante " +limite_peso)
alert("Grupo de articulos descartados" +JSON.stringify(grupo_articulos))
alert("articulos para viaje" +JSON.stringify(grupo_articulos_viaje_definitivo))