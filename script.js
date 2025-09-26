/**
 * 

Q = 1

function swap(a, b) {
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a, b)
    }
    console.log(swap(2,4))



Q = 2

function maxNum(...num) {
    return Math.max(...num)
}

console.log(maxNum(12,34,54,23))



Q = 3;

for(let i=1; i<=5; i++) {
    console.log("*".repeat(i))
    }
    
    
    
    
Q = 12

function randomNum(num) {
    console.log(Math.ceil(Math.random() * {num}))
}




Q = 13 PrimeNumber






Q = 14

function speedSum(...number) {
  return number.reduce((index, el) => {
  return index + el;
  });
}
console.log(speedSum(12,12,12,12))





Q = 15
// Array
function speedSum(...number) {
  return number.reduce((index, el) => {
  return index + el;
  });
}
console.log(speedSum(...[12,12,12,12]))





//  Q = 17 

function generateArrayFromRange(start, end) {
    for(let i=start; i<=end; i++) {
        console.log(i)
    }
}
console.log(generateArrayFromRange(2,10))





Q-18
function founnddd(arrayToSearch, elementToSearch) {
    return arrayToSearch.some( (index) => {
        return index === elementToSearch;
    })
}

let array = [1,2,4,5,6]

console.log(founnddd(array, 4))



Q = 19 Exclude

function exxclude(arrayToExclude, remove) {
    
     return arrayToExclude.filter( (ele) => {
        return ele != remove;
    })
}

let myarr = [1,2,3,4,5]
console.log(exxclude(myarr, 5))


Q = 20;

function countSearchOccurances(array, value) {
    let count = 0;
    for(ele of array) {
        if(ele == value) {
            count++
        }
    }
    return count;
}


let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];
console.log(countSearchOccurances(numbers, 23))




Q = 21  

function getLspeedestNumber(array) {  
    return array.reduce( (index, value) => {
        return (index > value) ? index : value;
    });
}

let array = [21, 25, 22, 25, 30, 25, 30];
console.log(getLspeedestNumber(array))





Q = 22  // 2019 ranking student desceding

let studentsArray = [
  { name: 'Suraj', year: 2019, ranking: 4 },
  { name: 'Amit', year: 2019, ranking: 5 },
  { name: 'Akash', year: 2018, ranking: 4 },
  { name: 'Dinanath', year: 2019, ranking: 7 },
  { name: 'Sagar', year: 2017, ranking: 3 },
]


let name = studentsArray.filter( (ele) => {
    if(ele.year == 2019 && ele.ranking<=5) {
        console.log(ele.name)
    }
})





Q = 23

let Students = {
  name: 'Dinanath',
  age: 35,
  rank: 5,
  country: 'India',
}

let Address = {
  street: 'Sir DJ Road',
  city: 'Mumbai',
  pinCode: 401209,
  state: 'MH',
  country: 'India',
}


function ObjDetails(object) {
    return Object.entries(object)
}
console.log(ObjDetails(Address))







Q = 24

Object Creation - Factory Function - letructor Fuction




    
Q = 25

function Student(name, age, rank, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.rank = rank;
}

let studet1 = new Student("Mayur", 22, "AA", "IND")
let studet2 = new Student("Rahul", 27, "BB", "IND")
console.log(studet1, studet2)

let student3;
student3 = studet2;
console.log(studet1 == studet2)
console.log(studet2 == student3)




Q = 3

function isLandscape(width, height) {
    return width > height ? true : false;
}

console.log(isLandscape(800, 600))
console.log(isLandscape(600, 800))
console.log(isLandscape(1024, 768))



Q = 4    

function isfizzBuzz(speed) {
    if(isNaN(speed)) {
        return ("'Nan - Not a Number! Please Input Number'")
    } else if(speed % 3 == 0 && speed % 5 == 0) {
        return "FizzBuzz"
    } else if(speed % 3 == 0) {
        return "Fizz"
    } else if(speed % 5 == 0) {
        return "Buzz"
    } else if(speed % 3 != 0 && speed % 5 != 0) {
        return ("Some odd number entered:" + speed)
    }
}

console.log(isfizzBuzz("one"))
console.log(isfizzBuzz(true))
console.log(isfizzBuzz(9))
console.log(isfizzBuzz(30))
console.log(isfizzBuzz(11))





Q = 5

function speedTest(speed) {
    let limit = 70;
    let point = 5;

    if (speed <= limit) {
        return "Good Safe Driving!";
    } else {
        let penaltyPoint = Math.floor((speed - limit) / point);
        if (penaltyPoint < 10) {
            return "Speed Limit Crossed by Penalty Point" + penaltyPoint;
        } else {
            return "License Suspended!";
        }
    }
}

console.log(speedTest(40));
console.log(speedTest(70));
console.log(speedTest(75));
console.log(speedTest(99));
console.log(speedTest(120));




Q = 6
function checkEvenOdd(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i, "EVEN");
    } else {
      console.log(i, "ODD");
    }
  }
}
console.log(checkEvenOdd(10))



Q = 7
const array = [0, 1, "", "Hello", null, undefined, [], {}, NaN, true, false];

function countvalue(mixedArray) {
    let count = mixedArray.filter(Boolean).length;
    return `Truthy values is ${count}`;
}
console.log(countvalue(array))




Q = 8
let randomObj = {
  name: "Rohit",
  age: 22,
  city: "Mumbai",
};

function keyvalue(obj) {
  let keyvalue= Object.entries(obj);

  return keyvalue.filter( ([key, value]) => {
    return typeof(value) === 'string'
  })
}

console.log(keyvalue(randomObj));



Q = 9

function sumOfMultipleValue(number) {
    let sum = 0;
for (let i = 1; i <= number; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i
    console.log(sum)
  }
}
}


console.log(sumOfMultipleValue(10))


**/

/**
 Link ---- 2


Q 1 = Find the smallest number in an array

 let arr = [30, 45, 60, 7];
 
  function findSmallest(n) {
     return Math.min(...n)
  }
  
  console.log(findSmallest(arr))


  Q2 = string sort

  let string = "HELLO";
  let array = string.split("");
  console.log(array.sort())



  Q = 3

function findFactorial(number) {
    let mul = 1;
    for(let i=1; i<=number; i++) {
        mul = mul * i;
        console.log(mul)
    }
}
console.log(findFactorial(5))  



Q = 4

Odd or Even

Q = 5 

Eliminate ODD Number

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sorted = array.filter( (ele) => {
    return ele % 2 == 0;
})
console.log(sorted)




Q = 6

let array = ['text', 3, 7, 'github', 13, 'dev']

function number(index) {
    return index.filter( (ele) => {
        return !isNaN(ele)
    })
}
console.log(number(array))





Q = 7


function sumNum(number) {
    let sum = 0;
    for(let i=1; i<=number; i++) {
        sum = sum + i;
        console.log(sum)
    }
}
console.log(sumNum(10))




Q = 8
let array = [7, 13, 3, 77, 100]

function all(number) {
    let max = Math.max(...number)
    let min = Math.min(...number)

    console.log(`Given Array Max Number is ${max}`)
    console.log(`Given Array Min Number is ${min}`)
    console.log(`Given Array Length is ${number.length}`)

    let final = number.reduce( (index, ele) => {
        return index + ele;
    })

    console.log(`Avarage of All Element is ${final/number.length}`)
}

console.log(all(array))



  
Q = 9 Absolute Sum

function absSum(num) {
  let possitive = num.map((ele) => {
    return Math.abs(ele);
  });

  return possitive.reduce( (a, b) => (a + b))
}

console.log(absSum([-1, -3, -5, -4, -10, 0]));




Q = 10 

Triangle


function triangle(number) {
    for(let i=1; i<=number; i++) {
        console.log("#".repeat(i))
    }
}
console.log(triangle(5))



Q = 11

Word Count :

let string = "Hello world! This is ChatGPT.";

function countWords(str) {
    return str.split(" ").length;
}
console.log(countWords(string))




Q = 12

MultiplyByLength : 

let array = [4,1,1];
function MultiplyByLength(arr) {
    return arr.map((ele) => {
        return ele*(arr.length)
    })
}
console.log(MultiplyByLength(array))





Q = 13

function endWith(str1, str2) {
    return (str1[str1.length-1] == str2[0]) ? true : false
}

let string1 = "Hello";
let string2 = "oggy"
console.log(endWith(string1, string2))



Q = 14

let string = "Hello"
function doubleChar(str) {
    return str.split("").map( (ele) => {
        return (ele.repeat(2))
    })
}
console.log(doubleChar(string).toString())  




Q = 15

let array = [10, 20, 30, 40];

function findIndex(arr, idx) {
    return arr.indexOf(idx) 
}

console.log(findIndex(array, 40))




 **/

/*
 Link ---- 3

Q = 1

let array = new Array(5);
let filll = array.fill(5, 0,5)
console.log(filll)



Q = 2

let array = [1,2,3,4,5];

let reverse = array.reverse();
console.log(reverse)



Q = 3

let array = [0, 1, false, 2, undefined, '', 3, null];
let Truthy = array.filter(Boolean);
console.log(Truthy)





Q = 4;

// newMap

let array = [['a', 1], ['b', 2]]

let myArr = Object.fromEntries(array)
console.log(myArr)




Q = 6

let array = [1, 2, 3, 1, 2]
function removeDuplicates(arr) {
    let newArr = new Set(arr)
    console.log(newArr)
}
console.log(removeDuplicates(array))





Q = 7

let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]

function arrayMatch(ar1, ar2) {
    return ar1.length === ar2.length && ar1.every( (value, index) => {
        return value === ar2[index]
    })
}
console.log(arrayMatch(arr1, arr2))




Q = 8

let array = [1, 2, [3, 4, [5]]];
console.log(array.flat(3))




Q = 9

Intersection














2.............................................

Object

function isObject(ele) {
    return typeof ele === "object" && ele !== null && !Array.isArray(ele)
}
console.log(isObject([1, 2, 3]))
console.log(isObject(null))
console.log(isObject({ a: 1 }))


Q = 2

let obj = ({ a: 1, b: 2 });
let array = Object.entries(obj)
console.log(array)




Q = 3 ************

let object = {
  a: 1,
  b: 2,
};

function without(obj, ...value) {
    let pair = Object.entries(obj);
    let filterd = pair.filter( ([key]) => {
        return !value.includes(key)
    } )
    return Object.fromEntries(filterd)
}
console.log(without( { a: 1, b: 2, c: 3 }, 'b', 'c'))





Q = 4
function isEmpty(obj) {
    let values = Object.values(obj);

    return values.every( (value) => {
        return value == null && value == "" && value == undefined;
    })
}

let obj1 = {};
let obj2 = { a: 1 }
console.log(isEmpty(obj1))
console.log(isEmpty(obj2))





Q = 5




*/




