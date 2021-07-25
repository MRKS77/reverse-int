module.exports = function reverse (n) {
  return Number(String(Math.abs(n)).split('').reverse().join(''))
//   *ALTERNATIVE SOLUTION*
//
//   n = Math.abs(n);
//   let x = 0;
//   while(n) {
//       x = (x * 10) + (n % 10);
//       n = Math.floor(n / 10)
//   }
//   return x
}
