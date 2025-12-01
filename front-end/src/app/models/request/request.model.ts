export interface ResourceRequest {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  justification: string;
  status?: string;
  resource: {
    id: number;
    name?: string;
  };
  user: {
    id: string;
    name?: string;
    email?: string;
  };
}
