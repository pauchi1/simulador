//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    let valorDisponible = ingresos - egresos;
    if (valorDisponible < 0) {
        valorDisponible = 0;
    }
    return valorDisponible;
}
function calcularCapacidadPago(montoDisponible) {
    let CapacidadPago = montoDisponible * 0.5;
    return CapacidadPago;
}