/*    VARIABLE
let a = 12;
let b  = 12;
console.log(a + b)

    TYPE OF
let a = false;
console.log(typeof(a));

    NAN
let a = 0/0;
console.log(a);

         OPRATOR : 
UNICODE --> har number ko ak number assign hota haiii A.B,C == 65,66,67
'a'>'A' = true
let a = 'a';
let b  = 'A';

console.log(a>b);
console.log(a<b);

     OPRATOR PRECEDENCE
(),  **,  * / %,  + -



     Statement
     
let string = prompt("Enter String Here");

if(string[0]==='a' && string.length>3) {
    console.log("Good String")
} else {
    console.log("Bad String")
}


String Method

1. trim
2. toUpper, toLowwer
3.indexOf
let string = "Rohit Rathod"
console.log(string.indexOf(" "))

4.slice
let string = "Im Rohit Rathod";
console.log(string.slice(2,6))        [2,5]

5.repeat
console.log(string.repeat(5))


*/

// let Student = {
//     name1 : "Rohit",
//     name2 : "Rathod",
//     age : 22,
//     course : "MCA"
// }
// let fullName = Student.name1 +" " + Student.name2;
// console.log(fullName);

// let start= ['january', 'july', 'march', 'august'];

let num = [23, 78, 12, 45, 99, 6, 54, 32, 11, 70]
console.log(num.sort())
console.log(num.sort().reverse())
