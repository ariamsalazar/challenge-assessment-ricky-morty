import { snakeCase } from 'lodash';

export const toSnakeCase = (obj: any) => {
  const newObj: any = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(obj)) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[snakeCase(key)] = obj[key];
    }
  }

  return newObj;
};

