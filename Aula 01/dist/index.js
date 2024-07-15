"use strict";
let nome1; // o tipo foi atribuido
let nome = "Ana"; // o tipo foi inferido
let idade = 12;
// nome = []; // não é string
// nome = {}; // não é string
// nome = true; // não é string
nome = "lisandra";
// console.log("opa o/");
// any
let doTipoAny;
doTipoAny = 1;
doTipoAny = "sdkn";
doTipoAny = {};
doTipoAny = [];
//unknown
// let doTipoUnknown: unknown;
// doTipoUnknown = [];
// doTipoUnknown = "ads";
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
}
const nomeDeProdutos1 = ["camisa", "calça", "saia", 7];
// const nomeDeProdutos2: string[] | number[] = ["camisa", "calça", "saia", 7];
const nomeDeProdutos3 = ["camisa", "calça", "saia"];
const nomeDeProdutos4 = ["camisa", "calça", "saia", 7];
const tuple1 = ["Lis", 30, true];
const tuple2 = ["Lis", 12, true];
// Enum
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["segunda"] = "Segunda feira";
    DiasDaSemana["ter\u00E7a"] = "Ter\u00E7a feira";
    DiasDaSemana["quarta"] = "Quarta feira";
})(DiasDaSemana || (DiasDaSemana = {}));
// Enum
var DiasDaSemanaBD;
(function (DiasDaSemanaBD) {
    DiasDaSemanaBD[DiasDaSemanaBD["segunda"] = 0] = "segunda";
    DiasDaSemanaBD[DiasDaSemanaBD["ter\u00E7a"] = 1] = "ter\u00E7a";
    DiasDaSemanaBD[DiasDaSemanaBD["quarta"] = 2] = "quarta";
})(DiasDaSemanaBD || (DiasDaSemanaBD = {}));
const diaDeFolga = DiasDaSemana.segunda;
const diaDeFolga1 = DiasDaSemanaBD.segunda;
const diaDeFolga2 = "2";
const diaDeFolga3 = "seg";
const diaDeFolga4 = "seg";
const diaDeFolga5 = "segunda";
// const professora: {
//   nome: string;
//   idade: number;
// } = { nome: "Lis", idade: 29 };
// const professora: ProfessoraProps = { nome: "Lis", idade: 29 };
const professora = { idade: 29, nome: "Lis" };
var MateriasEnum;
(function (MateriasEnum) {
    MateriasEnum["historia"] = "Historia";
    MateriasEnum["geografia"] = "Geografia";
    MateriasEnum["matematica"] = "Matematica";
})(MateriasEnum || (MateriasEnum = {}));
const bea = {
    nome: "Beatriz",
    // idade: 18,
    materias: [MateriasEnum.geografia, MateriasEnum.matematica],
    isMatriculado: true,
    documentos: { cpf: "12345", rg: "sdf" },
};
// bea.materias.map((el) => console.log(el));
for (let i in MateriasEnum) {
    // console.log(i);
}
// console.log(Object.entries(MateriasEnum));
// const funcaoTeste: any = () => {
//   console.log("asfs");
// };
// console.log(funcaoTeste());
const funcaoTeste1 = () => {
    throw Error("asfs");
};
// console.log(funcaoTeste1());
const funcaoTeste2 = (nome) => {
    if (nome === "Lis") {
        throw Error("asfs");
    }
    throw "auraite";
};
// console.log(funcaoTeste2("Liss"));
// Tipo literal
var TamanhoDeCamisaEnum;
(function (TamanhoDeCamisaEnum) {
    TamanhoDeCamisaEnum["P"] = "Pequena";
    TamanhoDeCamisaEnum["M"] = "M\u00E9dia";
    TamanhoDeCamisaEnum["G"] = "Grande";
})(TamanhoDeCamisaEnum || (TamanhoDeCamisaEnum = {}));
const tamanhoDeCamisa = "P";
const tamanhoDeCamisa1 = TamanhoDeCamisaEnum.G;
const numeroDeCamisa = 12;
const macarronadaDaCamisa = "G";
const x = { nome: "asd", filmePreferido: "adsf" };
