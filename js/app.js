//document.getElementById("jugarSi").style.display = "none";
//document.getElementById("jugarNo").style.display = "none";

function respuestaNombre (){
	var respuesta = document.getElementById("respuesta");
	var resultado = document.getElementById("resultado");
	var preguntaJugar = document.getElementById("preguntaJugar"); 

	document.getElementById("resultado").innerHTML = "Bienvenida(o):" + respuesta.value;
	//importante:tienes que poner .value para que muestre la respuesta
	document.getElementById("preguntaNombre").style.display = "none";
	document.getElementById("respuesta").style.display = "none";
	document.getElementById("botonEnviar").style.display = "none";
	document.getElementById("preguntaJugar").innerHTML = "¿Quieres jugar?";
	var jugarSi = document.createElement("button");
    document.body.appendChild(jugarSi).innerHTML = "Sí";
    var jugarNo = document.createElement("button");
    document.body.appendChild(jugarNo).innerHTML = "No";



}