import { CidadeModel } from './../model/cidade-model';
import { CidadeEntity } from './../entity/cidade-entity';
import { Mapper } from './../../_base/mapper';

export class CidadeMapper extends Mapper<CidadeEntity, CidadeModel> {

  mapFrom(param: CidadeEntity): CidadeModel {

    return {
      id: param.id,
      nome: param.nome,
      estado: param.estado
    };
  }

  mapTo(param: CidadeModel): CidadeEntity {
    return {
      id: param.id,
      nome: param.nome,
      estado: param.estado
    };
  }
}
