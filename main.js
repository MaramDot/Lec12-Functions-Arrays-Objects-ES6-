// 1. Write a function `average` that accepts two number
//  arguments and returns the average of these numbers.
const average=(num1,num2)=>{
    return ((num1+num2)/2)
}
// 2. Write a function `toThePowerOf` that accepts two number
//  arguments, `base` and `exponent`, and returns the base to
//  the exponent power. (Look for bulit in function)
const toThePowerOf=(base,exponent)=>{
    return Math.pow(base,exponent);
}
// 3. Write a function `oneOrZero`  to return either the 
// number zero or one.
const oneOrZero=(num)=>{
    if(num===0)
        return("Number is Zero");
    else if(num===1)
        return("Number is One");
    else
        return("Number is not zero nor One");
}
// 4. Write a function `incrementOne` that accepts one 
// argument `number` and returns the number incremented 
// by one when executed.
const incrementOne=(number)=>{
    return number+1;
}
// 5. Write a function `addToArray` that accepts two
//  arguments, `array` and `string`, and returns the same 
// array after adding the string element to the end of it.
const names=["Maram","Lama","Leen"];
const addToArray=(array,string)=>{
    array.push(string);
    return array;
}
// 6. Write a function `accessElement` that accepts two arguments,
//  `array` and `index`, and returns the corresponding array
//  element depending on the passed index.
const accessElement=(array,index)=>{
    return array[index];
}
// 7. Write a function `arrayMiddle` that accepts an array and
// returns the middle element of the array. If the array's length
//is even then return the average of both of the middle elements.
const oddArray=[1,2,3,4,5];//mid is 3
const evenArray=[6,7,8,9,10,11];//mid is 8+9/2= 8.5
const arrayMiddle=(array)=>{
    let mid=array.length/2;
    if(array.length%2===0)//even
        return((array[mid]+ array[mid-1])/2);
    else //odd
        return array[Math.floor(mid)];   
}
// 8. Write a function `oddIndexEvenLength` that accepts an array
//  of strings and returns a new array of only the even-length 
// words that are in an odd index.
const oddIndexEvenLength=(array)=>{//names//
    const selectedArray=[];
    for(let i=0;i<array.length;i++)
    {
        if(i%2 !==0)
        {
            if(array[i].length % 2 ===0)
                selectedArray.push(array[i]);
        }
    }
    return selectedArray;
}
// 9. Write a function `convertToString` that accepts an array 
// of letters and returns all the letters combined.
const letters=['M','a','r','a','m'];
const convertToString=(array)=>{
    return array.join("");
}
// 10. Write a function `olderThan` that accepts two objects, 
// `personOne` and `personTwo`, and returns a string that represents 
// who is older than the other.
// olderThan({ name: "Ahmad", age: 14 }, { name: "Arwa", age: 16 }); // => "Arwa is older than Ahmad"  
const olderThan=(personOne,personTwo)=>{
    if(personOne.age> personTwo.age)
        return `name: ${personOne.name}, age: ${personOne.age} => ${personOne.name} is older than ${personTwo.name}`
    else
        return `name: ${personTwo.name}, age: ${personTwo.age} => ${personTwo.name} is older than ${personOne.name}`
}
// 11. Write a function `numberOfKeys` that accepts an object and
//  returns the number of keys present in the object. (look for `Object.keys()`)
//    numberOfKeys({ name: "Arwa", age: 16 }); // => 2
//    numberOfKeys( { math: 90, english: 85, arabic:66 }); // => 3
obj1={name1:"Maram", age1:23, Major:"Computer Engineering"};
obj2={name2:"Lama", age1:18};
const numberOfKeys=(obj)=>{
    let counter=0;
    for (let key in obj) {
        counter++;
    }
    return counter;
}
// 12. Write a function `factorial` that accepts a number 
// argument, and returns the factorial of that number.
const factorial=(number)=>{
    let factor=1;
    for(let i =1; i<=number; i++)
    {
        factor*=i;
    }
    return factor;
}
