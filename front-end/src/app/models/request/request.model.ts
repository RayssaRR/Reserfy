export class Request {
  id!: number;
  status!: string;
  startDate!: string;       
  endDate!: string;         
  justification!: string;
  user!: {
    name: string;
  };             
  resource!: {
    name: string;
  };   
}
