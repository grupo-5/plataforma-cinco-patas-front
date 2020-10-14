import { EnderecoModel } from '../../endereco/model/endereco-model';

export interface PessoaModel {
  id?: number;
  nome?: string;
  sobrenome?: string;
  contato?: string;
  dataNasc?: string;
  cpf?: string;
  rg?: string;
  email?: string;
  endereco?: EnderecoModel;
}
