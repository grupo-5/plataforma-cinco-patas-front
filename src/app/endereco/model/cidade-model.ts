import { EstadoModel } from './estado-model';


export interface CidadeModel {
    id?: number;
    nome?: string;
    estado?: EstadoModel;
}

