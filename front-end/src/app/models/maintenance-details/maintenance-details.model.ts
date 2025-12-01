export interface Manutencao {
  recurso: string;
  tipo: string;
  severidade: string;
  status: string;
  data: string;
  responsavel: string;
  origem: string;
  descricao: string;
  timeline: {
    data: string;
    evento: string;
  }[];
}
