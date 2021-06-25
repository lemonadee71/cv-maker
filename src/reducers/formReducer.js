import formSchema from '../formSchema';
import { convertFormGroupSchema } from '../utils';

const formContextReducer = (state, action) => {
  const { blockName, groupId, data } = action.payload;
  const block = state[blockName];

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        [blockName]: {
          ...block,
          groups: [
            ...block.groups,
            convertFormGroupSchema(formSchema[blockName].fields),
          ],
        },
      };
    case 'DELETE':
      return {
        ...state,
        [blockName]: {
          ...block,
          groups: block.groups.filter((group) => group.id !== groupId),
        },
      };
    case 'UPDATE':
      return {
        ...state,
        [blockName]: {
          ...block,
          groups: block.groups.map((group) => {
            if (group.id === groupId) return { ...group, fields: data };

            return group;
          }),
        },
      };
    default:
      return state;
  }
};

export { formContextReducer };
