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

class carros{
    marca: string;
    nome: string;
    vidros: boolean;
    freios: string;
    tração: string;
    combustível: boolean;

    constructor(m: string, n: string, v: boolean, f: string, t: string, c: boolean){
        this.marca = m;
        this.nome = n;
        this.vidros = v;
        this.freios = f;
        this.tração = t;
        this.combustível = c;
    }

    exibirCarros(): void {
        console.log(`A marca ${this.marca} com nome ${this.nome}, possui vidro elétrico ${this.vidros}, com freios ${this.freios}, com tração ${this.tração} e com gasolina ${this.combustível}`)
    }
}

class modelo extends carros{
    nome: string;
}

let carro = new carros("Toyota", "Corolla GLi", true, "ABS 1.8", "dianteira", true)
carro.exibirCarros()
