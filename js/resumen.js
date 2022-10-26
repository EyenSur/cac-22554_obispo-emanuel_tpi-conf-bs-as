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

document.getElementById("res_evento").innerHTML = `Codo a Codo — Conferencia Bs. As.`;
//_resEvento.innerHTML = localStorage.getItem("guardar_evento");
_resLugar.innerHTML = localStorage.getItem("guardar_lugar");
_resFecha.innerHTML = localStorage.getItem("guardar_fecha");
_resNombre.innerHTML = localStorage.getItem("guardar_nombre");
_resApellido.innerHTML = localStorage.getItem("guardar_apellido");
_resCorreo.innerHTML = localStorage.getItem("guardar_correo");
_resCategoria.innerHTML = localStorage.getItem("guardar_categoria");
_resCantidad.innerHTML = localStorage.getItem("guardar_cantidad");
_resPrecio.innerHTML = localStorage.getItem("guardar_precio");