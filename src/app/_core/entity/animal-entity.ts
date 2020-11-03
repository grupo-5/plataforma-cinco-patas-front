import { EnderecoEntity } from './../entity/endereco-entity';

export interface AnimalEntity {
  id?: number;
  nome?: string;
  dataNasc?: string;
  especie?: string;
  sexo?: string;
  porte?: string;
  localizacao?: string;
  personalidades?: any[];
  cuidadosVet?: any[];
  infoExtras?: string;
  endereco?: EnderecoEntity
  nomeTitular?: string;
  contato?: string;
  status?: string;
  imagem?: any;
}
