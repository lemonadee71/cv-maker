export const reduceToValue = (data) =>
  Object.entries(data).reduce((reducedData, [name, blockData]) => {
    reducedData[name] = blockData.groups
      .map((group) =>
        Object.entries(group.fields).reduce((groupData, [field, value]) => {
          groupData[field] = value.value.trim() || '';

          return groupData;
        }, {})
      )
      .filter((group) => !Object.values(group).every((value) => !value));

    return reducedData;
  }, {});
