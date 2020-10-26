import { SolicitacaoModel } from '../model/solicitacao-model';
import { SolicitacaoEntity } from '../entity/solicitacao-entity';
import { Mapper } from '../../_base/mapper';

export class SolicitacaoMapper extends Mapper<SolicitacaoEntity, SolicitacaoModel> {

  mapFrom(param: SolicitacaoEntity): SolicitacaoModel {

    return {
      id: param.id,
      situacao: param.situacao,
      data: param.data,
      tipoSolicitacao: param.tipoSolicitacao,
      justificativa: param.justificativa,
      pessoa: param.pessoa,
      animal: param.animal
    };
  }

  mapTo(param: SolicitacaoModel): SolicitacaoEntity {
    return {
      id: param.id,
      situacao: param.situacao,
      data: param.data,
      tipoSolicitacao: param.tipoSolicitacao,
      justificativa: param.justificativa,
      pessoa: param.pessoa,
      animal: param.animal
    };
  }
}
