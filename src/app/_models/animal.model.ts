// import { Endereco } from './endereco.model';

export interface Animal {
    id?: number;
    nome: string;
    dataNasci: string;
    especie: string;
    sexo: string;
    porte: string;
    localizacao: string;
    personalidade: Array<string>;
    cuidadosVet: Array<string>;
    infoExtras: string;
    nomeTitular: string;
    contato: string;
    // endereco?: Endereco;
    // enderecoCep: string;
    // enderecoLogradouro: string;
    // enderecoCidade: string;
    // enderecoNumero: number;
    // enderecoEstado: string;
    // enderecoComplemento: string;
}