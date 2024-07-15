class Calculadora {
    numero1: number;
    numero2: number;

    constructor (numero1: number, numero2: number){
        this.numero1 = numero1 > numero2 ? numero1 : numero2
        this.numero1 = numero2
    }

    soma(){
        return this.numero1 + this.numero2;
    }

    subtracao(){
        return this.numero1 - this.numero2;
    }

    multiplicacao(){
        return this.numero1 * this.numero2;
    }

    divisao(){
    if ([this.numero1, this.numero2].includes(0)){
        return "Não é possivel realizar divisão por zero"
    }
    if (this.numero1 > this.numero2) return this.numero1 / this.numero2
    }
    return this.numero2 / this.numero1
}

const calc = new Calculadora(10,7);
console.log(calc.divisao())