import { EnderecoModel } from "./endereco-model";

export interface InstituicaoModel {
    id?: number;
    capacidade?: number;
    razaoSocial?: string;
    nome?: string;
    tipoDocumento?: string;
    numeroDocumento?: string;
    email?: string;
    senha?: string;
    banco?: string;
    agencia?: string;
    conta?: string;
    inscricaoEstadual?: string;
    endereco?: EnderecoModel;
    contato?: string;
    imagem?: any;
}

