// i write shity function to use testing more
export function add(numbers?: number[] | string[] | any[] | any | []) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
