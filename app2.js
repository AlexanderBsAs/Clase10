let arrayBicicletas= require(__dirname+"/modulos/datosBici.js")

let dhBici={
    bicicletas:arrayBicicletas,
   buscarBici: function(id){
       return this.bicicletas.find(function (elemento){
          return  elemento.id==id ? elemento.id : null
        })
    },
    venderBici: function(id){
         if(this.buscarBici(id)){
        this.buscarBici(id).vendida="si"
        return dhBici.buscarBici(id)
     }
    else {
        return "bicicleta no encontrada"
    } 
    },

    biciParaLaVenta:function(){return this.bicicletas.filter(function(elemento){ 
        return elemento.vendida=="no"})},

        totalDeVentas: function(){
            return this.bicicletas.reduce(function (acum,elemento){
                if(elemento.vendida=="si")
             { return acum + elemento.precio}
             else
             {
            return acum+0
             }
            },0
            )
},

aumentoBici:function(porcentaje){
    return this.bicicletas.map(function (elemento){
        elemento.precio= elemento.precio+(elemento.precio*(porcentaje/100))
        return elemento
    })
},
biciPorRodado:function(rodado){
    return this.bicicletas.filter(function (elemento){
        return elemento.rodado==rodado
    })
},
listarTodasLasBici: function(){
     return this.bicicletas.forEach(elemento => {
       console.log(elemento)        
     });
    }
}

 console.log(dhBici.buscarBici(100))  
//console.log(dhBici.venderBici(15)) 
//  console.log(dhBici.biciParaLaVenta())
// console.log(dhBici.totalDeVentas())
//console.log(dhBici.aumentoBici(75))
//console.log(dhBici.biciPorRodado(26))  
 //dhBici.listarTodasLasBici() 
    module.exports=dhBici