class Produto {
    constructor(nome,cadastro, descricao ,preco){
    this.nome = nome;
    this.cadastro = cadastro;
    this.descricao = descricao;
    this.preco = preco;
}

Mostrar_produtos(){
    return `<div class="ladinho">
            <div> ${this.nome} </div>
            <div> ${this.cadastro} </div> 
            <div> Descrição: ${this.descricao} </div> 
            <div> R$ ${this.preco} </div>
            </div> `
}

}

class ProdutoDestaque extends Produto{
    constructor(nome, cadastro, descricao , preco , imagem){
        super(nome, cadastro, descricao , preco)
        this.imagem = imagem;
    }

    Mostrar_produtos_destaque(){
        return `
                <div class="meio"><img style="height: 250px; width: 250px;" src="${this.imagem}" /> </div>
                <div class="meio"> ${this.nome} </div>
                <div class="meio"> ${this.cadastro} </div> 
                <div class="meio"> Descrição: ${this.descricao} </div> 
                <div class="meio"> R$ ${this.preco} </div> 
                `

}

}

let produto = new Produto("Bolsa", "19/01/2023", "LV, marrom", 1200)
console.log(produto.Mostrar_produtos())

let produto2 = new Produto("Calça", "13/05/2023", "LV, verde com sibolos da marca em dourado", 500)
console.log(produto.Mostrar_produtos())

let produto3 = new Produto("Sapato de Salto", "18/09/2022", "LV, preto com salto de 12cm", 10500)
console.log(produto.Mostrar_produtos())

let produto4 = new Produto("Bolsa de Viagem", "19/02/2023", "LV, marrom escuro e detalhes da marca em bege", 15000)
console.log(produto.Mostrar_produtos())
 
let produtodestaque = new ProdutoDestaque("Bolsa", "19/01/2023", "LV, marrom e branca", 1500,"https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-speedy-bandouli%C3%A8re-25-damier-azur-canvas-bolsas--N40473_PM1_Worn%20view.png?wid=2048&hei=2048")
console.log(produtodestaque.Mostrar_produtos_destaque())

const div = document.getElementById("produto_destaque")
div.insertAdjacentHTML("afterbegin", produtodestaque.Mostrar_produtos_destaque());

const produtoLista = document.getElementById("lista-produto")
produtoLista.insertAdjacentHTML("afterbegin", produto.Mostrar_produtos());

const produtoLista2 = document.getElementById("lista-produto")
produtoLista.insertAdjacentHTML("afterbegin", produto2.Mostrar_produtos());

const produtoLista3 = document.getElementById("lista-produto")
produtoLista.insertAdjacentHTML("afterbegin", produto3.Mostrar_produtos());

const produtoLista4 = document.getElementById("lista-produto")
produtoLista.insertAdjacentHTML("afterbegin", produto4.Mostrar_produtos());