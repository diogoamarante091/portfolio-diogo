const nome = "Diogo";

const tecnologias = ["JavaScript", "React", "Node.js", "Git"];

function criarResumo(nomeEstudante, listaTecnologias) {
  return `${nomeEstudante} está aprendendo ${listaTecnologias.join(", ")}.`;
}

function calcularProgresso(listaTecnologias) {
  return listaTecnologias.length >= 4
    ? "Você já está construindo uma base Full Stack."
    : "Continue adicionando tecnologias ao seu plano.";
}

const botaoResumo = document.querySelector("#botao-resumo");
const botaoTecnologias = document.querySelector("#botao-tecnologias");
const mensagem = document.querySelector("#mensagem");
const progresso = document.querySelector("#progresso");
const listaTecnologias = document.querySelector("#lista-tecnologias");

botaoResumo.addEventListener("click", function () {
  mensagem.textContent = criarResumo(nome, tecnologias);
});

botaoTecnologias.addEventListener("click", function () {
  listaTecnologias.innerHTML = "";

  for (const tecnologia of tecnologias) {
    const item = document.createElement("li");
    item.textContent = tecnologia;
    listaTecnologias.appendChild(item);
  }

  progresso.textContent = calcularProgresso(tecnologias);
});