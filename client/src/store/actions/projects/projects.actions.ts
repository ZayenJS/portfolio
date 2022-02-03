import { GetProjectByIdPayload, GetProjectsPayload } from '.';

export enum ProjectActions {
  GET_PROJECTS = 'GET_PROJECTS',
  GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID',
}

export interface GetProjectsAction {
  type: ProjectActions.GET_PROJECTS;
  payload: GetProjectsPayload;
}

export interface GetProjectByIdAction {
  type: ProjectActions.GET_PROJECT_BY_ID;
  payload: GetProjectByIdPayload;
}

export type ProjectActionType = GetProjectsAction | GetProjectByIdAction;
