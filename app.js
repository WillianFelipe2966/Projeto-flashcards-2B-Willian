function criaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById('container');
  const cartao = document.createElement('article');
  cartao.className = 'cartao';

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${categoria}</h3>
      <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
      </div>
      <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  let visivel = false;
  function virarCartao() {
    visivel = !visivel;
    cartao.classList.toggle('active', visivel);
  }

  cartao.addEventListener('click', virarCartao);
  container.appendChild(cartao);
}
