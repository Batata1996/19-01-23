/*
EXERCÍCIO 2 - CRIAR UMA ESTRUTURA COM:

* UMA CLASSE DE SHOPPINGS DO RJ (DE SUA ESCOLHA)
* UMA SUBCLASSE TIPOS DE LOJAS DE SUA ESCOLHA (por exemplo. "Alimentação", "Vestuário", "Brinquedos")
* UMA SUBCLASSE DE LOJAS DE SUA ESCOLHA, (por exemplo, "McDonald's", "Renner", "Rihappy")

* A SUBCLASSE DE LOJAS TERÁ OS SEGUINTES ATRIBUTOS:
    * Tamanho da loja, Produtos Mais Vendido, Aberto24hs
* MÉTODO: EXIBIR OS ATRIBUTOS DA LOJA
*/

class shopping{
    nome: string;
    bairro: string;
    tipo: string;
    loja: string;
    extensão: number;
    produto: string;
    aberto: boolean;

    constructor(n: string, b: string, t: string, l: string, e: number, p: string, a: boolean){
        this.nome = n;
        this.bairro = b;
        this.tipo = t;
        this.loja = l;
        this.extensão = e;
        this.produto = p;
        this.aberto= a;
    }

    exibirLoja(): void {
        console.log(`O shopping ${this.nome} que fica no bairro ${this.bairro}, possui uma praça de ${this.tipo} chamada ${this.loja}, com tamanho de ${this.extensão} m², seu produto mais famoso e vendido é ${this.produto}. Aberto 24 horas? ${this.aberto}`)
    }
}

let shoppings = new shopping ("Nova América", "Del Castilho", "alimentação", "McDonald's", 500, "McLanche Feliz", true)
shoppings.exibirLoja()

class tipos extends shopping{
    tipo: string;
}

class lojas extends tipos{
    loja: string;
    extensão: number;
    produto: string;
    aberto: boolean;
}

