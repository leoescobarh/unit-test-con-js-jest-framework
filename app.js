// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
 const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYenes= valueInDollar * 127.9;
    // retornamos el valor
    return valueInYenes;
}
const fromYenToPound = function(valueInYenes){
    // convertimos el valor a dolares
    let valueInPound= valueInYenes * 0.8;
    // retornamos el valor
    return valueInPound;
}


// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }