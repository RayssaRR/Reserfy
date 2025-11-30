export class Incident{
  id?: number;
  name!: string;
  description!: string;
  dateIncident!: Date; 
  severity!: 'LOW' | 'MEDIUM' | 'HIGH';
  resourceId!: number;
  status!: 'ABERTO' | 'EM_ANALISE' | 'RESOLVIDO';
}