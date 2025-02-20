const fibonacciTest1 = isFibonacci(5);
const fibonacciTest2 = isFibonacci(8);
const fibonacciTest3 = isFibonacci(9);
const fibonacciTest4 = isFibonacci(10);

console.log(fibonacciTest1); // true
console.log(fibonacciTest2); // true
console.log(fibonacciTest3); // false
console.log(fibonacciTest4); // false

function isFibonacci(n: number): boolean {
  let primeiro: number = 0;
  let segundo: number = 1;
  let soma: number = 0;

  while (soma < n) {
    soma = primeiro + segundo;
    primeiro = segundo;
    segundo = soma;
  }

  return soma === n;
}
