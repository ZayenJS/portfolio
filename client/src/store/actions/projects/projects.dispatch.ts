import { GetProjectByIdPayload, GetProjectsPayload, ProjectActions } from '.';

export const getProjects = (payload: GetProjectsPayload = {}) => ({
  type: ProjectActions.GET_PROJECTS,
  payload,
});

export const getProjectById = (payload: GetProjectByIdPayload) => ({
  type: ProjectActions.GET_PROJECT_BY_ID,
  payload,
});
