const { set } = require("mongoose");

console.log('Child created', process.pid);

process.on("message",(message)=>{
    console.log(message)
    const result = randomNum(message)
    process.send(result)
    setTimeout(process.exit, 5000)
})

function randomNum (number) {
    numeros = []
    for (let index = 0; index < number; index++) {
        const element = Math.floor(Math.random() * (1000-1) + 1) ;
        numeros.push(element)
    }
    return numeros; 
}