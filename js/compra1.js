//////////////////////////////////////////////////
//////////////////////////////////////////////////
// VARIABLES PARA EL PRECIO

let _totalPagar = ``;
let _descuento;

let _nombreCateg;
let _diaDias;
let _ultimoCorreoIngresado;

let _validarCorreo = false;
let _validarCantidad = false;

let _switchAlerta = false;

const _textoOpcion0 = `Sin descuento`;
const _textoOpcion1 = `Estudiante`;
const _textoOpcion2 = `Trainee`;
const _textoOpcion3 = `Junior`;

const _popUpCantidad = "La duración de la conferencia es de 3 días.\nSeleccione la cantidad de días que su ticket será válido.";
const _popUpComprar = "Se ha cerrado la venta de tickets debido a haberse alcanzado el cupo máximo de participantes.";

const _emptyScript = ``;
const _alertaCorreo = `Atención: La dirección de correo ingresada no es válida.`;
const _alertaCantidadError = `Atención: El número ingresado no es válido. Debe ingresar un número entre 1 (uno) y 3 (tres) correspondiente a la cantidad de días que la conferencia abarcará.`;
const _alertaCantidadCompletar = `Atención: debe complete el campo Cantidad.`;

const _precioTicket = 200;
const _porcentaje = 100;    // Porcentaje: 100%
const _descuentoA = 80;     // Descuento de 80%
const _descuentoB = 50;     // Descuento de 50%
const _descuentoC = 15;     // Descuento de 15%
const _descuentoD = 0;      // Descuento de 0%

const _categA = 1;
const _categB = 2;
const _categC = 3;

const _eventoNombre = `Codo a Codo — Conferencia Bs. As.`;
const _eventoLugar = `Buenos Aires`;
const _eventoFecha = `Octubre`;

const _formatoCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let _inputNombre = document.getElementById("inputNombre");
let _inputApellido = document.getElementById("inputApellido");
let _inputCorreo = document.getElementById("inputCorreo");
let _inputCantidad = document.getElementById("inputCantidad");
let _inputCategoria = document.getElementById("inputCategoria");

let _presentarPrecio = document.getElementById("presentarPrecio");

let _mensajeAlerta = document.getElementById("mensajeAlerta");
let _modalAlerta = new bootstrap.Modal(document.getElementById("modalAlerta"));
let _modalFalta = new bootstrap.Modal(document.getElementById("modalFalta"));
let _modalResumen = new bootstrap.Modal(document.getElementById("modalResumen"));
let _comprarWrap = document.getElementById("comprarWrap");

let _opcion0 = document.getElementById("opcion0");
let _opcion1 = document.getElementById("opcion1");
let _opcion2 = document.getElementById("opcion2");
let _opcion3 = document.getElementById("opcion3");

let _resEvento = document.getElementById("res_evento");
let _resLugar = document.getElementById("res_lugar");
let _resFecha = document.getElementById("res_fecha");
let _resNombre = document.getElementById("res_nombre");
let _resApellido = document.getElementById("res_apellido");
let _resCorreo = document.getElementById("res_correo");
let _resCategoria = document.getElementById("res_categoria");
let _resCantidad = document.getElementById("res_cantidad");
let _resPrecio = document.getElementById("res_precio");

let _listaNombre = document.getElementById("listaNombre");
let _listaApellido = document.getElementById("listaApellido");
let _listaCorreo = document.getElementById("listaCorreo");
let _listaCantidad = document.getElementById("listaCantidad");



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRESENTAR DATOS PRE-ESTABLECIDOS

let _valorTicket = document.getElementById("valorTicket");
_valorTicket.innerHTML = `VALOR DE TICKET $${_precioTicket}`;

let _caja1 = document.getElementById("caja1");
_caja1.innerHTML = _textoOpcion1;
let _porc1 = document.getElementById("porc1");
_porc1.innerHTML = `${_descuentoA}%`;

let _caja2 = document.getElementById("caja2");
_caja2.innerHTML = _textoOpcion2;
let _porc2 = document.getElementById("porc2");
_porc2.innerHTML = `${_descuentoB}%`;

let _caja3 = document.getElementById("caja3");
_caja3.innerHTML = _textoOpcion3;
let _porc3 = document.getElementById("porc3");
_porc3.innerHTML = `${_descuentoC}%`;

_opcion0.innerHTML = _textoOpcion0;
_opcion1.innerHTML = _textoOpcion1;
_opcion2.innerHTML = _textoOpcion2;
_opcion3.innerHTML = _textoOpcion3;

_presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;

console.log(`Dejo todo esto acá es porque me da pena borrarlo y sirve como un recordatorio para cuando vuelva a ver este trabajo.\n `);
console.log(`Esta es una versión anterior, que había realizado sin leer los requisitos de entrega. Solo me guié por la imagen de ejemplo.\n `);
console.log(`El  'Total a Pagar'  se actualiza automáticamente sin necesidad de presionar el botón  'Resumen'.\n `);
console.log(`Por otro lado, el botón  'Resumen'  hace aparecer un modal donde se ven todos los datos recolectados además de un botón para continuar a la sección donde uno pagaría la compra a través de su tarjeta o algo así.\n `);
console.log(`Apretar el botón  'Resumen'  sin haber completado algún datos hace aparecer otro modal que indicará cuales son los campos que faltan completar.\n `);
console.log(`Por otro lado, no tenía idea de a que hacía referencia el campo Cantidad y me parecía que permitirle a un estudiante comprar +20 tickets a $40 cada uno para que después salga a revernderlos es inadecuado.\n `);
console.log(`Así que supuse que *cantidad de días* funcionaba mejor; uno paga por cuantos días de la conferencia quiere que su ticket abarque. En  '/compra2.html'  lo solucioné poniendo un límite de 5 tickets por persona, en este caso la conferencia dura 3 días (viernes, sábado y domingo).\n `);
console.log(`En la consola se mostrarán los datos recopilados del formulario y algunos cálculos que se realizan para obtener el precio del ticket.\n——————————————————————————————`);



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// FUNCIONES

function _verificarCantidad() {

    if ( (_inputCantidad.value < 1) || (_inputCantidad.value > 3) || isNaN(_inputCantidad.value) || (_inputCantidad.value == _emptyScript) ) {

        _validarCantidad = false;
        _inputCantidad.value = _emptyScript;

        if (_switchAlerta == false) {
            _mensajeAlerta.innerHTML = _alertaCantidadError;
            _modalAlerta.show();
            console.log("Alerta de cantidad inválida.");
        }

    } else {
        // La cantidad es válida
        _validarCantidad = true;
        _mensajeAlerta.innerHTML = _emptyScript;
    }

    console.log(`Cantidad válida: ${_validarCantidad}\n——————————————————————————————`);
}

function _reescribirPrecio() {

    // Reescribiendo el precio de la entrada presente en el formulario
    console.log("Calculando precio del ticket.\n——————————————————————————————");

    if (_inputCantidad.value != _emptyScript) {
        _verificarCantidad();
    }
    // Reestablecer valores
    _inputCantidad.value = document.getElementById("inputCantidad").value;
    _inputCategoria.value = document.getElementById("inputCategoria").value;

    // Establecer descuento
    if ( _inputCategoria.value == _categA) {

        // Descuento 1
        _descuento = _descuentoA / _porcentaje;
        _nombreCateg = _textoOpcion1;

    } else if ( _inputCategoria.value == _categB) {

        // Descuento 2
        _descuento = _descuentoB / _porcentaje;
        _nombreCateg = _textoOpcion2;

    } else if ( _inputCategoria.value == _categC) {

        // Descuento 3
        _descuento = _descuentoC / _porcentaje;
        _nombreCateg = _textoOpcion3;

    } else {

        // Sin Descuento
        _descuento = _descuentoD / _porcentaje;
        _nombreCateg = _textoOpcion0;
    }

    console.log(`Cantidad: ${_inputCantidad.value}\nCategoria: ${_nombreCateg} (${_inputCategoria.value})`);

    if (_inputCategoria.value == _categA) {
        console.log(`80% de descuento: ${_descuentoA} / ${_porcentaje} = ${_descuentoA / _porcentaje}`);
    } else if (_inputCategoria.value == _categB) {
        console.log(`50% de descuento: ${_descuentoB} / ${_porcentaje} = ${_descuentoB / _porcentaje}`);
    } else if (_inputCategoria.value == _categC) {
        console.log(`15% de descuento: ${_descuentoC} / ${_porcentaje} = ${_descuentoC / _porcentaje}`);
    } else {
        console.log(`Sin descuento: ${_descuentoD} / ${_porcentaje} = ${_descuentoD / _porcentaje}`);
    }
    


    // Calcular precio
    _totalPagar = (_precioTicket - (_precioTicket * _descuento)) * _inputCantidad.value;

    // Presentar precio
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;

    console.log(`Total a Pagar: (${_precioTicket} - (${_precioTicket} * ${_descuento})) * ${_inputCantidad.value} = ${_totalPagar}\n——————————————————————————————`);

    // Definir día/días
    if (_inputCantidad.value != 1) {
        _diaDias = `días`;
    } else {
        _diaDias = `día`;
    }
}

function _reescribirDatos() {

    // Reestableciendo valores
    _inputNombre.value = document.getElementById("inputNombre").value;
    _inputApellido.value = document.getElementById("inputApellido").value;

    console.log(`Nombre/s: ${_inputNombre.value}\nApellido/s: ${_inputApellido.value}\n——————————————————————————————`);
}

function _verificarCorreo() {

    // Reestableciendo valores
    _inputCorreo.value = document.getElementById("inputCorreo").value;

    console.log(`Correo: ${_inputCorreo.value}`);

    // Validación del correo
    if (_inputCorreo.value == _ultimoCorreoIngresado) {

        // Si el correo no cambio, no se mostrará el modal de alerta
        _mensajeAlerta.innerHTML = _emptyScript;

    } else if ( !(_inputCorreo.value.match(_formatoCorreo)) ) {

        if (_switchAlerta == false) {
            // El formato del correo es incorrecto
            _mensajeAlerta.innerHTML = _alertaCorreo;
            _modalAlerta.show();
            console.log("Alerta de correo inválido.");
        }

        // El correo no es válido
        _validarCorreo = false;

    } else {

        // El correo es válido
        _validarCorreo = true;

        _mensajeAlerta.innerHTML = _emptyScript;
    }

    _ultimoCorreoIngresado = _inputCorreo.value;
    console.log(`Correo válido: ${_validarCorreo}\n——————————————————————————————`);
}

function _mostrarResumen() {

    console.log("Chequeo de datos antes de mostrar el modal de resumen.\n——————————————————————————————");
    _switchAlerta = true;

    // Reescribir datos antes de mostrar el resumen
    _reescribirDatos();
    _verificarCorreo();
    _reescribirPrecio();

    if ( (_validarCorreo == true) && (_validarCantidad == true) && (_inputNombre.value != _emptyScript) && (_inputApellido != _emptyScript) )
    {
        console.log("El chequeo dio un resultado positivo.\nSe mostrará el modal de resumen.\n——————————————————————————————");
        _resEvento.innerHTML = `${_eventoNombre}`;
        _resLugar.innerHTML = `${_eventoLugar}`;
        _resFecha.innerHTML = `${_eventoFecha}`;
        _resNombre.innerHTML = `${_inputNombre.value}`;
        _resApellido.innerHTML = `${_inputApellido.value}`;
        _resCorreo.innerHTML = `${_inputCorreo.value}`;
        _resCategoria.innerHTML = `${_nombreCateg}`;
        _resCantidad.innerHTML = `${_inputCantidad.value} ${_diaDias}`;
        _resPrecio.innerHTML = `$${_totalPagar}`;

        // Modal para mostrar el resumen de la compra
        _modalResumen.show();

    } else {

        // Nombre
        if (_inputNombre.value == _emptyScript) {
            _listaNombre.innerHTML = `• Nombre`;
        } else {
            _listaNombre.innerHTML = _emptyScript;
        }

        // Apellido
        if (_inputApellido.value == _emptyScript) {
            _listaApellido.innerHTML = `• Apellido`;
        } else {
            _listaApellido.innerHTML = _emptyScript;
        }

        // Correo
        if (_validarCorreo == false) {
            _listaCorreo.innerHTML = `• Correo`;
        } else {
            _listaCorreo.innerHTML = _emptyScript;
        }

        // Cantidad
        if (_validarCantidad == false || _inputCantidad.value == _emptyScript) {
            _listaCantidad.innerHTML = `• Cantidad`;
        } else {
            _listaCantidad.innerHTML = _emptyScript;
        }

        // Modal para mostrar cuantos campos faltan completar
        _modalFalta.show();

        console.log("Faltan completar campos.\n——————————————————————————————");
    }

    _switchAlerta = false;
}

function _reiniciarPrecio() {
    _validarCantidad = false;
    _inputCantidad.value = _emptyScript;
    _totalPagar = _emptyScript;
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;
    console.log("Se limpiaron todos los campos del formulario.\n——————————————————————————————");
}

function _cerrarModal() {
    console.log("Se cerró el modal de resumen.\n——————————————————————————————");
}

function _cambiarDescuento(ev) {

    // Cambiar el selector de descuentos al valor correspondiente de la tarjeta cliqueada
    _inputCategoria.value = ev;

    // Reescribir precio al cambiar la categoría a través de una tarjeta
    _reescribirPrecio();
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINCIPAL

// Llamar a las funciones cuando uno de los inputs cambie
_inputNombre.onkeyup = _reescribirDatos;
_inputApellido.onkeyup = _reescribirDatos;
_inputCorreo.onblur = _verificarCorreo;
_inputCategoria.onchange = _reescribirPrecio;
_inputCantidad.onkeyup = _reescribirPrecio;

// Agregar texto a la etiqueta title de un tooltip popup
_inputCantidad.title = _popUpCantidad;
_comprarWrap.title = _popUpComprar;