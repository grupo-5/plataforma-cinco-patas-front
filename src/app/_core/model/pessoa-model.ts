import { EnderecoModel } from './endereco-model';

export interface PessoaModel {
  id?: number;
  nome: string;
  dataNasc?: string;
  tipo:string;
  sexo:string;  
  cpf: string;
  rg: string;
  email: string;
  contato: string;
  endereco: EnderecoModel;
  
}
 