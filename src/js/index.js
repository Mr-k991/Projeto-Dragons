// intuito do projeto, otras os dragoes e seuas descriaçoes de acordo com o selecionado

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

// - passo 2 - dar um jeito de identificar o clique do usuario no botão

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    // - passo 3 - desmacar o botão selecionada anterior

    desativarBotaoSelecionado();

    // -passo 4 - marcar o botão clicando como se estivesse selecionado

    macarBotaoSelecionado(botao);

    // - passo 5 - esconder imagem anteriormente selecionada

    esconderImagemAtiva();

    // - passo 6 - fazer aparecer imagagem correspondente ao click 

    mostrarImagemDeFundo(indice);

    // passo 7 - esconder informaçao do dragao anterior

    esconderInformacoesAtivas();

    // - passo 8 - mostrar a informação atual 

    mostrarInformacoes(indice);
  });
});

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function macarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
  const botoaSelecionado = document.querySelector(".selecionado");

  botoaSelecionado.classList.remove("selecionado");
}
