const productsCart = [
  {
    id: 1,
    name: 'Cadeira Gamer Gt Racer',
    price: 2000
  },
  {
    id: 2,
    name: 'Playstation 5',
    price: 4000
  },
  {
    id: 3,
    name: 'Headset Gamer Cloud 2',
    price: 800
  },
  {
    id: 4,
    name: 'Controle DualShock PS4',
    price: 200
  }
]

// FUNÇÃO QUE CRIA O CARD PARA LISTAR TODOS OS PRODUTOS//

function listarProdutos(listaProdutos) {
  for (let i = 0; i < listaProdutos.length; i++) {
    //let produto = listaProdutos[i]
    criarCardProduto(listaProdutos[i])
  }
}

// FUNÇÃO PARA ATUALIZAR O CARRINHO //
function atualizarCarrinho() {
  let valorTotal = 0
  for (let i = 0; i < productsCart.length; i++) {
    valorTotal += productsCart[i].price
  }
  let totalConteudo = document.querySelector('.totalConteudo')
  totalConteudo.innerHTML = `R$ ${valorTotal}`
}

listarProdutos(productsCart)

// FUNÇÃO PARA CRIAR O CARD //

function criarCardProduto(produto) {
  let produtoName = produto.name
  let produtoPrice = produto.price

  let body = document.querySelector('.conteudoPrincipal')
  let mainConteudo = document.createElement('main')
  body.appendChild(mainConteudo)

  let ul = document.createElement('ul')
  mainConteudo.appendChild(ul)

  let li = document.createElement('li')
  ul.append(li)

  let nome = document.createElement('p')
  let valor = document.createElement('p')

  nome.innerHTML = `${produtoName}`
  valor.innerHTML = `R$ ${produtoPrice}`

  li.appendChild(nome)
  li.appendChild(valor)

  li.classList.add('cardItems')
  ul.classList.add('conteudoItems')

  atualizarCarrinho()

  return body
}
