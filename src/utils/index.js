export const formatName = ({ title, first, last }) => {
  const prefix = title.length > 3 ? title: title + '.';

  return `${prefix} ${first} ${last}`;
};
