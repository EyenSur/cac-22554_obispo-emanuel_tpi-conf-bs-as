//////////////////////////////////////////////////
//////////////////////////////////////////////////
// VARIABLES

let _resEvento = document.getElementById("res_evento");
let _resLugar = document.getElementById("res_lugar");
let _resFecha = document.getElementById("res_fecha");
let _resNombre = document.getElementById("res_nombre");
let _resApellido = document.getElementById("res_apellido");
let _resCorreo = document.getElementById("res_correo");
let _resCategoria = document.getElementById("res_categoria");
let _resCantidad = document.getElementById("res_cantidad");
let _resPrecio = document.getElementById("res_precio");



//////////////////////////////////////////////////
//////////////////////////////////////////////////
// PRINCIPAL

_resEvento.innerHTML = localStorage.getItem("evento");
_resLugar.innerHTML = localStorage.getItem("lugar");
_resFecha.innerHTML = localStorage.getItem("fecha");
_resNombre.innerHTML = localStorage.getItem("nombre");
_resApellido.innerHTML = localStorage.getItem("apellido");
_resCorreo.innerHTML = localStorage.getItem("correo");
_resCategoria.innerHTML = localStorage.getItem("categoria");
_resCantidad.innerHTML = localStorage.getItem("cantidad");
_resPrecio.innerHTML = localStorage.getItem("precio");