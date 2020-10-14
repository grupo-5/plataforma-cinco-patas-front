import { EnderecoModel } from 'src/app/endereco/model/endereco-model';

export interface AnimalEntity {
    id?: number;
    nome: string;
    dataNasci: string;
    especie: string;
    sexo: string;
    porte: string;
    localizacao: string;
    personalidade: string;
    cuidadosVet: Array<string>;
    infoExtras: string;
     endereco:EnderecoModel
    nomeTitular: string;
    contato: string;
  }
  