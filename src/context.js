import { createContext } from 'react';
import { convertSchema } from './utils';

const contextReducer = (state, action) => {
  const { key } = action.payload;

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        [key]: [...state[key], convertSchema(action.payload.schema)],
      };
    case 'DELETE':
      return {
        ...state,
        [key]: state[key].filter((child) => child.id !== action.payload.id),
      };
    case 'EDIT':
      console.log(action);
      return {
        ...state,
        [key]: state[key].map((child) => {
          if (child.id === action.payload.data.id) return action.payload.data;

          return child;
        }),
      };

    default:
      return state;
  }
};

const AppContext = createContext(null);

export default AppContext;
export { contextReducer };
