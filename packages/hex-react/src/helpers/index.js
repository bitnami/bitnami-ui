// Export components
export { default as Spacing } from './spacing';

// Utils methods
export const merge = (...args) => Object.assign(...args);

export const cleanProps = (props, ...helpers) => {
  const allKeys = helpers.reduce((acc, v) => acc.concat(v.propKeys), []);
  allKeys.forEach(k => delete props[k]);
};
