// Condiciones


let prognostico_clima = prompt('Escoja entre calor, frio o templado');



let espacio_restante = parseInt(100);
let limite_peso = parseInt(prompt('Escoge el limite de peso en kilos'));
let duracion_viaje = parseInt(prompt('Ingresa la duracion del viaje'));
grupo_articulos = {}; 
grupo_articulos_viaje_definitivo= []
function articulos(articulos) {
  continuar = true;
  while (continuar) {
    let articulo = prompt('Ingrese el nombre del articulo');
    let peso = parseInt(prompt('Ingrese el peso del articulo en kilos'));
    let espacio = parseInt(prompt('Ingresa el espacio que ocupa el articulo 1 al 100'));
    let clima = prompt('Escoja donde se adecuede el articulo entre calor, frio o templado');
    articulos[articulo] = {
      pesos: peso,
      espacios: espacio,
      climas: clima
    };

    continuar = confirm('Deseas agregar un nuevo articulo');
  }
}

articulos(grupo_articulos);

alert(JSON.stringify(grupo_articulos))

//Validar clima

for (articulo in grupo_articulos){
  if (grupo_articulos[articulo].climas === prognostico_clima  && grupo_articulos[articulo].pesos <= limite_peso && grupo_articulos[articulo].espacios <= espacio_restante ){
    alert("El articulo se ajusta mejor a tu situacion es:" + JSON.stringify(articulo) + JSON.stringify(grupo_articulos[articulo]))
    limite_peso-= grupo_articulos[articulo].pesos
    espacio_restante-= grupo_articulos[articulo.espacio]
    grupo_articulos_viaje_definitivo.push( grupo_articulos[articulo]
      /* climas: grupo_articulos[articulo].climas,
      espacios: grupo_articulos[articulo].espacios */
  );
    

  }
  /* else if (grupo_articulos[articulo].climas !== prognostico_clima  && grupo_articulos[articulo].pesos <= limite_peso && grupo_articulos[articulo].espacios <= espacio_restante){
    alert("Puedes llevar el articulo" + JSON.stringify(articulo) + JSON.stringify(grupo_articulos[articulo]))
    limite_peso-= grupo_articulos[articulo].pesos
    espacio_restante-= grupo_articulos[articulo.espacio]
    grupo_articulos_viaje_definitivo[articulo] 
    delete grupo_articulos[articulo];  
    

  } */
  else{
    alert("Ningun articulo cumple con las condiciones para ser el articulo ideal")
  }
}

alert(`JSON.stringify(grupo_articulos_viaje_definitivo)`)