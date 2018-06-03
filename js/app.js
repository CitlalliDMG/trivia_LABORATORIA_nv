var welcome = document.getElementById("welcome");
var	askName = document.getElementById("askName");
var askGame = document.getElementById("askGame");
var content = document.getElementById("content");
var firstQuestion = document.getElementById("first-question");
var secondQuestion = document.getElementById("second-question");
var thirdQuestion = document.getElementById("third-question");
var results = document.getElementById("results");
var correctCounter = 0;
var incorrectCounter = 0;
var correctAnswers = document.getElementById("correct-answers");
var incorrectAnswers = document.getElementById("incorrect-answers");

//Se activa cuando el usuario ingresa su nombre
function answerName(){

	var userName = document.getElementById("userName").value.toUpperCase();

    if (userName == "") {

        alert("Por favor asegurate de ingresar tu nombre");

    } else {

	   welcome.innerHTML = "Bienvenid@ " + userName;
	   askName.style.display = "none";
	   askGame.style.display = "block";

    }

}

//Se activa si el usuario SI quiere jugar
function play(){

	askGame.style.display = "none";
	firstQuestion.style.display = "block";

}


//Se activa cuando el usuario responde la PRIMERA PREGUNTA
function firstAnswer() {

    var answerOne = document.getElementById("infrutescencia").checked;
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";

    if(answerOne){

    	correctCounter += 1;
    	//console.log(correctCounter);

    } else{

    	incorrectCounter += 1;
    	//console.log(incorrectCounter);
    }

    console.log(correctCounter,incorrectCounter);
}

//Se activa cuando el usuario responde la SEGUNDA PREGUNTA
function secondAnswer() {

    var answerTwo = document.getElementById("enredadera").checked;
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";

    if(answerTwo){

    	correctCounter += 1;

    } else{

    	incorrectCounter += 1;

    }

    console.log(correctCounter,incorrectCounter);
}

//Se activa cuando el usuario responde la TERCERA PREGUNTA
function thirdAnswer() {

    var answerThree = document.getElementById("faguacate").checked;
    thirdQuestion.style.display = "none";

    
    if(answerThree){

    	correctCounter += 1;   	

    } else{

    	incorrectCounter += 1;

    }


    console.log(correctCounter, incorrectCounter);
    results.style.display = "inline";
    correctAnswers.innerHTML = "Acertaste en " + correctCounter + " preguntas.";
    incorrectAnswers.innerHTML = "Fallaste en " + incorrectCounter + " preguntas.";


}


//Se activa si el usuario NO quiere jugar
function noPlay(){

	content.innerHTML = "Será en otra ocasión ;)";

}





















//document.getElementById("jugarSi").style.display = "none";
//document.getElementById("jugarNo").style.display = "none";

/*function respuestaNombre (){

	var respuesta = document.getElementById("respuesta").value;
	var resultado = document.getElementById("resultado");
	var preguntaJugar = document.getElementById("preguntaJugar"); 

	
	document.getElementById("preguntaElNombre").style.display = "none";
	//document.getElementById("preguntaNombre").style.display = "none";
	//document.getElementById("respuesta").style.display = "none";
	//((document.getElementById("botonEnviar").style.display = "none";
	document.getElementById("resultado").innerHTML = "Bienvenida(o):" + respuesta;
	//importante:tienes que poner .value para que muestre la respuesta
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