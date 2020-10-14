import { PessoaModel } from './../../pessoa/model/pessoa-model';
export interface DepoimentoEntity {
    texto: string;
    id? : number;
    pessoa:PessoaModel;
}