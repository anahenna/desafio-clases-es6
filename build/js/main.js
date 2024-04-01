"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestoCliente01 = new _impuesto["default"](40000, 5000);
var impuestoCliente02 = new _impuesto["default"](30000, 8000);
var cliente01 = new _cliente["default"]("Cliente 01", impuestoCliente01);
var cliente02 = new _cliente["default"]("Cliente 02", impuestoCliente02);
var calcularImpuesto = function calcularImpuesto(impuesto) {
  var montoBrutoAnual = impuesto.montoBrutoAnual;
  var deducciones = impuesto.deducciones;
  return (montoBrutoAnual - deducciones) * 0.21;
};
var impuestoTotalCliente01 = calcularImpuesto(cliente01.impuesto);
var impuestoTotalCliente02 = calcularImpuesto(cliente02.impuesto);
console.log("Impuesto total para ".concat(cliente01.nombre, ": ").concat(impuestoTotalCliente01));
console.log("Impuesto total para ".concat(cliente02.nombre, ": ").concat(impuestoTotalCliente02));