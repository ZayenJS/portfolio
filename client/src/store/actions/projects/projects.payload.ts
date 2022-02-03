import { Project } from '../../../models/Project';

export interface GetProjectsPayload {
  projects?: Project[];
}

export interface GetProjectByIdPayload {
  id: number;
  project?: Project;
}
