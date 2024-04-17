//Funciones 
let articulos_totales = {}
let articulos_lumbral = {}
function articulo_nuevo(articulo){
    opcion = confirm("Ingresa aceptar si deseas agregar un nuevo articulo ")
    while (opcion == true){
        let nombre_articulo = prompt("Ingrese el nombre del articulo:")
        let precio = parseInt(prompt("Ingresa el precio del articulo: "))
        if (!isNaN(precio)){
            articulo[nombre_articulo] = precio;
            alert("Articulo almacenado")
            alert(JSON.stringify(articulo))
           
        }
        else{
            alert("Ingresa un valor valido")
        }
        opcion = confirm("Ingresa aceptar si deseas agregar un nuevo articulo ")

    
    }

    
}
function articulos_disponibles_presupuesto(articulos_lumbral){
    for ( let articulo in articulos_totales){
        const precio = articulos_totales[articulo]
        if (precio <= disponible){
            articulos_lumbral[articulo] = precio
        }
        
    }
    alert("Estos son los articulos disponibles para gastar" + JSON.stringify(articulos_lumbral))
}

function articulo_menor(articulos_lumbral){
    let articulo_recomendado = null
    let precio_menor = Infinity
    for (articulo in articulos_lumbral){
        precio = articulos_lumbral[articulo]
        if (precio < precio_menor){
            precio_menor = precio
            articulo_recomendado = articulo
        }
    }
    alert("EL articulo con menor precio es " + articulo_recomendado + " Con precio de " + precio_menor )
    

}

//Declarar presupuestos iniciales

let presupuesto = parseInt(prompt("Ingresa el presupuesto general "))
let presupuesto_alojamiento = parseInt(prompt("Ingresa el presupuesto de alojamiento  ")) //20
let presupuesto_transporte = parseInt(prompt("Ingresa el presupuesto de transporte  "))//20
let presupuesto_alimentacion = parseInt(prompt("Ingresa el presupuesto de alimentación  "))//30
let lumbral = parseInt(prompt("Del 1 al 100 cuanto deseas que seas porcentaje para emergencias"))//10
let valor_lumbral = lumbral/100 * presupuesto //0.10 * 100 = 10
let total_costos = presupuesto_alimentacion + presupuesto_alojamiento + presupuesto_transporte // 20 + 20 +30 = 70
let sobrante = presupuesto - total_costos //100 - 70 = 30 
let disponible = sobrante - valor_lumbral

if (sobrante <= valor_lumbral){//30 -10 = 20 
    alert("Evita gastos adicionales para no sobrepasar su presupuesto.")

}
else{
    alert("tienes suficiente presupuesto para un articulo extra, el sobrante es :" + disponible)// 30 -10 = 20 
    articulo_nuevo(articulos_totales)
    articulos_disponibles_presupuesto(articulos_lumbral)
    articulo_menor(articulos_lumbral)


}
