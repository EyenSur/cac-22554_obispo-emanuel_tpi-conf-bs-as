//////////////////////////////////////////////////
//////////////////////////////////////////////////
// VARIABLES PARA EL PRECIO

let _totalPagar = ``;
let _descuento;

let _nombreCateg;
let _diaDias;

let _validarCorreo = false;
let _validarCantidad = false;

const _textoOpcion0 = `Sin descuento`;
const _textoOpcion1 = `Estudiante`;
const _textoOpcion2 = `Trainee`;
const _textoOpcion3 = `Junior`;

const _popUpCantidad = "La duración de la conferencia es de 3 días.\nSeleccione la cantidad de días que su ticket será válido.";
const _popUpComprar = "Se ha cerrado la venta de tickets debido a haberse alcanzado el cupo máximo de participantes.";

const _alertaCorreo = `La dirección de correo ingresada no es válida.`;
const _alertaCantidad = `El número ingresado no es válido.\nDebe ingresar un número positivo entre 1 (uno) y 3 (tres)\ncorrespondiente a la cantidad de días que el evento estará disponible.`;

const _precioEntrada = 200;

const _porcentaje = 100;    // Porcentaje: 100%
const _descuento0 = 0;      // Descuento de 0%
const _descuento1 = 80;     // Descuento de 80%
const _descuento2 = 50;     // Descuento de 50%
const _descuento3 = 15;     // Descuento de 15%

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

let _modalFalta = new bootstrap.Modal(document.getElementById("modalFalta"));
let _modalResumen = new bootstrap.Modal(document.getElementById("modal"));
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
_valorTicket.innerHTML = `VALOR DE TICKET $${_precioEntrada}`;

let _caja1 = document.getElementById("caja1");
_caja1.innerHTML = _textoOpcion1;
let _porc1 = document.getElementById("porc1");
_porc1.innerHTML = `${_descuento1}%`;

let _caja2 = document.getElementById("caja2");
_caja2.innerHTML = _textoOpcion2;
let _porc2 = document.getElementById("porc2");
_porc2.innerHTML = `${_descuento2}%`;

let _caja3 = document.getElementById("caja3");
_caja3.innerHTML = _textoOpcion3;
let _porc3 = document.getElementById("porc3");
_porc3.innerHTML = `${_descuento3}%`;

_opcion0.innerHTML = _textoOpcion0;
_opcion1.innerHTML = _textoOpcion1;
_opcion2.innerHTML = _textoOpcion2;
_opcion3.innerHTML = _textoOpcion3;

_presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// FUNCIONES

function _verificarCantidad() {

    if ( (_inputCantidad.value < 1) || (_inputCantidad.value > 3) || isNaN(_inputCantidad.value) || (_inputCantidad.value == ``) ) {

        _inputCantidad.value = ``;
        _validarCantidad = false;

    } else {
        // La cantidad es válida
        _validarCantidad = true;
    }
}

function _reescribirPrecio() {
    // Reescribiendo el precio de la entrada presente en el formulario

    if (_inputCantidad.value != ``) {
        _verificarCantidad();
    }
    // Reestablecer valores
    _inputCantidad.value = document.getElementById("inputCantidad").value;
    _inputCategoria.value = document.getElementById("inputCategoria").value;

    console.log(`${_inputCantidad.value}`);
    console.log(`${_inputCategoria.value}`);

    // Establecer descuento
    if ( _inputCategoria.value == 1) {

        // Descuento 1
        _descuento = _descuento1 / _porcentaje;
        _nombreCateg = _textoOpcion1;

    } else if ( _inputCategoria.value == 2) {

        // Descuento 2
        _descuento = _descuento2 / _porcentaje;
        _nombreCateg = _textoOpcion2;

    } else if ( _inputCategoria.value == 3) {

        // Descuento 3
        _descuento = _descuento3 / _porcentaje;
        _nombreCateg = _textoOpcion3;

    } else {

        // Sin Descuento
        _descuento = _descuento0 / _porcentaje;
        _nombreCateg = _textoOpcion0;
    }
    console.log(_nombreCateg);


    // Calcular precio
    _totalPagar = (_precioEntrada - (_precioEntrada * _descuento)) * _inputCantidad.value;

    // Presentar precio
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;


    // Definir día/días
    if (_inputCantidad.value != 1) {
        _diaDias = `días`;
    } else {
        _diaDias = `día`;
    }
}

function _reescribirDatos() {

    // Reestableciendo valores
    _inputNombre = document.getElementById("inputNombre");
    _inputApellido = document.getElementById("inputApellido");

    console.log(`${_inputNombre.value}`);
    console.log(`${_inputApellido.value}`);
}

function _verificarCorreo() {

    // Reestableciendo valores
    _inputCorreo = document.getElementById("inputCorreo");

    console.log(`${_inputCorreo.value}`);

    // Validación del correo
    if ( _inputCorreo.value.match(_formatoCorreo) ) {

        // La dirrección de correo ingresada es válida
        _validarCorreo = true;

    } else {

        // El formato del correo es incorrecto
        _validarCorreo = false;

    }
    console.log(_validarCorreo);
}

function _reiniciarPrecio() {
    _validarCantidad = false;
    _inputCantidad.value = ``;
    _totalPagar = ``;
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;
}

function _mostrarResumen() {

    _reescribirDatos();
    _reescribirDatos();
    _verificarCorreo();
    _reescribirPrecio();
    _reescribirPrecio();

    if ( (_validarCorreo == true) && (_validarCantidad == true) && (_inputNombre.value != ``) && (_inputApellido != ``) )
    {
        _resEvento.innerHTML = `${_eventoNombre}`;
        _resLugar.innerHTML = `${_eventoLugar}`;
        _resFecha.innerHTML = `${_eventoFecha}`;
        _resNombre.innerHTML = `${_inputNombre.value}`;
        _resApellido.innerHTML = `${_inputApellido.value}`;
        _resCorreo.innerHTML = `${_inputCorreo.value}`;
        _resCategoria.innerHTML = `${_nombreCateg}`;
        _resCantidad.innerHTML = `${_inputCantidad.value} ${_diaDias}`;
        _resPrecio.innerHTML = `$${_totalPagar}`;

        _modalResumen.show();
        console.log("MODAL RESUMEN");

    } else {

        // Nombre
        if (_inputNombre.value == ``) {
            _listaNombre.innerHTML = `• Nombre`;
        } else {
            _listaNombre.innerHTML = ``;
        }

        // Apellido
        if (_inputApellido.value == ``) {
            _listaApellido.innerHTML = `• Apellido`;
        } else {
            _listaApellido.innerHTML = ``;
        }

        // Correo
        if (_validarCorreo == false) {
            _listaCorreo.innerHTML = `• Correo`;
        } else {
            _listaCorreo.innerHTML = ``;
        }

        // Cantidad
        if (_validarCantidad == false) {
            _listaCantidad.innerHTML = `• Cantidad`;
        } else {
            _listaCantidad.innerHTML = ``;
        }

        _modalFalta.show();
        console.log("MODAL FALTA");
    }
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINCIPAL

// Llamar a las funciones cuando uno de los inputs cambie
_inputNombre.onkeyup = _reescribirDatos;
_inputApellido.onkeyup = _reescribirDatos;
_inputCorreo.onkeyup = _verificarCorreo;
_inputCategoria.onchange = _reescribirPrecio;
_inputCantidad.onkeyup = _reescribirPrecio;

// Agregar texto a la etiqueta title de un tooltip popup
_inputCantidad.title = _popUpCantidad;
_comprarWrap.title = _popUpComprar;