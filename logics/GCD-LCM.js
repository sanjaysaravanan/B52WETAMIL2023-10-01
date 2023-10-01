

// GCD --> Greatest Common Divisor

// 21 28 --> 7

// 21 42 --> 21

// Logic to Find GCD

function getGcdOfTwoNumbers(num1, num2) {
  let gcdVal = 1;

  let minNum = num1;

  if (num1 > num2) {
    minNum = num2;
  }

  for (let i = 0; i <= minNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcdVal = i;
    }
  }

  return gcdVal;
}

console.log(getGcdOfTwoNumbers(32, 48));

// Logic to Find LCM

// Formula --> a * b / GCD(a, b)

// LCM for 42 39
let a = 42, b = 39;
console.log((a * b) / getGcdOfTwoNumbers(a, b));

function minOfThreeNumbers(x, y, z) {
  if (x <= y && y <= z) return x;

  if (y <= z && y <= x) return y;

  return z;
}

function getGcdOfThreeNumbers(num1, num2, num3) {
  let gcdVal = 1;

  let minNum = minOfThreeNumbers(num1, num2, num3);


  for (let i = 0; i <= minNum; i++) {
    if (num1 % i === 0 && num2 % i === 0 && num3 % i === 0) {
      gcdVal = i;
    }
  }

  return gcdVal;
}
