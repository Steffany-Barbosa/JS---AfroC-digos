class Usuario {
  //atributos
  nome: string;
  conta: string;
  saldo: number;

  //construtor
  constructor(nome: string, conta: string, saldo: number) {
    this.nome = nome;
    this.conta = `001 ${conta}`;
    this.saldo = saldo;
  }

  //métodos
  deposito(valor: number):void {
    this.saldo += valor;
  }

  saque (valor:number):void {
    this.saldo -= valor
  }

  extrato(): string {
    return `A usuária ${this.nome} dona da conta ${this.conta} tem o saldo de R$ ${this.saldo}`;
  }

}

//objeto
const usuario1 = new Usuario ("Ana", "9183-9", 200);
console.log(usuario1);
//console.log(usuario1.saldo)

usuario1.deposito(200);
console.log(usuario1);
//console.log(usuario1.saldo)

usuario1.saque(150);
console.log(usuario1)
