
import { Mapper } from '../../_base/mapper';
import { InstituicaoEntity } from '../entity/instituicao-entity';
import { InstituicaoModel } from '../model/instituicao-model';

export class InstituicaoMapper extends Mapper<InstituicaoEntity, InstituicaoModel> {

  mapFrom(param: InstituicaoEntity): InstituicaoModel {

    return {
      id: param.id,
      nome: param.nome,
      capacidade: param.capacidade,
      razaoSocial: param.razaoSocial,
      tipoDocumento: param.tipoDocumento,
      numeroDocumento: param.numeroDocumento,
      email: param.email,
      senha: param.senha,
      banco: param.banco,
      agencia: param.agencia,
      conta: param.conta,
      inscricaoEstadual: param.inscricaoEstadual,
      endereco: param.endereco,
      contato: param.contato,
      imagem: param.imagem

    };
  }

  mapTo(param: InstituicaoModel): InstituicaoEntity {
    return {
      id: param.id,
      nome: param.nome,
      capacidade: param.capacidade,
      razaoSocial: param.razaoSocial,
      tipoDocumento: param.tipoDocumento,
      numeroDocumento: param.numeroDocumento,
      email: param.email,
      senha: param.senha,
      banco: param.banco,
      agencia: param.agencia,
      conta: param.conta,
      inscricaoEstadual: param.inscricaoEstadual,
      endereco: param.endereco,
      contato: param.contato,
      imagem: param.imagem
    };
  }
}
