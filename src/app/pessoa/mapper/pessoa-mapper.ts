import { PessoaModel } from '../model/pessoa-model';
import { PessoaEntity } from './../entity/pessoa-entity';
import { Mapper } from './../../../app/_base/mapper';

export class PessoaMapper extends Mapper<PessoaEntity, PessoaModel> {
  mapFrom(param: PessoaEntity): PessoaModel {
    return {
      id: param.id,
      nome: param.nome ? param.nome : '',
      sobrenome: param.sobrenome,
      telefones: param.telefones,
      dataNasc: param.dataNasc,
      cpf: param.cpf,
      rg: param.rg,
      email: param.email,
    };
  }

  mapTo(param: PessoaModel): PessoaEntity {
    return {
      id: param.id,
      nome: param.nome,
      sobrenome: param.sobrenome,
      telefones: param.telefones,
      dataNasc: param.dataNasc,
      cpf: param.cpf,
      rg: param.rg,
      email: param.email,
    };
  }
}
