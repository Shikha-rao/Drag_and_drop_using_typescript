"use strict";
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
}
// Object Types
var Person = {
    name: "shikha",
    age: 30
};
console.log(Person);
console.log(Person.name);
//Array
var Person1 = {
    name: 'Shikha',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'Developer']
};
Person1.role.push(1, 'FHG');
for (var _i = 0, _a = Person1.role; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    //   console.log(Person1);
}
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'shikha',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('abc');
}
//Union Types
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-text') {
        return result.toString();
    }
    else {
        return +result;
    }
    return result;
}
console.log(combine('30', '20', 'as-text'));
var UI = {
    name: 'Shikha',
    age: 30
};
//Function Return Types
function addNumber(n1, n2) {
    return n1 + n2;
}
console.log(addNumber(2, 3));
//Function Types
// let combineValues : Function;
var combineValues;
combineValues = addNumber;
console.log(combineValues(2, 6));
// Function Types and callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
