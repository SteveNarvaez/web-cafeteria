//querySelector
const heading= document.querySelector(".header__texto h2")//0 o 1 elemento

 
console.log(heading);

//querySelectorALl

const enlaces= document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);

//--------------------------------------------------
//Generar un nuevo enlace con JS

//const nuevoEnlace=document.createElement("A");//EN MAYUSCULAS

//agregar el href

//nuevoEnlace.href='nuevo-enlace.html';
//agregar el texto
//nuevoEnlace.textContent='nuevotexto'

//agregar la clase
//nuevoEnlace.classList.add('navehacion_enlace');

//agregarlo al documento
//const navegacion= document.querySelector('.navegacion');

//navegacion.appendChild(nuevoEnlace);
//------------------------------------
//EVENTOS

console.log(1);

window.addEventListener('load',function(){//load espera que el JS y los archivos que dependen del HTLM esten listos
    console.log(2);
})
console.log(7);

document.addEventListener('DOMContentLoaded', function () {//solo espera al HTML por eso es mas rapido que load
    console.log(10);
})


//seleccionar  y asociar evento
//funcion inavilitada


//(
//const btnEnviar=document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(e){
//    console.log(e);
//     e.preventDefault();

//validar un formulario



//    console.log('enviando formulario');
//})
//);




//Eventos de inputs y textarea

const datos={
    nombre:'',
    email:'',
    mensaje:''
}

const nombre=document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');
const formulario= document.querySelector('.formulario');

nombre.addEventListener('input', validarEscritura);
email.addEventListener('input', validarEscritura);
mensaje.addEventListener('input',validarEscritura);

//el evento de submit


formulario.addEventListener('submit',function (e){
    e.preventDefault();

    //validar formulario 
    const { nombre, email, mensaje}=datos;

    if(nombre === '' || email === ''|| mensaje ===''){
        mostrarError("todos los campos son obligatorios")
        return ;
    }else{
        mostrarEnvio("Todos los campos han sido respondidos");
    }

    //Enviar el formulario

    

});

//target es el imput en el que estamos
function validarEscritura(e) {
    console.log(e.target.value);

    datos[e.target.id]=e.target.value;

   // console.log(datos);
}



//mostrar error
 function mostrarError(mensaje){
    const error=document.createElement('P');
    error.textContent= mensaje;
    error.classList.add('error');

    formulario.appendChild('error');
    //desaparecer despues de 5s

setTimeout(() => {
    error.remove();
},5000);
}

function mostrarEnvio(mensaje){
    const envio=document.createElement('P');
    envio.textContent= mensaje;
    envio.classList.add('correcto');

    formulario.appendChild(envio);
    //desaparecer despues de 5s

    setTimeout(() => {
        envio.remove();
    },5000);
}



