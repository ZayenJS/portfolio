import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import axios from '../../utils/axios';
import { TechnologyActions, TechnologyActionType } from '../actions/technologies';

export const technologyMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<TechnologyActionType>) =>
  async (action: TechnologyActionType) => {
    switch (action.type) {
      case TechnologyActions.GET_TECHNOLOGIES: {
        try {
          const {
            data: { data },
          } = await axios.post('/graphql', {
            query: `
            query getTechnologies($all: Boolean!) {
              getTechnologies(all: $all) {
                  id
                  name
                  iconUrl
                }
              }
          `,
            variables: {
              all: action.payload.all,
            },
          });

          console.log(data);

          if (data.getTechnologies) {
            action.payload.technologies = data.getTechnologies;
          }
        } catch (error) {
          console.trace((error as Error).message);
          action.payload.error =
            'Une erreur est survenue lors de la communication avec le serveur. Merci de réessayer plus tard.';
        }

        return next(action);
      }
      default:
        next(action);
        break;
    }
  };
