import { PessoaModel } from './pessoa-model';
export interface DepoimentoModel {
    texto?: string;
    id? : number;
    pessoa:PessoaModel;


}