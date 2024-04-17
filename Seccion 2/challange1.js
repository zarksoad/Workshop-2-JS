//Decisiones 

let salir_a_correr = null 
let tomar_dia_libre = null 
let trabajar = null 

// Factores

let nivel_de_energia = null
let clima = undefined
let carga_de_trabajo = null


// decisiones 

nivel_de_energia =parseInt(prompt("Del 1 al 100 cual es tu nivel de energia")) 
clima = confirm("ingrega aceptar para un buen clima o cancelar para un mal clima") 
carga_de_trabajo = parseInt(prompt("Ingresa tu carga de trabajo")) 


if (nivel_de_energia <=10 && clima === false && carga_de_trabajo <=50){
    salir_a_correr = false
    tomar_dia_libre = true
    console.log("Julian desea descansar debido a su energia y el clima")

}

else if(nivel_de_energia <=10 && clima === false && carga_de_trabajo >50){
        carga_de_trabajo = true
        console.log("Julian desea trabajar en sus projectos")
}

else if (nivel_de_energia >= 50 && clima === false  && carga_de_trabajo  >= 70 ){
    salir_a_correr = false
    tomar_dia_libre = false
    carga_de_trabajo = true 
    console.log("Julian desea trabajar debido a las condiciones actuales")
}

else if (nivel_de_energia >= 50 && clima === true && carga_de_trabajo <= 35 ){
    salir_a_correr = true

}
else{
    decision = parseInt(prompt("Puedes eligir las siguientes opciones: \n 1 para salir a correr \n 2 para trabajar \n o cualquier tecla para tomar dia libre"))
    {
        if (decision === 1){
            salir_a_correr = true
            console.log("Julian desea salir a correr")
        }
        else if (decision === 2){
            carga_de_trabajo = true
            console.log("Julian desea trabajar")

        }
        else{
            tomar_dia_libre = true 
            console.log("Julian desea tomar el dia libre")
        }

    }
}





