export interface Animal {
    id?: number;
    nome: string;
    dataNasci: Date;
    especie: string;
    sexo: string;
    porte: string;
    localizacao: string;
    personalidade: string;
    cuidadosVet: Array<string>;
    infoExtras: string;
    enderecoCep: string;
    enderecoLogradouro: string;
    enderecoCidade: string;
    enderecoNumero: number;
    enderecoEstado: string;
    enderecoComplemento: string;
    nomeTitular: string;
}