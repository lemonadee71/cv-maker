import { convertFormGroupSchema } from '../utils';

const appContextReducer = (state, action) => {
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
            convertFormGroupSchema(block.schema.fields),
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
    case 'EDIT':
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

export { appContextReducer };
