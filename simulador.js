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
}