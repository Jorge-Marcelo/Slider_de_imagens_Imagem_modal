/*
Autor: Jorge Marcelo
Data de Criação: 28/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Inicialiando a varivel do indice do slider*/
let indiceSlides = 1;
mostrarSlides(indiceSlides);

/*Função responsavel pelo botão proxim e anterioir*/
function controles(numero){
mostrarSlides(indiceSlides = indiceSlides + numero);
}

/*Função responsavel por mostrar a imagem atual do slider*/
function imagemAtual(numero){
mostrarSlides(indiceSlides = numero);    
}

/*Função responsavel pelo controle dos slides*/
function mostrarSlides(numero){

/*Contador que vai percorrer todos os slides*/ 
let contador;

let slides = document.getElementsByClassName("slides");
let miniaturas = document.querySelectorAll(".miniaturas");

/*Condição 1 - Caso  o numero de imagens seja maior que o tamanho do slider
Volta para o primeira imagem do slider */
if(numero > slides.length ){indiceSlides = 1}

/*Condição 2 - Caso o numero de imans seja menor que o tamanho do slider
Loop for vai percorrer  por todas as imagens e miniaturas
adicionar o display none*/ 
if (numero < 1){indiceSlides - slides.length};
for (contador = 0; contador < slides.length; contador++){
slides[contador].style.display = "none";
miniaturas[contador].classList.remove("active");
}
/*Deixar a imagem atual do slider como ativa*/
slides[indiceSlides -1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/ 
miniaturas[indiceSlides -1].classList.add("active");
}


let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let span = document.getElementById("close");
let miniaturas = document.querySelectorAll(".miniaturas");


function abrirModal(imgSrc){
modal.style.display = "block";
modalImg.src = imgSrc;
}

function miniatura(){
miniaturas.forEach(miniatura => {
miniatura.addEventListener("click", function(){
abrirModal(miniatura.src);
})    
});
}


function fecharModal(){
span.addEventListener("click", function(){
modal.style.display = "none";
})
}

function cliqueFora(evento){
window.addEventListener("click", function(evento){
if (evento.target === modal){
modal.style.display = "none";
}
})
}


miniatura();
fecharModal();
cliqueFora();

