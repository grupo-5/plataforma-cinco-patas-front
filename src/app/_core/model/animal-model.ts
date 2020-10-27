import { EnderecoModel } from "./endereco-model";

export interface AnimalModel {
  id?: number;
  nome?: string;
  dataNasc?: string;
  especie?: string;
  sexo?: string;
  porte?: string;
  localizacao?: string;
  personalidades?: {};
  cuidadosVet?: {};
  infoExtras?: string;
  endereco?: EnderecoModel
  nomeTitular?: string;
  contato?: string;
  status?: string;
  imagem?: any;
  }
  


