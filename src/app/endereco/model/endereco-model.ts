import { CidadeModel } from './cidade-model';

export interface EnderecoModel {
    cep?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: CidadeModel;
}

