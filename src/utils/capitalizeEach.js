export const capitalizeEach = (type, str) => {
  const separator = type === 'word' ? ' ' : '.';

  return str
    .split(separator)
    .map(
      (str) =>
        str && str[0].toUpperCase() + str.substr(1, str.length).toLowerCase()
    )
    .join(separator);
};
