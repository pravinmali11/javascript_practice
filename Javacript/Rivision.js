let marks=[85,88,90,87,88];

let sum=0;

for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(`Avg marks of the class=${avg}`);

let City=["Satara","Pune","Mumbai"];
//City.push("Karad");
//City.unshift("Pune");
//City.pop(City);
City.splice(City);
console.log(City);

let b = ["HTML", "CSS", "JS"];

// Accessing First Array Elements
let fst = b[0];

console.log("First Item: ", fst);

//Creating Array
let a=[10,20,30,40];
console.log(a);


//Create Array constructor using array constructor method.
let cr=new Array(10,20,30,40,50);
console.log(a);

//Accessing the array element
let c=[1,2,3,4,5];
console.log(c[0]);


// Accessing First Array Elements
let d = ["HTML", "CSS", "JS"];
let first = d[0];
console.log("First item:",first);

// Accessing Last Array Elements
let f = ["HTML", "CSS", "JS"];
let last=f[f.length -1];
console.log("Last item:",last);
