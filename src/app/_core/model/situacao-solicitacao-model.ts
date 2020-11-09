import { SolicitacaoModel } from './solicitacao-model';

export interface SituacaoSolicitacaoModel {
    id?: number;
    situacao?: string;
    data?: string;
    solicitacao?: SolicitacaoModel;
}
