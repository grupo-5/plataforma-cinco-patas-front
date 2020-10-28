import { EnderecoEntity } from './endereco-entity';
export interface InstituicaoEntity {
  id?: number;
  capacidade?: number;
  razaoSocial?: string;
  nome?: string;
  tipoDocumento?: string;
  numeroDocumento?: string;
  email?: string;
  banco?: string;
  agencia?: string;
  conta?: string;
  inscricaoEstadual?: String;
  endereco?: EnderecoEntity;
  contato?: string;
  imagem?: any;
}
