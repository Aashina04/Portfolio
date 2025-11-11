// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };
// src/utils.js
export const getImageUrl = (path) => {
  return `/assets/${path}`;
};
