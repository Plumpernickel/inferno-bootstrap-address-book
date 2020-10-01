export const formatName = ({ title = 'Mr', first = 'E', last = 'Nigma' } = {}) => {
  const prefix = title.length > 3 ? title: title + '.';

  return `${prefix} ${first} ${last}`;
};
