
import { PessoaEntity } from './pessoa-entity';
export interface DepoimentoEntity {
    texto?: string;
    id? : number;
    pessoa:PessoaEntity;

}