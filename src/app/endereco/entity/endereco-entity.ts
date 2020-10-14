import { CidadeEntity } from './cidade-entity';
export interface EnderecoEntity {
    cep?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: CidadeEntity;
}

