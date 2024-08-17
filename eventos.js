const div = document.getElementById("div");
const boton = document.getElementsByTagName("button");

div.addEventListener('click', () =>{
    alert('Hola! soy el div');
});

boton[0].addEventListener('click', (event) =>{
    event.stopPropagation();
});