module.exports = function toReadable (number) {
    let str = "";
    let arr = [];
  
    if (number === 0) {
      str = "zero";
    }
    while (number > 0) {
      arr.push(number % 10);
      number = Math.floor(number / 10);
    }
    arr = arr.reverse();
    console.log(arr);
  
    if (arr.length === 1) {
      str = digit(arr[0]);
    }
  
    if (arr.length === 2) {
      str = dozen(arr[0], arr[1]);
    }
  
    if (arr.length === 3) {
      str = hundredCount(arr[0], arr[1], arr[2]);
    }
  
    return str;
}

function digit(num) {
    const arr1 = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    let str = "";
    for (let i = 0; i < arr1.length; i++) {
      if (num === i) {
        str = arr1[i];
      }
    }
  
    return str;
  }
  
  function dozen(num1, num2) {
    const arr2 = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const arr3 = [
      "zero",
      "zero",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    let str = "";
    if (num1 === 0) {
      str = digit(num2);
    } else {
      if (num1 < 2) {
        for (let i = 0; i < arr2.length; i++) {
          if (num2 === i) {
            str = str + arr2[i];
          }
        }
      } else {
        for (let i = 0; i < arr3.length; i++) {
          if (num1 === i) {
            str = str + arr3[i];
          }
        }

        if(num2 !== 0) {
        str = str + " " + digit(num2);
        } 
      }
    }
    return str;
  }
  
  function hundredCount(num1, num2, num3) {
    let str = "";
    if (num1 === 0) {
      str = dozen(num2, num3);
    } else {

        if(num2 !== 0) {
      str = digit(num1) + " hundred " + dozen(num2, num3);
        } else  {
            if(num3 !== 0){
            str = digit(num1) + " hundred " + digit(num3);
            } else {
                str = digit(num1) + " hundred";
            }
        } 
    }
    return str;
  }
  
