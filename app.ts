let number1 = 5;
let number2 = 2.8
let printResult = true;
let result = add(number1,number2,printResult);
console.log(result);
function add(n1:number , n2:number ,showResult:boolean){
    if(showResult){
        console.log(n1+n2);
    }

}


// Object Types
const Person = {
    name : "shikha",
    age:30
}
console.log(Person);
console.log(Person.name );

//Array
const Person1:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string]
}= {
    name:'Shikha',
    age:30,
    hobbies:['sports','cooking'],
    role:[2,'Developer']

}

Person1.role.push(1,'FHG');
for(const hobby of Person1.role){
    console.log(hobby);
 //   console.log(Person1);
}

//enum
enum Role {ADMIN,READ_ONLY,AUTHOR};
const person ={
    name:'shikha',
    age:30,
    hobbies : ['sports','cooking'],
    role:Role.ADMIN
}
if(person.role === Role.ADMIN){
    console.log('abc');
}

//Union Types

function combine(input1:number|string,input2:number|string,resultConversion:string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' ){
        result = input1 +input2;
    }
    else{
        result = input1.toString()+input2.toString();
    }
    if(resultConversion === 'as-text'){
        return result.toString();
    }
    else{
        return +result;
    }
    return result;

}
console.log(combine('30','20','as-text'));

//object types
type user = {name:string;age:number};
const UI :user = {
    name:'Shikha',
    age:30
}
//Function Return Types
function addNumber(n1:number,n2:number){
    return n1 + n2;
}
console.log(addNumber(2,3));

//Function Types
// let combineValues : Function;
let combineValues:(a:number,b:number) =>number;
combineValues = addNumber;
console.log(combineValues(2,6));

// Function Types and callbacks
function addAndHandle(n1:number,n2:number,cb:(num:number)=> void){
const result = n1+n2;
cb(result)
}

addAndHandle(10,20,(result) => {
    console.log(result);
})