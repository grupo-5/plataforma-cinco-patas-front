import { AnimalModel } from './animal-model';
import { PessoaModel } from './pessoa-model';

export interface SolicitacaoModel {
    id?: number;
    situacao?: string;
    data?: string;
    tipoSolicitacao?: string;
    justificativa?: string;
    pessoa?: PessoaModel;
    animal?: AnimalModel;
}
