//Arithmatic operator
let a=5;
let b=2;
console.log("a= ",a, "b= ",b );
console.log("a+b= ",a+b);
console.log("a-b= ",a-b);
console.log("a*b= "+a*b);
console.log("a/b= "+a/b);
console.log("a%b= "+a%b);
console.log("a**b= "+a**b);

//increment & decrement (unary operator)
 a=5;
 b=2;
console.log("a= ",a, "b= ",b );
a--;
b++;
a--;
a++;
console.log("a= ",a, "b= ",b );

//Assignment operator
a+=2;//a=a+2
b-=1;//b=b-1
a**=3;//a=a**3
console.log("a= ",a, "b= ",b );

//comparision operator
let c="5"; //string
console.log("a==b: "+ a==b );
console.log("a!=b: "+ a!=b );
console.log("a==c: "+ a==c ); //automatic converted to number n compared
console.log("a===c: "+ a===b );//=== compares both value n data type

// logical operator(&&-(logical AND),||-(logical OR), !)
let x=7;
let y=9;
let con1= x<y;
let con2= x==4;
console.log("condition 1 && condition 2: ", con1 && con2 );
console.log("condition 1 || condition 2: ", con1 || con2 );


//conditional statement(if)
let age =20;
if(age>18){
    console.log("you can vote.");
}

// example(if--else)

let mode ="dark";
let color;
if(color=="dark"){
    console.log("black")
}
else{
    console.log("color : white");
}

//odd even

let num=10;
if(num%2==0){
    console.log("it is even.");
}
else{
    console.log("odd");
}

//else-if

 mode ="dark";
 color;
if(color=="dark"){
    console.log("black")
}
else if (mode =="red"){
    console.log("color : red");
}
else{
    console.log("color : white");
}

// ternary operator 
let val=24;
console.log(val>=18? "adult": "not adult");

// take value from user by prompt and check it is a multiple of 5 or not

let number= prompt("enter a number");
if(number%5==0){
    console.log("it is a multiple of 5");
}
else{
     console.log("it is not multiple of 5");
}

//grade determine

let mark= prompt("enter the marks(1-100): ");
let grade;
if(mark<=100 && mark>=80){
    grade ="A";

}
else if(mark<80 && mark>=60){
    grade="B";
}
else if(mark<60 && mark>40){
    grade ="C";

}
else{
grade="fail";
}
console.log(grade);