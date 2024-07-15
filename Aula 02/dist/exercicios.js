"use strict";
/* Exercicio 1: Corrija o problema
*/
let pi = 3.14159;
let tau = pi * 2;
//console.log(`${tau} é ${pi} duas vezes`);
//EXERCICIO 2: Adapte o código para conter tipo
let fruta;
fruta = "banana";
console.log(`Minha fruta preferida é: ${fruta}`);
//EXERCICIO 3: Corrija o problema
let comFome;
comFome = true;
//console.log(`${comFome === true ? "Estou com fome!!" : "Estou satisfeita."}`);
//EXERCICIO 4: Atribua o tipo de dado a cada constante em seguida, haverá um erro, corrija-o
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber,
];
members[0] = 12345;
console.log(members);
/*
Exercicio 5:Adapte o codigo para conter tipo
*/
const sequence = Array.from(Array(10).keys());
const animals = ["pangolin", "aardvark", "echidna", "binturong"];
const stringsAndNumbers = [1, "one", 2, "two", 3, "three"];
const allMyArrays = [sequence, animals, stringsAndNumbers];
// console.log(allMyArrays);
