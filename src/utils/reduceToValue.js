export const reduceToValue = (data) => {
  const reducedData = {};

  Object.entries(data).forEach(([name, blockData]) => {
    reducedData[name] = blockData.groups.map((group) => {
      const groupData = {};

      Object.entries(group.fields).forEach(([field, value]) => {
        groupData[field] = value.value.trim() || '';
      });

      return groupData;
    });
  });

  return reducedData;
};
