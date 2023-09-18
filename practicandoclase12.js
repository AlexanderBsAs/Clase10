/* let autosImportados=require("./autos")
let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(patente){
     return this.autos.filter(function(elemento){
         return elemento.patente==patente
      })
   },
}

console.log(concesionaria.buscarAuto("AP123")) */

let autosImportados=require("./autos")
let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(patente){
    let variable=""
    let metodo= this.autos.find((elemento)=>elemento.patente==patente
   )
if(metodo){
    return metodo
}
else{
    return null
}},

venderAuto:function(patente){
   if(this.buscarAuto(patente)){
      this.buscarAuto(patente).vendido=true
      return this.buscarAuto(patente)
   }
   else{
      return null
   }
},
 autosParaLaVenta: function(){ return this.autos.filter(function(elemento){
    return elemento.vendido== false
 })},
 autosNuevos: function()
 {auto=this.autosParaLaVenta()
 return auto.filter(function(elemento){
    return elemento.km<100
 })
 },
 listaDeVentas: function(){ 
   
   let hola= this.autos.filter(function( elemento){
 return elemento.vendido==true
 
 })

 let chau=hola.map(function(elemento){
   return elemento.precio
 })
return chau

},
totalDeVentas: function(){
   return this.listaDeVentas().reduce(function(indice,elemento){
   return indice+elemento
 
   },0)
},
puedeComprar:function(auto,persona){
   return persona.capacidadDePagoEnCuotas >=auto.precio/auto.cuotas&&persona.capacidadDePagoTotal >=auto.precio

},
autosQuePuedeComprar:function(persona){
   let autopapa=this.autosParaLaVenta()
  /*  let venta=this.puedeComprar(auto, persona) */
   
   return this.autos.filter(function(elemento){
      let venta=concesionaria.puedeComprar(elemento,persona)
      if (venta){
         return concesionaria.autosParaLaVenta()
      }
   })
/*    let autos2=this.autosParaLaVenta()
return autopapa.filter(function (elemento){
    let venta=this.puedeComprar(persona,elemento)
if(venta){
   return elemento
}   }
) */
}

}

//console.log(concesionaria.venderAuto("APL123"))
//console.log("----------")
/*  console.log(concesionaria.puedeComprar({
   marca:"Toyota" ,
   modelo: "Corolla", 
   precio: 100000,
   km:0 ,
   color: "Blanco",
   cuotas:14,
   anio:2019 ,
   patente:"JK116" ,
   vendido:false,
},{
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }))    */

   console.log(concesionaria.autosQuePuedeComprar({
      nombre: "Juan",
      capacidadDePagoEnCuotas: 20000,
      capacidadDePagoTotal: 100000,
      }))
/* let Null=null

console.log(Null) */