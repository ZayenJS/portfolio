import {
  GetTechnologiesAction,
  GetTechnologiesPayload,
  GetTechnologyByIdAction,
  GetTechnologyByIdPayload,
  GetTechnologyByNameAction,
  GetTechnologyByNamePayload,
  TechnologyActions,
} from '.';

export const getTechnologies = (
  payload: GetTechnologiesPayload = { all: false },
): GetTechnologiesAction => ({
  type: TechnologyActions.GET_TECHNOLOGIES,
  payload,
});

export const getTechnologyById = (payload: GetTechnologyByIdPayload): GetTechnologyByIdAction => ({
  type: TechnologyActions.GET_TECHNOLOGY_BY_ID,
  payload,
});

export const getTechnologyByName = (
  payload: GetTechnologyByNamePayload,
): GetTechnologyByNameAction => ({
  type: TechnologyActions.GET_TECHNOLOGY_BY_NAME,
  payload,
});
