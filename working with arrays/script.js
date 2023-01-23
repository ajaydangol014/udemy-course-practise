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