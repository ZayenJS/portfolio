import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import axios from '../../utils/axios';
import { ProjectActions, ProjectActionType } from '../actions/projects';

export const projectsMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<ProjectActionType>) =>
  async (action: ProjectActionType) => {
    switch (action.type) {
      case ProjectActions.GET_PROJECTS: {
        try {
          const {
            data: { data },
          } = await axios.post('/graphql', {
            query: `
            query getProjects {
              getProjects {
                id
                name
                description
                url
                repository
                technologies {
                  id
                  name
                  iconUrl
                }
                images {
                  url
                }
              }
            }
          `,
          });

          if (data.getProjects) {
            action.payload.projects = data.getProjects;
          }
        } catch (error) {
          console.trace((error as Error).message);
        }

        return next(action);
      }
      default:
        next(action);
        break;
    }
  };
