import { Estado } from './../_models/estado';
import { EstadoEntity } from './../_entity/estado-entity';
import { Mapper } from '../_base/mapper';

export class EstadoMapper extends Mapper<EstadoEntity, Estado> {
    mapFrom(param: EstadoEntity): Estado {
        return {
            id: param.id,
            nome: param.nome
        };
    }
    mapTo(param: Estado): EstadoEntity {
        return {
            id: param.id,
            nome: param.nome
        };
    }
}
