document.getElementById("jugarSi").style.display = "none";
document.getElementById("jugarNo").style.display = "none";
document.getElementById("preguntaJuego").style.display = "none";

function respuestaNombre (){

	var respuesta = document.getElementById("respuesta").value; 	//importante:tienes que poner .value para que muestre la respuesta
	var resultado = document.getElementById("resultado");
	document.getElementById("resultado").innerHTML = "Bienvenida(o):" + respuesta;
	document.getElementById("preguntaElNombre").style.display = "none";
	document.getElementById("preguntaJuego").style.display = "block";

	//document.getElementById("preguntaNombre").style.display = "none";
	//document.getElementById("respuesta").style.display = "none";
	//((document.getElementById("botonEnviar").style.display = "none";
	var preguntaJugar = document.getElementById("preguntaJugar"); 

	document.getElementById("preguntaJugar").innerHTML = "¿Quieres jugar?";

	var jugarSi = document.createElement("button");
    document.body.appendChild(jugarSi).innerHTML = "Sí";

    jugarSi.onclick = function(){

    	var holaMundo = document.createElement("p");
		document.body.appendChild(holaMundo).innerHTML = "Aquí van a ir las preguntas";
		document.getElementById("preguntaJuego").style.display = "none";
		jugarSi.style.display ="none";
		jugarNo.style.display = "none";	

    }

    var jugarNo = document.createElement("button");
    document.body.appendChild(jugarNo).innerHTML = "No";

    jugarNo.onclick = function(){

    	var holaMundo = document.createElement("p");
		document.body.appendChild(holaMundo).innerHTML = "Buu... juguemos después";
		document.getElementById("preguntaJuego").style.display = "none";
		jugarSi.style.display ="none";
		jugarNo.style.display = "none";	
    }


}






/*function siJuega(){
	var holaMundo = document.createElement("p");
	document.body.appendChild(holaMundo).innerHTML = "Hola Mundo";
}*/