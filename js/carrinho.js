// Recupera o carrinho salvo ou inicia com vazio
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Adiciona item ao carrinho e salva no localStorage
function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${produto} adicionado ao carrinho!`);
}
