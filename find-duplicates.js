// Write a function that finds duplicates in an array

// First iteration
// (arr => {
//   const result = [];
//   for (let i = 0 ; i < arr.length ; i++){
//     const element = arr[i];
//     for(let j = 0; j < arr.length ; j++){
//       const dups = arr[j];
//       if(i !== j && element === dups) result.push(element)
//     }
//   }
//
//   return result;
// })()

// O(n^2);
// (arr => {
//   const result = [];
//   for (let i = 0 ; i < arr.length ; i++){
//     const element = arr[i];
//     for(let j = 0; j < arr.length ; j++){
//       const dups = arr[j];
//       if(i !== j && element === dups) result.push(element)
//     }
//   }
//
//   return result.length > 0;
// })()

// O(n)
(arr => {
  // [1,1,2,3];
  const result = [];
  const buffer = {};
  for ( const v of arr){
    if(!buffer[v]) {
      buffer[v.toString()] = v;
      continue;
    }
    if(buffer[v.toString()] === v) result.push(v);
  }
  console.log(result);
  return result;
})([1,2,'3',1,2,3,4,5,6,4])

/* [1,1,2,3],
  i:0 v:1 :
    result = [];
    buffer = {};
    buffer[1] = undefined;
 */
