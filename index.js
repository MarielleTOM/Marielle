class Produto {
    constructor(nome,cadastro, descricao ,preco){
    this.nome = nome;
    this.cadastro = cadastro;
    this.descricao = descricao;
    this.preco = preco;
}

Mostrar_produtos(){
    return this.nome + this.cadastro + this.descricao + this.preco
}

}

class ProdutoDestaque extends Produto{
    constructor(nome, cadastro, descricao , preco , imagem){
        super(nome, cadastro, descricao , preco)
        this.imagem = imagem;
    }

    Mostrar_produtos_destaque(){
        return `<div class="img"><img src="${this.imagem}" /> </div>
                <div> ${this.nome} </div>
                <div> ${this.cadastro} </div> 
                <div> ${this.descricao} </div> 
                <div> ${this.preco} </div> `

}

}

let produto = new Produto("Bolsa", "19/01/2007", "LV, marrom e branca", 1500)
console.log(produto.Mostrar_produtos())
 
let produtodestaque = new ProdutoDestaque("Bolsa", "19/01/2007", "LV, marrom e branca", 1500,"https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-speedy-bandouli%C3%A8re-25-damier-azur-canvas-bolsas--N40473_PM1_Worn%20view.png?wid=2048&hei=2048")
console.log(produtodestaque.Mostrar_produtos_destaque())

const div = document.getElementById("produto_destaque")
div.insertAdjacentHTML("afterbegin", produtodestaque.Mostrar_produtos_destaque());