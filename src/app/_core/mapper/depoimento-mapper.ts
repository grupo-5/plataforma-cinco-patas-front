import { DepoimentoEntity } from './../entity/depoimento-entity';
import { DepoimentoModel } from './../model/depoimento-model';

import { Mapper } from './../../_base/mapper';

export class DepoimentoMapper extends Mapper<DepoimentoEntity, DepoimentoModel> {

  mapFrom(param: DepoimentoEntity): DepoimentoModel {

    return {
      id: param.id,
      texto: param.texto,
      pessoa:param.pessoa,
      tipo:param.tipo
    };
  }

  mapTo(param: DepoimentoModel): DepoimentoEntity {
    return {
      id: param.id,
      texto: param.texto,
      pessoa:param.pessoa,
      tipo:param.tipo
    };
  }
}
