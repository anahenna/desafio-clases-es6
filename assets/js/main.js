import Cliente from "./cliente.js";
import Impuesto from "./impuesto.js";

const impuestoCliente01 = new Impuesto(40000, 5000);
const impuestoCliente02 = new Impuesto(30000, 8000);

const cliente01 = new Cliente("Cliente 01", impuestoCliente01);
const cliente02 = new Cliente("Cliente 02", impuestoCliente02);

const calcularImpuesto = function (impuesto) {
    const montoBrutoAnual = impuesto.montoBrutoAnual;
    const deducciones = impuesto.deducciones;
    return (montoBrutoAnual - deducciones) * 0.21;
};

const impuestoTotalCliente01 = calcularImpuesto(cliente01.impuesto);
const impuestoTotalCliente02 = calcularImpuesto(cliente02.impuesto);

console.log(`Impuesto total para ${cliente01.nombre}: ${impuestoTotalCliente01}`);
console.log(`Impuesto total para ${cliente02.nombre}: ${impuestoTotalCliente02}`);

