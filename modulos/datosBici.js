let fs=require("fs")
let bicis=__dirname+ "/bicicletas.json"

function leerLista(){
    let leer=fs.readFileSync(bicis,"utf-8")
    let leer2=JSON.parse(leer)

    return leer2
}

let arrayBicicletas=leerLista()


module.exports=arrayBicicletas