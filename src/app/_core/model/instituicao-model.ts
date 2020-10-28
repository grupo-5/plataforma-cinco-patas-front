import { EnderecoModel } from "./endereco-model";

export interface InstituicaoModel {
    id?: number;
    capacidade?: number;
    razaoSocial?: string;
    nome?: string;
    tipoDocumento?: string;
    numeroDocumento?: string;
    email?: string;
    banco?: string;
    agencia?: string;
    conta?: string;
    inscricaoEstadual?: String;
    endereco?: EnderecoModel;
    contato?: string;
    imagem?: any;
}

