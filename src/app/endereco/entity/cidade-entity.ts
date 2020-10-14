import { EstadoEntity } from './estado-entity';
export interface CidadeEntity {
    id?: number;
    nome?: string;
    estado?: EstadoEntity;
}
