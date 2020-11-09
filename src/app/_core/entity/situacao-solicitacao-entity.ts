import { SolicitacaoEntity } from './solicitacao-entity';

export interface SituacaoSolicitacaoEntity {
    id?: number;
    situacao?: string;
    data?: string;
    solicitacao?: SolicitacaoEntity;
  }
