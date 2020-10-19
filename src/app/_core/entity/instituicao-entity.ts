import { EnderecoEntity } from './endereco-entity';
export interface InstituicaoEntity {
  id?: number;
  capacidade: number;
  razaoSocial: string;
  nome: string;
  tipoDeDocumento: string;
  numeroDoDocumento: string;
  email: string;
  banco: string;
  agencia: string;
  conta: string;
  inscricaoEstadual: String;
  endereco: EnderecoEntity;
  contato: string;
}
