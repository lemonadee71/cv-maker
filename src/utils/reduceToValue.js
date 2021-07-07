import isDate from 'date-fns/isDate';
import format from 'date-fns/format';

export const reduceToValue = (data) =>
  Object.entries(data).reduce((reducedData, [name, blockData]) => {
    reducedData[name] = blockData.groups
      .map((group) =>
        Object.entries(group.fields).reduce((groupData, [field, value]) => {
          groupData[field] = isDate(value.value)
            ? format(value.value, 'MMM. d, y')
            : value.value.trim() || '';

          return groupData;
        }, {})
      )
      .filter((group) => !Object.values(group).every((value) => !value));

    return reducedData;
  }, {});
