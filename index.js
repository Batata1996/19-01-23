/*

EXERCÍCIOS SOBRE PROGRAMAÇÃO ORIENTADA A OBJETOS

EXERCÍCIO 1 - CRIAR UMA ESTRUTURA COM:

        * UMA CLASSE DE MARCA DE CARROS (DE SUA ESCOLHA)
        * UMA SUBCLASSE DE MODELOS DE SUA ESCOLHA
        * ATRIBUTOS DE VIDROS ELÉTRICOS, FREIOS ABS, E TRAÇÃO NAS QUATRO RODAS
        * MÉTODOS DE ATIVAÇÃO NA TRAÇÃO
        * MUDANÇA DE COMBUSTÍVEL (GÁS/GASOLINA - TRUE OR FALSE)
        * MÉTODO ATIVAÇÃO DO FREIO ABS

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
var carros = /** @class */ (function () {
    function carros(m, n, v, f, t, c) {
        this.marca = m;
        this.nome = n;
        this.vidros = v;
        this.freios = f;
        this.tração = t;
        this.combustível = c;
    }
    carros.prototype.exibirCarros = function () {
        console.log("A marca ".concat(this.marca, " com nome ").concat(this.nome, ", possui vidro el\u00E9trico ").concat(this.vidros, ", com freios ").concat(this.freios, ", com tra\u00E7\u00E3o ").concat(this.tração, " e com gasolina ").concat(this.combustível));
    };
    return carros;
}());
var modelo = /** @class */ (function (_super) {
    __extends(modelo, _super);
    function modelo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return modelo;
}(carros));
var carro = new carros("Toyota", "Corolla GLi", true, "ABS 1.8", "dianteira", true);
carro.exibirCarros();
