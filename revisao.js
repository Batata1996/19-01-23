var Marvel = /** @class */ (function () {
    function Marvel(nome, voo, poder, está_vivo) {
        this.nome = nome;
        this.voo = voo;
        this.poder = poder;
        this.está_vivo = está_vivo;
    }
    Marvel.prototype.poderes = function () {
        console.log("Qual o nome do her\u00F3i? ".concat(this.nome, ". Este her\u00F3i sabe voar? ").concat(this.voo, ". Qual \u00E9 o seu poder? ").concat(this.poder, ". Est\u00E1 vivo? ").concat(this.está_vivo));
    };
    return Marvel;
}());
var heroi = new Marvel("Hulk", true, "Super Força", true);
heroi.poderes();
