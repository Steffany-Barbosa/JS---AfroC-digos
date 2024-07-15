class ClienteFisico extends Cliente {
    nome: string;
    cpf: string;

    constructor (nome: string, cpf: string, codigo: number, endereco: string){
        super(codigo, endereco)
        this.nome = nome;
        this.cpf = cpf;
    }

    /*localizarEndereco (): string {
      return this.endereco
    }
    */

    validarCPF(){
        if(this.cpf.length === 11){
            return "CPF validado com sucesso"
        }
        return "CPF inválido."
    }

}

const clienteFisico = new ClienteFisico("Gabriel","123", 12, "Rua dos Touros")