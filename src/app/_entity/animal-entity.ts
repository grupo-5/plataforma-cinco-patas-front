import { Endereco } from './../_models/endereco.model';

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
    endereco: Endereco;
    nomeTitular: string;
    contato: string;
    // enderecoCep: string;
    // enderecoLogradouro: string;
    // enderecoCidade: string;
    // enderecoNumero: number;
    // enderecoEstado: string;
    // enderecoComplemento: string;
}