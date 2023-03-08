const {fork} = require('child_process');
const Product = require ('../models/products_model.js')

const watchIndex = (req, res, next) => {
    Product.find({}, (err, docs)=>{
        if (err) throw err;
        res.render('index', {data: docs})
    })
}

const watchInfo = (req, res, next) => {
    res.render('info')
    console.log('Directorio actual de trabajo:', process.cwd())
    console.log('id del proceso: ', process.pid)
    // process.exit()
    // console.log(process.ppid) 
    console.log('version de node: ', process.version)
    console.log('titulo del proceso: ', process.title)
    console.log('Sistema Operativo: ', process.platform)
    console.log('Uso de la memoria: ', process.memoryUsage())

}
const randomNumGenerator = (req,res,next)=>{
    const num = req.params.num;
    if (num == 0) {
        return res('No esta definido la cantidad de numeros imprir')
    }
    const child = fork('./src/randomChild/calculoChild.js')
    child.send(num)
    child.on("message", (message)=>{
        console.log(message);
        res.send(message)
    })
    child.on("exit", (code) =>{
        console.log('Child Exit with code', code);
    })
}
module.exports ={
    watchInfo,
    randomNumGenerator,
    watchIndex
}