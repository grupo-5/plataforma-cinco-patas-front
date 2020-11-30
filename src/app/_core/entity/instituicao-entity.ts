import { EnderecoEntity } from './endereco-entity';
export interface InstituicaoEntity {
  id?: number;
  capacidade?: number;
  razaoSocial?: string;
  nome?: string;
  tipoDocumento?: string;
  numeroDocumento?: string;
  email?: string;
  senha?: string;
  banco?: string;
  agencia?: string;
  conta?: string;
  inscricaoEstadual?: string;
  endereco?: EnderecoEntity;
  contato?: string;
  imagem?: any;
}
