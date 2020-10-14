import { EnderecoModel } from "../../endereco/model/endereco-model";

export interface AnimalModel {
    id?: number;
    nome: string;
    dataNasc: string;
    especie: string;
    sexo: string;
    porte: string;
    localizacao: string;
    personalidades: Array<string>;
    cuidadosVet: Array<string>;
    infoExtras: string;
    endereco:EnderecoModel
    nomeTitular: string;
    contato: string;
  }
  


