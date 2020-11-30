import { PessoaModel } from '../model/pessoa-model';
import { PessoaEntity } from './../entity/pessoa-entity';
import { Mapper } from './../../_base/mapper';

export class PessoaMapper extends Mapper<PessoaEntity, PessoaModel> {
  mapFrom(param: PessoaEntity): PessoaModel {
    return {
      id: param.id,
      nome: param.nome ? param.nome : '',
      sexo: param.sexo,
      contato: param.contato,
      dataNasc: param.dataNasc,
      cpf: param.cpf,
      rg: param.rg,
      email: param.email,
      senha: param.senha,
      endereco:param.endereco,
      tipo:param.tipo,
      imagem: param.imagem
    };
  }

  mapTo(param: PessoaModel): PessoaEntity {
    return {
      id: param.id,
      nome: param.nome,
      sexo: param.sexo,
      contato: param.contato,
      dataNasc: param.dataNasc,
      cpf: param.cpf,
      rg: param.rg,
      email: param.email,
      senha: param.senha,
      endereco:param.endereco,
      tipo:param.tipo,
      imagem: param.imagem
    };
  }
}
