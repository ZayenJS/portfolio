import { GetTechnologyByIdPayload, GetTechnologiesPayload, GetTechnologyByNamePayload } from '.';

export enum TechnologyActions {
  GET_TECHNOLOGIES = 'GET_TECHNOLOGIES',
  GET_TECHNOLOGY_BY_ID = 'GET_TECHNOLOGY_BY_ID',
  GET_TECHNOLOGY_BY_NAME = 'GET_TECHNOLOGY_BY_NAME',
}

export interface GetTechnologiesAction {
  type: TechnologyActions.GET_TECHNOLOGIES;
  payload: GetTechnologiesPayload;
}

export interface GetTechnologyByIdAction {
  type: TechnologyActions.GET_TECHNOLOGY_BY_ID;
  payload: GetTechnologyByIdPayload;
}

export interface GetTechnologyByNameAction {
  type: TechnologyActions.GET_TECHNOLOGY_BY_NAME;
  payload: GetTechnologyByNamePayload;
}

export type TechnologyActionType =
  | GetTechnologiesAction
  | GetTechnologyByIdAction
  | GetTechnologyByNameAction;
