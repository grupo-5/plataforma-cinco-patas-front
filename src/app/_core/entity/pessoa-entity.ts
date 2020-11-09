import { EnderecoEntity } from './endereco-entity';

export interface PessoaEntity {
    id?: number;
    nome: string;
    dataNasc?: string;
    tipo:string;
    sexo:string;  
    cpf: string;
    rg: string;
    email: string;
    contato: string;
    endereco: EnderecoEntity;
}


