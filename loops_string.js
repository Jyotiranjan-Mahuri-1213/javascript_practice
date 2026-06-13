//loop
// -> for loop

for (let i=1;i<=5;i++){
    console.log("jyotiranjan")
}

// calculate sum of 1 to n

let sum=0;
let num=prompt("enter the number you want to find sum: ");
for(let i=1;i<=num;i++){
    sum=sum+i;
}
console.log(sum);

// while loop
let i=1
while(i<=num){
    console.log("cutm");
    i++;
}

//do-while loop


do{
    console.log("bbsr");
    i++;
}
while(i<=num);

//for -of

let str="bbsr";
 for(let val of str){
    console.log (val);
 }

 // print all even 0 to 100

 for(let number=0;number<=100;number++){
    if(number%2==0){
        console.log(number);
    }
 }

 // number game

 let x=20;
let value=prompt("enter the number you want to guess: ");
while(x!=value){
   value= prompt("you entered wrong number , enter again: ");
}
console.log("!!!!!!congrats!!!!!")

//STRINGS 
//create string 
 str="jyoti";


 // template literals (embedded expression in strings)
let specialString=`this is a template literals`;
console.log(specialString);
// ex: 
 let obj={
    item:"pen",
    price: 10,
};
// by print statement
console.log("the cost of ",obj.item ,"is",obj.price);
// by template literals 
console.log(`the price of ${obj.item} is ${obj.price} rupees.`);

// string length
//console.log(str.length());

//accessing individual index
console.log(str[0]);

//string methods(str.toUpperCase(), str.toLowercase(), str.trim())
let newStr = str.toUpperCase(); // (converts the string into uppercase)
console.log(newStr);

//slice(start,end) method 
let str1="bhubaneswar";
console.log(str1.slice(2,5));