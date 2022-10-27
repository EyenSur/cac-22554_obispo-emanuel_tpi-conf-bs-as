//////////////////////////////////////////////////
//////////////////////////////////////////////////
// VARIABLES PARA EL PRECIO

let _totalPagar = ``;
let _descuento;

let _ultimoCorreoIngresado;

let _validarCorreo = false;
let _validarCantidad = false;

let _switchAlerta = false;

const _textoOpcion0 = `Estudiante`;
const _textoOpcion1 = `Trainee`;
const _textoOpcion2 = `Junior`;

const _popUpCantidad = "Solo se admiten hasta 5 tickets por persona.";
const _popUpComprar = "Se ha cerrado la venta de tickets debido a haberse alcanzado el cupo máximo de participantes.";

const _emptyScript = ``;
const _alertaCorreo = `Atención: La dirección de correo ingresada no es válida.`;
const _alertaCantidadError = `Atención: El número ingresado no es válido. Debe ingresar un número entre 1 (uno) y 5 (cinco) correspondiente a la cantidad de tickets disponibles por persona.`;
const _alertaCantidadCompletar = `Atención: debe complete el campo Cantidad.`;

const _precioTicket = 200;
const _porcentaje = 100;    // Porcentaje: 100%
const _descuentoA = 80;     // Descuento de 80%
const _descuentoB = 50;     // Descuento de 50%
const _descuentoC = 15;     // Descuento de 15%

const _categA = 0;
const _categB = 1;
const _categC = 2;

const _formatoCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let _inputNombre = document.getElementById("inputNombre");
let _inputApellido = document.getElementById("inputApellido");
let _inputCorreo = document.getElementById("inputCorreo");
let _inputCantidad = document.getElementById("inputCantidad");
let _inputCategoria = document.getElementById("inputCategoria");

let _presentarPrecio = document.getElementById("presentarPrecio");

let _mensajeAlerta = document.getElementById("mensajeAlerta");
let _modalFalta = new bootstrap.Modal(document.getElementById("modalFalta"));
let _modal = new bootstrap.Modal(document.getElementById("modal"));

let _opcion0 = document.getElementById("opcion0");
let _opcion1 = document.getElementById("opcion1");
let _opcion2 = document.getElementById("opcion2");

let _listaNombre = document.getElementById("listaNombre");
let _listaApellido = document.getElementById("listaApellido");
let _listaCorreo = document.getElementById("listaCorreo");
let _listaCantidad = document.getElementById("listaCantidad");

let _btnDescuentoA = document.getElementById("btnDescuentoA");
let _btnDescuentoB = document.getElementById("btnDescuentoB");
let _btnDescuentoC = document.getElementById("btnDescuentoC");



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRESENTAR DATOS PRE-ESTABLECIDOS

let _valorTicket = document.getElementById("valorTicket");
_valorTicket.innerHTML = `VALOR DE TICKET $${_precioTicket}`;

let _caja1 = document.getElementById("caja1");
_caja1.innerHTML = _textoOpcion0;
let _porc1 = document.getElementById("porc1");
_porc1.innerHTML = `${_descuentoA}%`;

let _caja2 = document.getElementById("caja2");
_caja2.innerHTML = _textoOpcion1;
let _porc2 = document.getElementById("porc2");
_porc2.innerHTML = `${_descuentoB}%`;

let _caja3 = document.getElementById("caja3");
_caja3.innerHTML = _textoOpcion2;
let _porc3 = document.getElementById("porc3");
_porc3.innerHTML = `${_descuentoC}%`;

_opcion0.innerHTML = _textoOpcion0;
_opcion1.innerHTML = _textoOpcion1;
_opcion2.innerHTML = _textoOpcion2;

_presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;

console.log(`Si está leyendo este mensaje, pruebe cambiar la dirección de la página  '/compra2.html'  por  '/compra1.html'  para ver una versión alternativa de esta página.`);



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// FUNCIONES

function _verificarCantidad() {

    if ( (_inputCantidad.value < 1) || (_inputCantidad.value > 5) || isNaN(_inputCantidad.value) || (_inputCantidad.value == _emptyScript) ) {

        _validarCantidad = false;
        _inputCantidad.value = _emptyScript;

        if (_switchAlerta == false) {
            _mensajeAlerta.innerHTML = _alertaCantidadError;
            _modal.show();
        }

    } else {
        // La cantidad es válida
        _validarCantidad = true;
        _mensajeAlerta.innerHTML = _emptyScript;
    }
}

function _reescribirPrecio() {
    // Reescribiendo el precio de la entrada presente en el formulario

    // Reestablecer valores
    _inputCantidad.value = document.getElementById("inputCantidad").value;
    _inputCategoria.value = document.getElementById("inputCategoria").value;

    // Establecer descuento
    if ( _inputCategoria.value == _categA) {

        // Descuento 0
        _descuento = _descuentoA / _porcentaje;

    } else if ( _inputCategoria.value == _categB) {

        // Descuento 1
        _descuento = _descuentoB / _porcentaje;

    } else {

        // Descuento 2
        _descuento = _descuentoC / _porcentaje;

    }


    // Calcular precio
    _totalPagar = (_precioTicket - (_precioTicket * _descuento)) * _inputCantidad.value;

    // Presentar precio
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;
}

function _verificarCorreo() {

    // Reestableciendo valores
    _inputCorreo.value = document.getElementById("inputCorreo").value;

    // Validación del correo
    if ( (_inputCorreo.value == _ultimoCorreoIngresado) || (_inputCorreo.value == ``) ) {

        // Si el correo no cambio, no se mostrará el modal de alerta
        _mensajeAlerta.innerHTML = _emptyScript;

    } else if ( !(_inputCorreo.value.match(_formatoCorreo)) ) {

        if (_switchAlerta == false) {
            // El formato del correo es incorrecto
            _mensajeAlerta.innerHTML = _alertaCorreo;
            _modal.show();
        }

        // El correo no es válido
        _validarCorreo = false;

    } else {

        // El correo es válido
        _validarCorreo = true;

        _mensajeAlerta.innerHTML = _emptyScript;
    }

    _ultimoCorreoIngresado = _inputCorreo.value;
}

function _reiniciarPrecio() {
    _validarCantidad = false;
    _inputCantidad.value = _emptyScript;
    _totalPagar = _emptyScript;
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;
}

function _mostrarResumen() {

    _switchAlerta = true;

    _verificarCorreo();
    _verificarCantidad();

    if ( (_validarCorreo == true) && (_validarCantidad == true) && (_inputNombre.value != _emptyScript) && (_inputApellido != _emptyScript) )
    {

        _reescribirPrecio();

    } else {

        // Nombre
        if (_inputNombre.value == _emptyScript) {
            _listaNombre.innerHTML = `• Nombre`;
        } else {
            _listaNombre.innerHTML = _emptyScript;
            _mensajeAlerta.innerHTML = _alertaCantidadCompletar;
        }

        // Apellido
        if (_inputApellido.value == _emptyScript) {
            _listaApellido.innerHTML = `• Apellido`;
        } else {
            _listaApellido.innerHTML = _emptyScript;
            _mensajeAlerta.innerHTML = _alertaCantidadCompletar;
        }

        // Correo
        if (_validarCorreo == false) {
            _listaCorreo.innerHTML = `• Correo`;
        } else {
            _listaCorreo.innerHTML = _emptyScript;
            _mensajeAlerta.innerHTML = _alertaCantidadCompletar;
        }

        // Cantidad
        if (_validarCantidad == false || _inputCantidad.value == _emptyScript) {
            _listaCantidad.innerHTML = `• Cantidad`;
        } else {
            _listaCantidad.innerHTML = _emptyScript;
            _mensajeAlerta.innerHTML = _alertaCantidadCompletar;
        }

        // Modal para mostrar cuantos campos faltan completar
        _modalFalta.show();

        /*
        // Cantidad
        if (_validarCantidad == false || _inputCantidad.value == _emptyScript) {

            _mensajeAlerta.innerHTML = _alertaCantidadCompletar;
            _modal.show();

        } else {
            _mensajeAlerta.innerHTML = _emptyScript;
        } */
    }

    _switchAlerta = false;
}

function _cambiarDescuento(ev) {

    // Cambiar el selector de descuentos al valor correspondiente de la tarjeta cliqueada
    _inputCategoria.value = ev;
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINCIPAL

// Llamar a las funciones cuando uno de los inputs cambie
_inputCorreo.onblur = _verificarCorreo;
_inputCantidad.onkeyup = _verificarCantidad;

// Agregar texto a la etiqueta title de un tooltip popup
_inputCantidad.title = _popUpCantidad;