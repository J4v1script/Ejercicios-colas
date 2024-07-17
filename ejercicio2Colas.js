/*
2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. 
Sin embargo, llegada la hora de inicio hay muchos “colados”, 
es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. 
Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

Cola: [ 
            { user:‘User1’, ticket:true },
            { user:‘User2’, ticket:true },
            { user:‘User3’, ticket:false },
            { user:‘User4’, ticket:true },
            { user:‘User5’, ticket:false },
            { user:‘User6’, ticket:false },
            { user:‘User7’, ticket:true },
            { user:‘User8’, ticket:true },
            { user:‘User9’, ticket:true },
            { user:‘User10’, ticket:false },
            { user:‘User11’, ticket:true },
];

*/

console.log("===================  EJERCICIO COLAS 2 ==============");

let cola = [
            { user:"User1", ticket:true },
            { user:"User2", ticket:true },
            { user:"User3", ticket:false },
            { user:"User4", ticket:true },
            { user:"User5", ticket:false },
            { user:"User6", ticket:false },
            { user:"User7", ticket:true },
            { user:"User8", ticket:true },
            { user:"User9", ticket:true },
            { user:"User10", ticket:false },
            { user:"User11", ticket:true },
];

console.log(" ==========  La cola INICIAL es:  =============");
console.log(cola);
let personasRetiradas = [];
let retirando;
let colaFinal = [];

function Retirando(user, ticket){
    this.user = user;
    this.ticket = ticket;
}

function Reformando(user, ticket){
    this.user = user;
    this.ticket = ticket;
}


for(let i = 0; i < cola.length; i ++){

    if(cola[i].ticket == false){

        console.log(`Se identificó que la persona: ${cola[i].user} ubicada en la posicion ${i} NO tiene boleto, se pasa a la cola de personas retiradas`);

        retirando = new Retirando(cola[i].user,cola[i].ticket);

        console.log(retirando);

        personasRetiradas.push(retirando);

        
        
    }
    else{

        reformando = new Reformando(cola[i].user, cola[i].ticket)
        colaFinal.push(reformando);
    }

}


console.log(" ==========  La cola de personas retiradas es: ===========  ");
console.log(personasRetiradas);
console.log(" ==========  La cola final quedó:  =============");
console.log(colaFinal);
