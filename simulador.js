//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    //let ingreso = document.getElementById("txtIngresos");
    //let ingresoSTR = ingreso.value;
    //let ingresoFloat = parseFloat(ingresoSTR);
    let ingresoFloat = recuperarFloat("txtIngresos");

    //let egreso = document.getElementById("txtEgresos");
    //let egresoSTR = egreso.value;
    //let egresoFloat = parseFloat(egresoSTR);
    let egresoFloat = recuperarFloat("txtEgresos");

    //let calcularValor = calcularDisponible(ingresoFloat, egresoFloat);
    //let cmpCalculo = document.getElementById("spnDisponible");
    //cmpCalculo.textContent = calcularValor;
    let calcularValor = calcularDisponible(ingresoFloat, egresoFloat);
    mostrarEnSpan("spnCapacidadPago", calcularPago);

    //let calcularPago = calcularCapacidadPago(calcularValor);
    //let cmpPago = document.getElementById("spnCapacidadPago");
    //cmpPago.textContent = calcularPago;
    let calcularPago = calcularCapacidadPago(calcularValor);
    mostrarEnSpan("spnCapacidadPago", calcularPago);
    
    //let cmpMonto = document.getElementById("txtMonto");
    //let montoSTR = cmpMonto.value;
    //let montoFloat = parseFloat(montoSTR);
    let montoFloat = recuperarFloat("txtMonto");

    //let cmpPlazo = document.getElementById("txtPlazo");
    //let plazoSTR = cmpPlazo.value;
    //let plazoInt = parseInt(plazoSTR);
    let plazoInt = recuperarEntero("txtPlazo");

    //let cmpInteres = document.getElementById("txtTasaInteres");
    //let interesSTR = cmpInteres.value;
    //let interesFloat = parseFloat(interesSTR);
    let interesFloat = recuperarFloat("txtTasaInteres");

    let calcularInteres = calcularInteresSimple(montoFloat, interesFloat, plazoInt);
    //let cmpTotal = document.getElementById("spnInteresPagar");
    //cmpTotal.textContent = calcularInteres;
    mostrarEnSpan("spnInteresPagar", calcularInteres);
    
    let cmpPagar = calcularTotalPagar(montoFloat, calcularInteres);
    //let cmpValor = document.getElementById("spnTotalPrestamo");
    //cmpValor.textContent = cmpPagar;
    mostrarEnSpan("spnTotalPrestamo", cmpPagar);

    let cmpCalcularCuota = calcularCuotaMensual(cmpPagar, plazoInt);
    //let cmpCuotaCalculada = document.getElementById("spnCuotaMensual");
    //cmpCuotaCalculada.textContent = cmpCalcularCuota;
    mostrarEnSpan("spnCuotaMensual", cmpCalcularCuota);

    let aprobado = aprobarCredito(calcularPago, cmpCalcularCuota);
    if (aprobado) {
        mostrarEnSpan("spnEstadoCredito", "CREDITO APROBADO");
    } else {
        mostrarEnSpan("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}