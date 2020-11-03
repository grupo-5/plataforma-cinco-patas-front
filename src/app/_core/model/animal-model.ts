import { EnderecoModel } from "./endereco-model";

export interface AnimalModel {
  id?: number;
  nome?: string;
  dataNasc?: string;
  especie?: string;
  sexo?: string;
  porte?: string;
  localizacao?: string;
  personalidades?: {id: number; descricao: string; }[];
  // telefones?: { id: number; telefone: string, tipo: string }[];
  cuidadosVet?: { id: number; descricao: string; }[];
  infoExtras?: string;
  endereco?: EnderecoModel
  nomeTitular?: string;
  contato?: string;
  status?: string;
  imagem?: any;
  }
  


