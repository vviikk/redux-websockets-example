/* eslint-disable import/prefer-default-export */
export const getObjectFromArray = arr => arr.reduce((acc, cur) => ({
  ...acc,
  [cur]: cur,
}), {})
