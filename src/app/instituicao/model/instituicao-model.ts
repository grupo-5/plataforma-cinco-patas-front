import { EnderecoModel } from "../../endereco/model/endereco-model";

export interface InstituicaoModel {
    id?: number;
    capacidade: number;
    razaoSocial: string;
    nome: string;
    tipoDeDocumento: string;
    numeroDoDocumento: string;
    email: string;
    banco: string;
    agencia: string;
    conta: string;
    inscricaoEstadual: String;
    endereco:EnderecoModel;
    contato: string;
}

