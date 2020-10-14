import { EnderecoModel } from './../model/endereco-model';
import { EnderecoEntity } from './../entity/endereco-entity';
import { Mapper } from './../../../app/_base/mapper';

export class EnderecoMapper extends Mapper<EnderecoEntity, EnderecoModel> {

    mapFrom(param: EnderecoEntity): EnderecoModel {
        return {
            cep:param.cep,
            logradouro: param.logradouro,
            numero: param.numero,
            complemento: param.complemento,
            bairro: param.bairro,
            cidade:param.cidade,
        }
    }

    mapTo(param: EnderecoModel): EnderecoEntity {
        return {
            cep:param.cep,
            logradouro: param.logradouro,
            numero: param.numero,
            complemento: param.complemento,
            bairro: param.bairro,
            cidade:param.cidade,
        }
        };
    }

