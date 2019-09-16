export const generateRgbaColor = (a = .5) => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgba = `rgba(${r},${g},${b},${a})`
  return rgba;
};
