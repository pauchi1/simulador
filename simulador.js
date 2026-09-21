//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    let ingreso = document.getElementById("txtIngresos");
    let ingresoSTR = ingreso.value;
    let ingresoFloat = parseFloat(ingresoSTR);

    let egreso = document.getElementById("txtEgresos");
    let egresoSTR = egreso.value;
    let egresoFloat = parseFloat(egresoSTR);

    let calcularValor = calcularDisponible(ingresoFloat, egresoFloat);
    
    let cmpCalculo = document.getElementById("spnDisponible");
    cmpCalculo.textContent = calcularValor;

    let calcularPago = calcularCapacidadPago(calcularValor);

    let cmpPago = document.getElementById("spnCapacidadPago");
    cmpPago.textContent = calcularPago;

    let cmpMonto = document.getElementById("txtMonto");
    let montoSTR = cmpMonto.value;
    let montoFloat = parseFloat(montoSTR);

    let cmpPlazo = document.getElementById("txtPlazo");
    let plazoSTR = cmpPlazo.value;
    let plazoInt = parseInt(plazoSTR);

    let cmpInteres = document.getElementById("txtTasaInteres");
    let interesSTR = cmpInteres.value;
    let interesFloat = parseFloat(interesSTR)

    let calcularInteres = calcularInteresSimple(montoFloat, interesFloat, plazoInt);

    let cmpTotal = document.getElementById("spnInteresPagar");
    cmpTotal.textContent = calcularInteres;
}