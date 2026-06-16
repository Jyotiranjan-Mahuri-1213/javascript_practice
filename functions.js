//functions 

/*
function definition 
...................

function functionName(){
// function body
}

function call
.............

functionName();
*/

function myFunction(msg)// parameter
{
    console.log("jyotiranjan ");
    console.log("Learning js");
    console.log(msg);
}
myFunction("mca");  // argument

// sum of 2 number 

function sum(x,y){
    console.log(x+y);
}
sum(1,4);

// Arrow function
/*  const functionName=(parameter1, parameter 2)=>{
    body of function
}*/

const arrowSum=(x,y)=>{ 
    console.log(x*y);
};


/* Q: Create a function using the function keyword
that takes a string as an argument and return the number of vowels in the string */

function countVowels(str){
    let count =0;
for(let char of str){
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
        count ++;
    }
}
console.log("total vowels in the string: ",count);
}
countVowels("bhubaneswar");

// q: For a given array of numbers ,print the square of each value using the forEach loop

let arr=[2,,4,5,6,5];
arr.forEach((val)=>{
console.log(val*val);
});

// map()
/* creates a new array with the results of some operation. 
the value its callback returns are used to form new array
*/

// we are given array of marks of students . filter out the marks of students that scored 90
let marks=[98,45,78,95,96,42];
let highest = marks.filter((val)=>{
return val>90;
});
console.log(highest);

/* Take a number n as input from user , create an array of numbers from 1 to n
 use the reduce method to calculate sum of all numbers in the array
 use the reduce method to calculate product of all numbers in an array */

let n = prompt("enter a number: ")
let num=[];
for (let i =1;i<=n;i++){
    num[i-1]=i;
}
console.log(num);

let add=num.reduce((prev,current)=>{
    return prev+current;
});
console.log(add);

let fact = num.reduce((prev,current)=>{
 return prev*current;
});
console.log("factorial: ", fact);