import { Cidade } from './cidade.model';

export interface Endereco {    
    enderecoCep: string;
    enderecoLogradouro: string;
    enderecoNumero: number;
    enderecoCidade: Cidade;
    enderecoBairro: string;
    enderecoComplemento: string;
    // enderecoEstado: string;
}    