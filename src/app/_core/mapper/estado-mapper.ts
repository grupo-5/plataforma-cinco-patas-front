import { EstadoModel } from './../model/estado-model';
import { EstadoEntity } from './../entity/estado-entity';
import { Mapper } from './../../_base/mapper';

export class EstadoMapper extends Mapper<EstadoEntity, EstadoModel> {

  mapFrom(param: EstadoEntity): EstadoModel {

    return {
      id: param.id,
      nome: param.nome
    };
  }

  mapTo(param: EstadoModel): EstadoEntity {
    return {
      id: param.id,
      nome: param.nome
    };
  }
}
