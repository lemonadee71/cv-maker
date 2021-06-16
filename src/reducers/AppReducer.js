const appContextReducer = (state, action) => {
  switch (action.type) {
    // case 'ADD':
    //   return {
    //     ...state,
    //     [key]: [...state[key], convertSchema(action.payload.schema)],
    //   };
    // case 'DELETE':
    //   return {
    //     ...state,
    //     [key]: state[key].filter((child) => child.id !== action.payload.id),
    //   };
    case 'EDIT':
      const { blockId, groupId, data } = action.payload;
      const block = state[blockId];

      return {
        ...state,
        [blockId]: {
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
