let nome1: string; // o tipo foi atribuido
let nome: string = "Ana"; // o tipo foi inferido
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
function processValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  }
}

// console.log(processValue(2));
// console.log(processValue("Ana"));

//array
type mixType = Array<string | number>;
const nomeDeProdutos1 = ["camisa", "calça", "saia", 7];
// const nomeDeProdutos2: string[] | number[] = ["camisa", "calça", "saia", 7];
const nomeDeProdutos3: string[] = ["camisa", "calça", "saia"];
const nomeDeProdutos4: mixType = ["camisa", "calça", "saia", 7];

// const obj = { nome: "Lis", idade: 30, eCasada: true };
//tuple
// type objType = [string, number, boolean];

type objType = [string, number, boolean];
const tuple1: objType = ["Lis", 30, true];
const tuple2: objType = ["Lis", 12, true];

// Enum
enum DiasDaSemana {
  segunda = "Segunda feira",
  terça = "Terça feira",
  quarta = "Quarta feira",
}

// Enum
enum DiasDaSemanaBD {
  segunda = 0,
  terça = 1,
  quarta = 2,
}

const diaDeFolga: DiasDaSemana = DiasDaSemana.segunda;
const diaDeFolga1: DiasDaSemanaBD = DiasDaSemanaBD.segunda;

const diaDeFolga2 = "2";
const diaDeFolga3 = "seg";
const diaDeFolga4 = "seg";
const diaDeFolga5 = "segunda";

type ProfessoraProps = {
  nome: string;
  idade: number;
};
// const professora: {
//   nome: string;
//   idade: number;
// } = { nome: "Lis", idade: 29 };
// const professora: ProfessoraProps = { nome: "Lis", idade: 29 };
const professora: ProfessoraProps = { idade: 29, nome: "Lis" };

enum MateriasEnum {
  historia = "Historia",
  geografia = "Geografia",
  matematica = "Matematica",
}

type DocumentosType = {
  cpf: string;
  rg: string;
};

type AlunoType = {
  nome: string;
  idade?: number;
  // materias: MateriasEnum[];
  materias: Array<MateriasEnum>;
  isMatriculado: boolean;
  // documentos: DocumentosType;
  documentos: { cpf: string; rg: string };
};

const bea: AlunoType = {
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

const funcaoTeste1 = (): never => {
  throw Error("asfs");
};

// console.log(funcaoTeste1());

const funcaoTeste2 = (nome: string): never => {
  if (nome === "Lis") {
    throw Error("asfs");
  }
  throw "auraite";
};

// console.log(funcaoTeste2("Liss"));

// Tipo literal
enum TamanhoDeCamisaEnum {
  P = "Pequena",
  M = "Média",
  G = "Grande",
}

type TamanhoDeCamisaType = "P" | "M" | "G";
const tamanhoDeCamisa: TamanhoDeCamisaType = "P";
const tamanhoDeCamisa1: TamanhoDeCamisaEnum = TamanhoDeCamisaEnum.G;

type NumeroDeCamisaType = 12 | 15 | 18;
const numeroDeCamisa: NumeroDeCamisaType = 12;

type TamanhoDeCamisaType3 = 8 | "P" | "G" | { nome: "a" } | [];
const macarronadaDaCamisa: TamanhoDeCamisaType3 = "G";

type NomeUm = {
  nome: string;
};

type NomeDois = {
  filmePreferido: string;
};

// type NomeTres = {
//   nome: string;
//   filmePreferido: string;
// };
type NomeTres = NomeUm & NomeDois;
const x: NomeTres = { nome: "asd", filmePreferido: "adsf" };