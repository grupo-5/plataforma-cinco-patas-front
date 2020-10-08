import { Cidade } from './../_models/cidade';
import { CidadeEntity } from './../_entity/cidade-entity';
import { Mapper } from '../_base/mapper';

export class CidadeMapper extends Mapper<CidadeEntity, Cidade> {
    mapFrom(param: CidadeEntity): Cidade {
        return {
            id: param.id,
            nome: param.nome,
            estado: param.estado
        };
    }
    mapTo(param: Cidade): CidadeEntity {
        return {
            id: param.id,
            nome: param.nome,
            estado: param.estado
        };
    }
}