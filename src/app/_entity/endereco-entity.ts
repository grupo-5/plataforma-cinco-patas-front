import { CidadeEntity } from './cidade-entity';

export interface EnderecoEntity {
    enderecoCep: string;
    enderecoLogradouro: string;
    enderecoNumero: number;
    enderecoCidade: CidadeEntity;
    enderecoBairro: string;
    enderecoComplemento: string;
    // enderecoEstado: string;
}