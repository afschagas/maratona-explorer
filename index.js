
const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPerguntar = document.querySelector('#buttonPerguntar');

// Lista de Respostas
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta() {

if(inputPergunta.value == "" ) {
alert('Digite a sua perguta!')
return
}
  if (inputPergunta.value == inputPergunta.value){
       inputPergunta.value = '';
  }

console.log(inputPergunta.value)

buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numeros aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
//console.log(respostas[0])
console.log(respostas[numeroAleatorio])

elementoResposta.innerHTML = respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

// sumir a resposta depois de 3 segundos
setTimeout(function() {
elementoResposta.style.opacity = 0;
buttonPerguntar.removeAttribute("disabled");
}, 3000);

}
