function reverseString(str: string): string {
  let reversedString: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}


const reverseStringTest1 = reverseString("hello");
const reverseStringTest2 = reverseString("world");
const reverseStringTest3 = reverseString("andre");
const reverseStringTest4 = reverseString("typescript");

console.log(reverseStringTest1); // olleh
console.log(reverseStringTest2); // dlrow
console.log(reverseStringTest3); // erdna
console.log(reverseStringTest4); // tpircsepyt