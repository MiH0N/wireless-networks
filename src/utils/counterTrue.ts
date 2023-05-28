export const counterTrue = (data: string) => {
  let count = 0;
  data.split('').forEach(item => {
    if (item === '1') count++;
  });
  return count;
};
