class Marvel {
    nome: string
    voo: boolean;
    poder: string;
    está_vivo: boolean;

    constructor(nome: string, voo: boolean, poder: string, está_vivo: boolean){
        this.nome = nome;
        this.voo = voo;
        this.poder = poder;
        this.está_vivo = está_vivo;

    }

    poderes(): void {
        console.log(`Qual o nome do herói? ${this.nome}. Este herói sabe voar? ${this.voo}. Qual é o seu poder? ${this.poder}. Está vivo? ${this.está_vivo}`);
    }

    
}

let heroi = new Marvel("Hulk", true, "Super Força", true);
heroi.poderes()