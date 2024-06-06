let botonCalcular = document.getElementById("calcular")
botonCalcular.addEventListener("click", function(){
    let cantidadHombres = document.getElementById("cantidadhombres").value
    let cantidadMujeres = document.getElementById("cantidadmujeres").value
    let cantidadNinios = document.getElementById("cantidadninios").value
    let presupuesto = document.getElementById("presupuesto").value
    let resultado = (cantidadHombres*0.5)+(cantidadMujeres*0.35)+(cantidadNinios*0.15)
    //del 0 al 4, 0-1 bajo, 2-3 medio, 4 alto
    let cortesSugeridos = []
    if(presupuesto < 2){
        cortesSugeridos.push(cortesDeCarne[5].corte )
        cortesSugeridos.push(cortesDeCarne[6].corte)
    }else if(presupuesto <4){
        cortesSugeridos.push(cortesDeCarne[4].corte)
        cortesSugeridos.push(cortesDeCarne[3].corte)
    }else{
        cortesSugeridos.push(cortesDeCarne[0].corte)
        cortesSugeridos.push(cortesDeCarne[1].corte)
        cortesSugeridos.push(cortesDeCarne[2].corte)
    }
    let achuras = []
    if(document.getElementById("chori").checked = true){
        let cantidadChoris =  Number(cantidadHombres)+ Number(cantidadMujeres)+Number(cantidadNinios)
        achuras.push("Cantidad de choris: " + cantidadChoris + "\n")
    }
    if(document.getElementById("morcilla").checked = true){
        let cantidadMorcilla =  (Number(cantidadHombres)+ Number(cantidadMujeres)+Number(cantidadNinios)) / 2
        achuras.push(" Cantidad de morcilla: " + cantidadMorcilla + "\n")
    }
    if(document.getElementById("salchicha").checked = true){
        let cantidadsalchicha =  (Number(cantidadHombres)+ Number(cantidadMujeres)+Number(cantidadNinios)) / 4
        achuras.push(" Cantidad de salchicha parrillera: " + cantidadsalchicha+ "\n")
    }
    if(document.getElementById("chinchulin").checked = true){
        let cantidadchinchulin =  (Number(cantidadHombres)+ Number(cantidadMujeres)+Number(cantidadNinios)) / 2
        achuras.push(" Cantidad de chinchulin: " + cantidadchinchulin + " kgs."+ "\n")
    }
    if(document.getElementById("molleja").checked = true){
        let cantidadmolleja =  (Number(cantidadHombres)+ Number(cantidadMujeres)+Number(cantidadNinios)) / 4
        achuras.push(" Cantidad de molleja: " + cantidadmolleja+ "\n")
    }





    document.getElementById("DIVresultado").innerText ="La cantidad de carne es: "+ resultado +" kgs. \n" + " Cortes sugeridos: " + cortesSugeridos + "\n Achuras: " + achuras

}
)



let cortesDeCarne = [
    {corte:"Vacio",score:1},
    {corte:"Nalga",score:2},
    {corte:"Asado",score:3},
    {corte:"Matambre",score:4},
    {corte:"Tapa de asado",score:5},
    {corte:"Paleta",score:6},
    {corte:"Falda",score:7},
]
