import { EnderecoModel } from './endereco-model';

export interface PessoaModel {
  id?: number;
  nome: string;
  contato: string;
  dataNasc?: string;
  cpf: string;
  rg: string;
  email: string;
  endereco: EnderecoModel;
  sexo:string;
  tipo:string;
}
