"use strict";
class Usuario {
    //construtor
    constructor(nome, conta, saldo) {
        this.nome = nome;
        this.conta = `001 ${conta}`;
        this.saldo = saldo;
    }
    //métodos
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
    extrato() {
        return `A usuária ${this.nome} dona da conta ${this.conta} tem o saldo de R$ ${this.saldo}`;
    }
}
//objeto
const usuario1 = new Usuario("Ana", "9183-9", 200);
console.log(usuario1);
//console.log(usuario1.saldo)
usuario1.deposito(200);
console.log(usuario1);
//console.log(usuario1.saldo)
usuario1.saque(150);
console.log(usuario1);
