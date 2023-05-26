/*
Objetivo - quando o usuario clicar de veja o trailer devemos abrir a modal com o video do trailer
- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
- passo 2 - dar um jeito de identificar quando o usuario clicar no botão
- passo 3 = dar um jeito de pegatr o elemento da modal no js
- passo 4 - abrir a modal

Objetivo 2 -  quando o usuario clicar no X devemos fechar a modal
passo 1 - dar um jeito de pegar o elemento fechar modal
passo 2 - dar um jeito de identificar quando o usuario clicar no X
passo 3 - fechar modal
*/

const botaoTrailer = document.querySelector('.trailer-button');
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector(".modal-close");
const video = document.getElementById("video"); 
const linkDoVideo = video.src;

console.log('mostrar o document', document);
console.log(document.querySelector('.trailer-button'));


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("open");
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    modal.classList.remove("open");
    video.setAttribute("src", ""); 
});

