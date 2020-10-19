import { EnderecoEntity } from './endereco-entity';

export interface PessoaEntity {
    id?: number;
    nome: string;
    sexo: string;
    contato: string;
    dataNasc?: string;
    cpf: string;
    rg: string;
    email: string;
    endereco:EnderecoEntity
    tipo:string;

 
}


