/*
EXERCÍCIO 2 - CRIAR UMA ESTRUTURA COM:

* UMA CLASSE DE SHOPPINGS DO RJ (DE SUA ESCOLHA)
* UMA SUBCLASSE TIPOS DE LOJAS DE SUA ESCOLHA (por exemplo. "Alimentação", "Vestuário", "Brinquedos")
* UMA SUBCLASSE DE LOJAS DE SUA ESCOLHA, (por exemplo, "McDonald's", "Renner", "Rihappy")

* A SUBCLASSE DE LOJAS TERÁ OS SEGUINTES ATRIBUTOS:
    * Tamanho da loja, Produtos Mais Vendido, Aberto24hs
* MÉTODO: EXIBIR OS ATRIBUTOS DA LOJA
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shopping = /** @class */ (function () {
    function shopping(n, b, t, l, e, p, a) {
        this.nome = n;
        this.bairro = b;
        this.tipo = t;
        this.loja = l;
        this.extensão = e;
        this.produto = p;
        this.aberto = a;
    }
    shopping.prototype.exibirLoja = function () {
        console.log("O shopping ".concat(this.nome, " que fica no bairro ").concat(this.bairro, ", possui uma pra\u00E7a de ").concat(this.tipo, " chamada ").concat(this.loja, ", com tamanho de ").concat(this.extensão, " m\u00B2, seu produto mais famoso e vendido \u00E9 ").concat(this.produto, ". Aberto 24 horas? ").concat(this.aberto));
    };
    return shopping;
}());
var shoppings = new shopping("Nova América", "Del Castilho", "alimentação", "McDonald's", 500, "McLanche Feliz", true);
shoppings.exibirLoja();
var tipos = /** @class */ (function (_super) {
    __extends(tipos, _super);
    function tipos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return tipos;
}(shopping));
var lojas = /** @class */ (function (_super) {
    __extends(lojas, _super);
    function lojas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return lojas;
}(tipos));
