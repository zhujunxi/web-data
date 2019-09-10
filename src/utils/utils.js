export const generateColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "(" + r + "," + g + "," + b + ")";
  return rgb;
};
