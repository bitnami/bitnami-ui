// Export helpers
export { default as Spacing } from './spacing';
export { default as Typography } from './typography';
export { default as Background } from './background';
export { default as Shadow } from './shadow';

// Utils methods
export const merge = (...args) => Object.assign(...args);

export const cleanProps = (props, ...helpers) => {
  const allKeys = helpers.reduce((acc, v) => acc.concat(v.propKeys), []);
  allKeys.push('className');
  // Cannot use delete here due to the props object.
  const newProps = {};
  Object.keys(props).forEach(k => {
    if (!allKeys.includes(k)) {
      newProps[k] = props[k];
    }
  });
  return newProps;
};
