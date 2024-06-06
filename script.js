document.addEventListener("DOMContentLoaded", () => {
    const botonCalcular = document.getElementById("calcular");
    botonCalcular.addEventListener("click", calcularAsado);
});

const cortesDeCarne = [
    { corte: "Vacio", score: 1 },
    { corte: "Nalga", score: 2 },
    { corte: "Asado", score: 3 },
    { corte: "Matambre", score: 4 },
    { corte: "Tapa de asado", score: 5 },
    { corte: "Paleta", score: 6 },
    { corte: "Falda", score: 7 },
];

function calcularAsado() {
    const cantidadHombres = parseInt(document.getElementById("cantidadhombres").value) || 0;
    const cantidadMujeres = parseInt(document.getElementById("cantidadmujeres").value) || 0;
    const cantidadNinios = parseInt(document.getElementById("cantidadninios").value) || 0;
    const presupuesto = parseInt(document.getElementById("presupuesto").value);

    const cantidadCarne = calcularCantidadCarne(cantidadHombres, cantidadMujeres, cantidadNinios);
    const cortesSugeridos = sugerirCortes(presupuesto);
    const achuras = calcularAchuras(cantidadHombres, cantidadMujeres, cantidadNinios);

    mostrarResultados(cantidadCarne, cortesSugeridos, achuras);
}

function calcularCantidadCarne(hombres, mujeres, ninios) {
    const carnePorHombre = 0.5; // kg
    const carnePorMujer = 0.35; // kg
    const carnePorNinio = 0.15; // kg

    return (hombres * carnePorHombre) + (mujeres * carnePorMujer) + (ninios * carnePorNinio);
}

function sugerirCortes(presupuesto) {
    if (presupuesto <= 1) {
        return [cortesDeCarne[5].corte, cortesDeCarne[6].corte];
    } else if (presupuesto <= 3) {
        return [cortesDeCarne[3].corte, cortesDeCarne[4].corte];
    } else {
        return [cortesDeCarne[0].corte, cortesDeCarne[1].corte, cortesDeCarne[2].corte];
    }
}

function calcularAchuras(hombres, mujeres, ninios) {
    const totalPersonas = hombres + mujeres + ninios;
    const achuras = [];

    if (document.getElementById("chori").checked) {
        achuras.push(`Cantidad de choris: ${totalPersonas}`);
    }
    if (document.getElementById("morcilla").checked) {
        achuras.push(`Cantidad de morcilla: ${Math.ceil(totalPersonas / 2)}`);
    }
    if (document.getElementById("salchicha").checked) {
        achuras.push(`Cantidad de salchicha parrillera: ${Math.ceil(totalPersonas / 4)}`);
    }
    if (document.getElementById("chinchulin").checked) {
        achuras.push(`Cantidad de chinchulin: ${(totalPersonas / 2).toFixed(2)} kgs`);
    }
    if (document.getElementById("molleja").checked) {
        achuras.push(`Cantidad de molleja: ${Math.ceil(totalPersonas / 4)}`);
    }

    return achuras;
}

function mostrarResultados(cantidadCarne, cortesSugeridos, achuras) {
    const resultadoDiv = document.getElementById("DIVresultado");
    resultadoDiv.innerHTML = `
        La cantidad de carne es: ${cantidadCarne.toFixed(2)} kgs.<br>
        Cortes sugeridos: ${cortesSugeridos.join(", ")}<br>
        Achuras: ${achuras.join("<br>")}
    `;
}
