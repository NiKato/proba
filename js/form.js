var ime = document.getElementById('inp1');
var email1 = document.getElementById('email');
var msg = document.getElementById('message');
var send = document.getElementById('sendBtn');
var xx;

send.addEventListener('click', validacija);
ime.addEventListener('focus', clear);
email1.addEventListener('focus', clear);
msg.addEventListener('focus', clear);


function validacija() {

	xx = 1;
	//ime
	
	if(ime.value == "") {
	   ime.value = "Ovo polje je obavezno";
       ime.style.color = 'red';
       xx=0;
	};
	//email
	if(email1.value.indexOf('gmail') == -1){
		email1.value ='Email mora biti postojeći';
	    email1.style.color = 'red';

       xx=0;

	};
	if(email1.value == "") {
	   email1.value = "Ovo polje je obavezno";
       xx=0;


	};
	//msg
	if(msg.value == "") {
	   msg.value = "Ovo polje je obavezno";
	   msg.style.color = 'red';
       xx=0;


	};
	
	
}

function clear() {

	this.value = "";
	this.style.color = '#ECD08C';
}


