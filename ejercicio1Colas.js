/*
1.- Se tiene una cola de colores y se tiene que dividir en dos colas, 
respetando el orden y alternando a partir de su índice. 
los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]


*/

console.log("===================  EJERCICIO COLAS 1 ==============");

let colores = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];


function repartir (cola){

    console.log(`La lista original es: ${cola}`);

    console.log("==================================");

    

    // let nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
    // console.log(nombres);
    // let masculinos = nombres.slice(1, 3);
    // console.log(masculinos);

    // let prueba = cola.slice(0,1);
    // console.log(prueba);

    let pares = [];
    let inpares = [];
    let temporal;


    for(let i = 0; i < cola.length; i++){

    let indicador = i % 2;
    
    if(indicador ===0){

        
        console.log(`La posición: ${i} con el valor de: "${cola[i]}"  se encuentra en una posición PAR, se agrega a la cola de PARES`);
        y = i + 1;
        temporal = cola.slice(i,y);
        let conta = pares.push(temporal) ;
        
        // const animals = ['pigs', 'goats', 'sheep'];
        // const count = animals.push('cows');
        // console.log(animals);
      
      
    }
    
    else{

        console.log(`La posición: ${i} con el valor de: "${cola[i]}"  se encuentra en una posición INPAR, se agrega a la cola de INPARES`);
        y = i + 1;
        temporal = cola.slice(i,y);
        let conta = inpares.push(temporal) ;
        
    }


    }
    console.log("==========================================");
    console.log(`La lista de posiciones pares es: ${pares}`);
    console.log(`La lista de posiciones pares es: ${inpares}`);
    


}


repartir(colores);


