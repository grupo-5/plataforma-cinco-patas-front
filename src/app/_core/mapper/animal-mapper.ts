import { AnimalModel } from './../model/animal-model';
import { AnimalEntity } from '../entity/animal-entity';
import { Mapper } from './../../../app/_base/mapper';

export class AnimalMapper extends Mapper<AnimalEntity, AnimalModel> {

    mapFrom(param: AnimalEntity): AnimalModel {
        return {
            id: param.id,
            nome: param.nome,
            dataNasc: param.dataNasc,
            especie: param.especie,
            sexo: param.sexo,
            porte: param.porte,
            localizacao: param.localizacao,
            personalidades: param.personalidades,
            cuidadosVet: param.cuidadosVet,
            infoExtras: param.infoExtras,
             endereco: param.endereco,
             nomeTitular: param.nomeTitular,
             contato: param.contato,
             status:param.status
        };
    }

    mapTo(param: AnimalModel): AnimalEntity {
        return {
            id: param.id,
            nome: param.nome,
            dataNasc: param.dataNasc,
            especie: param.especie,
            sexo: param.sexo,
            porte: param.porte,
            localizacao: param.localizacao,
            personalidades: param.personalidades        
                    ,
            cuidadosVet: param.cuidadosVet,
            infoExtras: param.infoExtras,
             endereco: param.endereco,
             nomeTitular: param.nomeTitular,
             contato: param.contato,
             status:param.status
            
        };
    }
}
