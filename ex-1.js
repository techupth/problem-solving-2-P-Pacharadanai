//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanNumber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let checkValue = 1000;
  const number = s.split("").reduce((acc, curr) => {
    if (romanNumber[curr] <= checkValue) {
      acc += romanNumber[curr];
    } else {
      acc = acc + romanNumber[curr] - checkValue * 2;
    }
    checkValue = romanNumber[curr];
    return acc;
  }, 0);
  return number;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);
