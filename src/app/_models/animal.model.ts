export interface Animal {
    id?: number;
    nome: string;
    dataNasci: Date;
    especie: string;
    sexo: string;
    porte: string;
    localizacao: string;
    personalidade: string;
    cidade: string;
    cuidados_vet: Array<string>;
    info_extras: string;
    //endereco: string;
}