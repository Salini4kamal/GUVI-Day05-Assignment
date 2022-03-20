//Do the below programs in anonymous function & IIFE
//1.Print odd numbers in an array

//a.anonymous function
var arr = [1, 2, 3, 4, 5, 6];

function OddNumber(arr) {
    let odds = arr.filter(n => n % 2)
    console.log(odds)
};
OddNumber(arr);
//b.IIFE function
(() => {
    var arr1 = [1, 2, 3, 4, 5, 6]
    let odds1 = arr1.filter(n1 => n1 % 2)
    console.log(odds1)
})();
//c.arrow function
var arr2 = [1, 2, 3, 4, 5, 6];
var OddNumber = (arr2) => {
    let odds = arr2.filter(n => n % 2)
    console.log(odds)
};
OddNumber(arr2);
// 2.Convert all the strings to title caps in a string array

//a.anonymous function*/
var str = 'iron man'

function string(str) {


    let s = str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(s);

};
string(str);

//b.IIFE function
(() => {
    var str1 = 'iron man';
    let string = str1.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(string);
})();

//c.Arrow function
var str2 = "iron man";
var capString = (str2) => {
    let s = str2.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(s);
};
capString(str2);
//3.Sum of all numbers in an array
//a.Anonymous function
var add = function(arr3) {
    return arr3.reduce((a, b) => a + b, 0);
};

var arr3 = [3, 6, 1, 5, 8];

var sum = add(arr3);
console.log(sum);


//anonymous function
var arr4 = [3, 4, 5, 6, 7];

function sumNumber(arr4) {
    let add = arr4.reduce((a, b) => a + b, 0);
    console.log(add);
};
sumNumber(arr4);


//IIFE function
(() => {
    var arr5 = [3, 4, 5, 6, 7];
    let sumNumber = arr5.reduce((a, b) => a + b, 0);
    console.log(sumNumber);
})();

//Arrow function 

var arr6 = [3, 4, 5, 6, 7];
var add = (arr6) => {
    let sumArray = arr6.reduce((a, b) => a + b, 0);
    console.log(sumArray);
};
add(arr6);





//4.Return all the prime numbers in an array
//IIFE Function:

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num) {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(array.filter(isPrime));

//Return all the prime numbers in an array IIFE
(() => {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    numArray = arr.filter((number) => {
        for (var i = 2; i < number; i++) {
            if (number % i === 0)
                return false;

        }
        return true;
    })
    console.log(numArray)
})();

//Return all the prime numbers in an array arrow function
const array1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var isPrime = (num) => {
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(array1.filter(isPrime));

// Return all the palindromes in an array anonymous function
function palindromeArray(arr1) {
    let isPalindrome = true;
    for (let i = 0; i < arr1.length / 2; i++) {
        if (arr1[i] !== arr1[arr1.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}
console.log(palindromeArray([1, 2, 2, 1]));

// Return all the palindromes in an array IIFE

(() => {
    let palindromeArrays = (arr1) => {
        let Palindrome = true;
        for (let i = 0; i < arr1.length / 2; i++) {
            if (arr1[i] !== arr1[arr1.length - i - 1]) {
                isPalindrome = false;
                break;
            }
        }
        return Palindrome;
    }
    console.log(palindromeArrays([1, 2, 2, 1]))
})();
// Return all the palindromes in an array arrow function

let palindromeArr = (arr1) => {
    let isPalindrome = true;
    for (let i = 0; i < arr1.length / 2; i++) {
        if (arr1[i] !== arr1[arr1.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}
console.log(palindromeArray([1, 2, 2, 1]));



//6.Return median of two sorted arrays of the same size
//a.anonymous function

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 2, 4, 6, 7];

function median(arr1, arr2) {
    var concat = arr1.concat(arr2).sort((a, b) => a - b);
    var length = concat.length;
    if (length % 2 == 1) {
        console.log("The median is:", concat[((length) / 2) - 0.5]);
    } else {
        console.log("The median is:", (concat[length / 2] + concat[(length / 2) - 1]) / 2)
    }
};
median(arr1, arr2);



//IIFE function:
let arrr1 = [1, 2, 3, 4, 5, 6];
let arrr2 = [1, 2, 2, 4, 6, 7];
(function(arrr1, arrr2) {
    var concat = arrr1.concat(arrr2).sort((a, b) => a - b);
    var length = concat.length;
    if (length % 2 == 1) {
        console.log("The median is:", concat[((length) / 2) - 0.5]);
    } else {
        console.log("The median is:", (concat[length / 2] + concat[(length / 2) - 1]) / 2)
    }
})(arrr1, arrr2);
//Arrow function:


let arrn1 = [1, 2, 3, 4, 5, 6];
let arrn2 = [1, 2, 2, 4, 6, 7];
var median = (arrn1, arrn2) => {
    var concat = arrn1.concat(arrn2).sort((a, b) => a - b);
    var length = concat.length;
    if (length % 2 == 1) {
        console.log("The median is:", concat[((length) / 2) - 0.5]);
    } else {
        console.log("The median is:", (concat[length / 2] + concat[(length / 2) - 1]) / 2)
    }
};
median(arrn1, arrn2);

//Return array of tw
//Anonymous function
function isMedian(num1, num2) {
    const arr9 = [...num1, ...num2].sort((a, b) => a - b);
    if (arr9.length % 2 == 0) {
        return (arr9[(arr9.length / 2) - 1] + arr9[(arr9.length / 2)]) / 2;
    }
    return arr9[Math.floor(arr9.length / 2)];
}

const numm1 = [1, 2, 3, 4, 5];
const numm2 = [6, 7, 8, 9, 10];
console.log(isMedian(numm1, numm2));