function findFactorial(num) {
  if (num === 2) {
    return 2;
  }
  return num * findFactorial(num - 1);
}

// console.log(findFactorial(5));

function findFactorialIteration(num) {
  let answer = num;
  while (num > 1) {
    answer = answer * (num - 1);
    num--;
  }
  return answer;
}

// console.log(findFactorialIteration(5));

function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log(fibRecursive(5));

function fibIteration(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num];
}
console.log(fibIteration(5));

function reverseString(str) {
  const input = str.slice(str.length - 1);
  const word = str.slice(0, str.length - 1);

  if (str.length > 0) {
    return input + reverseString(word);
  }

  return str;
}

console.log(reverseString('first'));
