let leer= require(__dirname+"/modulos/datosBici.js")

/* console.log(bicis()) */

let dhBici={
    bicicletas:leer(),
   id: function(a){
       let metodo= this.bicicletas.find(function (b){
          return  b.id==a ? b.id : null
        })
    },
    venderBici:function (a){
     return this.bicicletas.map(function (b){
      if (b.id==a) 
       {b.vendida="si"
       return b}
        else{
        return "bicicleta no encontrada"}})
    },
    biciParaLaVenta:function(b){return this.bicicletas.filter(function(a){ 
        return a.vendida=="no"})},

        totalDeVentas: function(){
            return this.bicicletas.reduce(function (a,b){
                if(b.vendida=="si")
             { return a + b.precio}
             else
             {
            return a+0
             }
            },0
            )
},

aumentoBici:function(a){
    return this.bicicletas.map(function (b){
        b.precio= b.precio+(b.precio*(a/100))
        return b
    })
},
biciPorRodado:function(rodado){
    return this.bicicletas.filter(function (elemento){
        return elemento.rodado==rodado
    })
},
listarTodasLasBici: function(){
    return this.bicicletas.forEach(function(a){
        return console.log(a)
    });
}
       
    


}

 console.log(dhBici.id(10)) 
console.log(dhBici.venderBici(10))
 console.log(dhBici.biciParaLaVenta())
console.log(dhBici.totalDeVentas())
console.log(dhBici.aumentoBici(75))
console.log(dhBici.biciPorRodado(26)) 
console.log(dhBici.listarTodasLasBici()) 

    module.exports=dhBici