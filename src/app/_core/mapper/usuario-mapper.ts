import {UsuarioModel } from '../model/usuario-model';
import { UsuarioEntity } from './../entity/usuario-entity';
import { Mapper } from './../../_base/mapper';

export class UsuarioMapper extends Mapper<UsuarioEntity, UsuarioModel> {

    mapFrom(param: UsuarioEntity): UsuarioModel {
        return {
            id: param.id,
            nome:param.nome,
            email: param.email,
            pass:param.pass
           
        };
    }

    mapTo(param: UsuarioModel): UsuarioEntity {
        return {
            id: param.id,
            nome: param.nome,
            email: param.email,
            pass: param.pass
        };
    }
}
