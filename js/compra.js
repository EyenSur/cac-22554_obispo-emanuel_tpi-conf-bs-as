//////////////////////////////////////////////////
//////////////////////////////////////////////////
// VARIABLES DEL PRECIO

let _totalPagar = ``;
let _descuento;

const _textoOpcion0 = `Sin descuento`;
const _textoOpcion1 = `Estudiante`;
const _textoOpcion2 = `Trainee`;
const _textoOpcion3 = `Junior`;

const _precioEntrada = 200;

const _porcentaje = 100;    // Porcentaje: 100%
const _descuento0 = 0;      // Descuento de 0%
const _descuento1 = 80;     // Descuento de 80%
const _descuento2 = 50;     // Descuento de 50%
const _descuento3 = 15;     // Descuento de 15%

let _inputNombre = document.getElementById("inputNombre");
let _inputApellido = document.getElementById("inputApellido");
let _inputCorreo = document.getElementById("inputCorreo");

let _inputCantidad = document.getElementById("inputCantidad");
let _valueCantidad = document.getElementById("inputCantidad").value;

let _inputCategoria = document.getElementById("inputCategoria");
let _valueCategoria = document.getElementById("inputCategoria").value;

let _presentarPrecio = document.getElementById("presentarPrecio");

let _opcion0 = document.getElementById("opcion0");
let _opcion1 = document.getElementById("opcion1");
let _opcion2 = document.getElementById("opcion2");
let _opcion3 = document.getElementById("opcion3");



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// VARIABLES DEL RESUMEN

let _cajaResumen = document.getElementById("cajaResumen");

let _resEvento = document.getElementById("res_evento");
let _resLugar = document.getElementById("res_lugar");
let _resFecha = document.getElementById("res_fecha");
let _resNombre = document.getElementById("res_nombre");
let _resApellido = document.getElementById("res_apellido");
let _resCorreo = document.getElementById("res_correo");
let _resCategoria = document.getElementById("res_categoria");
let _resCantidad = document.getElementById("res_cantidad");
let _resPrecio = document.getElementById("res_precio");

const _eventoNombre = `Codo a Codo — Conferencia Bs. As.`;
const _eventoLugar = `Buenos Aires`;
const _eventoFecha = `Octubre`;

let _nombreCateg;

let _diaDias;



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

function _reescribirDatos() {

    // Reescribiendo el precio de la entrada presente en el formulario

    // Reestablecer valores
    _valueCantidad = document.getElementById("inputCantidad").value;
    _valueCategoria = document.getElementById("inputCategoria").value;


    // Establecer descuento
    if ( _valueCategoria == 1) {

        // Descuento 1
        _descuento = _descuento1 / _porcentaje;
        _nombreCateg = _textoOpcion1;

    } else if ( _valueCategoria == 2) {

        // Descuento 2
        _descuento = _descuento2 / _porcentaje;
        _nombreCateg = _textoOpcion2;

    } else if ( _valueCategoria == 3) {

        // Descuento 3
        _descuento = _descuento3 / _porcentaje;
        _nombreCateg = _textoOpcion3;

    } else {

        // Sin Descuento
        _descuento = _descuento0 / _porcentaje;
        _nombreCateg = _textoOpcion0;
    }

    // Calcular precio
    _totalPagar = (_precioEntrada - (_precioEntrada * _descuento)) * _valueCantidad;

    // Presentar precio
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;

    // Definir día/días
    if (_inputCantidad.value != 1) {
        _diaDias = `días`;
    } else {
        _diaDias = `día`;
    }
}

function _reiniciarPrecio() {
    _totalPagar = ``;
    _presentarPrecio.innerHTML = `Total a Pagar: $${_totalPagar}`;
}

function _mostrarResumen() {

    localStorage.setItem("evento", `${_eventoNombre}`);
    localStorage.setItem("lugar", `${_eventoLugar}`);
    localStorage.setItem("fecha", `${_eventoFecha}`);
    localStorage.setItem("nombre", `${_inputNombre.value}`);
    localStorage.setItem("apellido", `${_inputApellido.value}`);
    localStorage.setItem("correo", `${_inputCorreo.value}`);
    localStorage.setItem("categoria", `${_nombreCateg}`);
    localStorage.setItem("cantidad", `${_inputCantidad.value} ${_diaDias}`);
    localStorage.setItem("precio", `$${_totalPagar}`);

    window.open("resumen.html", '_blank');
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINCIPAL

// Llamar a las funciones cuando uno de los inputs cambie
_inputNombre.onkeyup = _reescribirDatos;
_inputApellido.onkeyup = _reescribirDatos;
_inputCorreo.onkeyup = _reescribirDatos;
_inputCategoria.onchange = _reescribirDatos;
_inputCantidad.onkeyup = _reescribirDatos;

// Agregar texto a la etiqueta title, de esta forma me permite hacer que el texto tenga un salto de linea
_inputCantidad.title = `La duración de la conferencia es de 3 días.\nSeleccione la cantidad de días que su ticket será válido.`;