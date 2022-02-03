import { Technology } from '../../../models/Technology';

export interface GetTechnologiesPayload {
  all: boolean;
  technologies?: Technology[];
  error?: string;
}

export interface GetTechnologyByIdPayload {
  id: number;
  technology?: Technology;
}

export interface GetTechnologyByNamePayload {
  name: string;
  technology?: Technology;
}
