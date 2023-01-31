//filter method

  const movementss= [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

  const filterDeposits= movementss.filter(function(mov){
    return mov>0;
  })
console.log(filterDeposits);
const withdrawal= movementss.filter(mov=>mov<0);
console.log(withdrawal);

/*
--------reduce method-------
- no return value from the previous callback
- array elemnt 0 is used as initial value and the iteration starts from array element 1
- If an initial value is given, this is used, and the iteration starts from array element 0.*/

let exampleReduce = [2, 3, 4, 5];
const reduces = exampleReduce.reduce(
  function(accum, currentValue){
    console.log(accum);
    return accum + currentValue
  }, 1
);

console.log(reduces);


/*
----------find() method-------------
- it calls a provided callbackFn once for each element in an array in ascending index order, until it returns truthy value.
- After determining the value, it stops iterating through the array.
- if it never returns truthy value then, find() methods returns undefined.
*/

const exampleFind=[1,5,6,70,89,101];
let finds= exampleFind.find(function(element,index,array){
  return element>100;
})

console.log(finds);

/*
----findIndex() method ---------------
-returns the index of the first element in an array that satisfies the provided testing function
-If no elements satisfy the testing function, -1 is returned.
*/
const exampleFindIndex = [1, 20, 30, 101,150,200,6];
let findsIndex = exampleFindIndex.findIndex(function (elem, index) {
  console.log(index);
  return elem >160;
});

console.log(findsIndex);

/*
-----some() method--------

 - tests whether at least one element in the array passes the test implemented by the provided function. 
 - It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
 - It doesn't modify the array.
*/

const exSome=[4,5,6,9,100,106,151];
let someFunc= exSome.some((elem)=>elem%500==0);
console.log(someFunc);

/*
-----every() method---------
 - tests whether all elements in the array pass the test implemented by the provided function. 
 - It returns a Boolean value.
*/
const exEvery = [50,60,90,100,160,190,200];
let everyFunc=exEvery.every((elem)=>elem>100);
console.log(everyFunc);


/*
------ flat() method----------
creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/
const exFlatArr=[1,2,3,['aja',5,6]];
console.log(exFlatArr.flat());

const exFlat= [10,20,30,[100,[500,600,700,[900,1100]]]];
console.log(exFlat.flat(3));


/*
--------flatMap() method---------
-returns a new array with each element being the result of the callback function and flattened by a depth of 1.
- It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient
 than calling those two methods separately.
*/

const arr1 = [1, 2, [3], [4, 5,[7,8,9]], 6, []];
const flattened = arr1.flatMap(num => num);
console.log(flattened); //output:  Array [1, 2, 3, 4, 5, Array [7, 8, 9], 6]

/*
---------sort() method------------
- sorts the elements of an array in place and returns the reference to the same array, now sorted. 
- The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values.
*/

const exSort= [5,9,4,3,-1,8,-200];
const exSortAlpha=['Sabina','Julie','Anne','Racheal','Babita'];
console.log(exSortAlpha.sort());

/*Async*/