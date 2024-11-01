function criarCartao(pergunta,resposta){
   let conteudo = document.getElementById("conteudo")
let cartao = document.createElement("article")
cartao.classList = 'cartao'

cartao.innerHTML = `<div class="cartao--conteudo">
<div class="cartao--pergunta"><p>$(pergunta card 1)</p></div> 
<div class="cartao--resposta"><p>$(reposta card 1)</p></div>
</div>`

conteudo.appendChild(cartao)
}
criarCartao(1,2)