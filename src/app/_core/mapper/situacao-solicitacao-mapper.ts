import { SituacaoSolicitacaoEntity } from './../entity/situacao-solicitacao-entity';
import { SituacaoSolicitacaoModel } from './../model/situacao-solicitacao-model';
import { Mapper } from '../../_base/mapper';

export class SituacaoSolicitacaoMapper extends Mapper<SituacaoSolicitacaoEntity, SituacaoSolicitacaoModel> {

  mapFrom(param: SituacaoSolicitacaoEntity): SituacaoSolicitacaoModel {

    return {
      id: param.id,
      situacao: param.situacao,
      data: param.data,
      solicitacao: param.solicitacao
    };
  }

  mapTo(param: SituacaoSolicitacaoModel): SituacaoSolicitacaoEntity {
    return {
      id: param.id,
      situacao: param.situacao,
      data: param.data,
      solicitacao: param.solicitacao
    };
  }
}
