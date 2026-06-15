// Arrays (collection of items)
// create array
let marks=[97,45,57,65,23];
console.log(marks);
console.log(marks.length);

let bikes=["tvs","hero","honda"];
console.log(bikes);

//array indeces
console.log(bikes[1]);
console.log(marks[2]);

//accessing array using loop
// for loop
for(let i =0;i<bikes.length;i++){
    console.log(bikes[i]);
}

// for of
for (let mark of marks){
    console.log(mark);
}
// print all by camel case
for (let bike of bikes){
    console.log(bike.toUpperCase());
}


// for a given array with marks of students  [85,94,32,45,65,78], then find the average marks of the students
let score=[85,94,32,45,65,78];
let sum =0;
for(let val of score){
    sum=sum +val;
}
let avg = sum/score.length;
console.log ("average mark: ",avg);

/* for a given array with prices of 5 items [250,300,450,255,321] . all items have 
an offer of 10% off on them . change the array to store final price after applying offer */

let items= [250,300,450,255,321];
for(let i =0;i<items.length;i++){
    let offer = items[i]/10;
    items[i]=items[i] - offer;
    
}
console.log("final price: ",items);


/* Array methods
push(): add to end
pop(): delete from end
toString(): converts arra to string 
cocat(): joins multiple arrays and return the result
unShift(): add element in starting end
shift(): delete from front\
slice(): return small piece of the array
splice(): change the original array(add,remove,replace)

*/
let fruits=["apple","mango","litchi"];
console.log("list of fruits before push: ",fruits);
fruits.push("banana","pineapple");
console.log("list of fruits after push: ",fruits);
fruits.pop();
console.log("list of fruits after pop: ",fruits);

let vegetable=["brinjal","potato","tomato"];
let bucket =fruits .concat(vegetable);
console.log("bucket : ",bucket);
let arr=[1,2,3,4,5,6,7];
console.log("before using splice: ",arr);
arr.splice(2/* starting ind*/ ,0/* delete count */, 101,102/*replacing elements */);
console.log("After using splice: ", arr);