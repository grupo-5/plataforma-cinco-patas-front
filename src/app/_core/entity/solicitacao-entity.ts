import { AnimalEntity } from './animal-entity';
import { PessoaEntity } from './pessoa-entity';

export interface SolicitacaoEntity {
    id?: number;
    situacao?: string;
    data?: string;
    tipoSolicitacao?: string;
    justificativa?: string;
    pessoa?: PessoaEntity;
    animal?: AnimalEntity;
  }
