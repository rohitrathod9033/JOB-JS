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

         //OPRATOR :
UNICODE --> har number ko ak number assign hota haiii A.B,C == 65,66,67
'a'>'A' = true
let a = 'a';
let b  = 'A';

console.log(a>b);
console.log(a<b);

      //OPRATOR PRECEDENCE
(),  **,  * / %,  + -



         //Statement

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

let string = "HELLO";
let array = string.split("").reverse().join()
console.log(array)

let Student = {
    name1 : "Rohit",
    name2 : "Rathod",
    age : 22,
    course : "MCA"
}
let fullName = Student.name1 +" " + Student.name2;
console.log(fullName);

let start= ['january', 'july', 'march', 'august'];

         //Object function constructor
function marks_list(Maths, English, Science, Geo, Polity) {
    this.Maths = Maths;
    this.English = English;
    this.Science = Science;
    this.Geo = Geo;
    this.Polity = Polity;
}

let Rohit = new marks_list(12,12,12,12,12)
let Vishal = new marks_list(12,12,12,12,12)
let RohiRahult = new marks_list(12,12,12,12,12)

console.log(RohiRahult)
console.log(Rohit)
console.log(Vishal)



        // String
let a = "ROhit"

        // String constructor object
let b = new String("ROhit");

console.log(a)
console.log(b)
console.log(typeof(a))
console.log(typeof(b))
console.log(a==b)
console.log(a===b)




let car = ["Toyota", "Fotuner", "BMW", "Audi"];
let cars = new Array("Toyota", "Fotuner", "BMW", "Audi");

console.log(car)
console.log(cars)


             // Array Looping
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("___________This is For Loop")
for(let i=0; i<=fruits.length; i++ ){
    console.log(fruits[i])
}

console.log("___________This is For-Of Loop")
for(fruit of fruits) {
    console.log(fruit)
}



           //Looping Diffrence...

let names = ["Rohit", "Aman", "Priya", "Sneha", "Kunal", "Meera"];

for(namee of names) {
    console.log(namee)
}
console.log("_____________________________________________")

for(let i=0; i<=names.length; i++) {
    console.log(names[i])
}
console.log("_____________________________________________")

names.forEach(function(index, name) {
    console.log(name, index)
})
console.log("_____________________________________________")

for(nam in names) {
    console.log(nam, names[nam])
}



      // Find()
let number = [12,34,23,56,324,12,56,67,34,32,12,34,54,67,78,54,34,32];

let found = number.find(function(ele){
    return ele > 50;
})

console.log(found)


     // Map && Filter

let num = [1,2,3,4,5,6,7,8,9,10];

let even = num.filter(function(ele) {
    return ele % 2== 0;
})
console.log(even)

let double = even.map(function(num) {
    return num*2
})

console.log(double)


*/

let sum = ( (a, b) => {
    return a+b;
})

console.log(sum(12,6))