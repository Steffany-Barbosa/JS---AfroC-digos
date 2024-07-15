class ClienteJuridico extends Cliente {
    cnpj: string;
    razaoSocial: string;

    constructor (cnpj: string, razaoSocial: string, codigo: number, endereco: string){
        super(codigo, endereco)
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    verificarCNPJ(){
        if(this.cnpj.length !== 14){
            return "CNPJ inválido"
        }
        return "CNPJ validado com sucesso!"
    }
}

const clienteJuridico = new ClienteJuridico ("12345678901212", "Mundo da Lua", 123, "Rua do Carmo")
console.log(clienteJuridico.localizarEndereco())