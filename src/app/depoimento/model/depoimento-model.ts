import { PessoaModel } from './../../pessoa/model/pessoa-model';
export interface DepoimentoModel {
    texto: string;
    id? : number;
    pessoa:PessoaModel;


}