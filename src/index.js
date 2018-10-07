module.exports = function getZerosCount(number, base) {
  let count = base, a, answer = 0;
  let i = 2
  for (; i <= base; i++)
    if ((count / i) === Math.round(count / i)) {
      a = i
      count = count / i
      i--;
    }
  count = 1;
  while (count <= number) {
    count = count * a
    answer = answer + Math.floor(number / count);
  }
  return (answer);

}