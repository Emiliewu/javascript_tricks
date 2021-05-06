**
 * Creates a union (elements in either) from two sorted arrays.
 * 
 * @param {number[]} arr1 a SORTED array of numbers
 * @param {number[]} arr2 a SORTED array of numbers
 * @returns {number[]} a NEW SORTED array with elements from either
 */
function unionSortedArraysDedupe(arr1, arr2) {
  // your code
    let result = [];
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] === arr2[p2]) {
          if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
          } 
          p1++;
          p2++;  
      } else if (arr1[p1] < arr2[p2] ) {
        if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
          } 
          p1++; 
      } else if (arr1[p1] > arr2[p2] ) {
        if ( arr2[p2] !== result[result.length-1]) {
            result.push(arr2[p2]);
          } 
          p2++;  
      }
    }
    while(p1 < arr1.length) {
        if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
          } 
          p1++;
    }
    while(p2 < arr2.length) {
        if ( arr2[p2] !== result[result.length-1]) {
          console.log(result[result.length-1]);
            result.push(arr2[p2]);
          } 
          p2++;  
    }
      return result;
}

console.log(unionSortedArraysDedupe([1, 2, 2, 3, 3, 3, 10, 13], [2, 3, 3, 5, 5, 7, 8]));

// function unionSortedArrays(arr1, arr2) {
//   let i = 0, j = 0,  newArr = [];

//   while(i < arr1.length && j < arr2.length) {
//     if(arr1[i]<arr1[j]){
//       newArr.push(arr1[i]);
//       i += 1;
//     }else if(arr2[j] < arr1[i]){
//       newArr.push(arr2[j]);
//       j += 1;
//     }else {
//       newArr.push(arr1[i]);
//       i += 1;
//       j += 1;
//     }

//     if(i === arr1.length-1 && j < arr2.length){
//       if(arr2[j] != arr1[i]){
//       newArr.push(arr2[j]);
//       }
//       j += 1;
//       console.log(newArr);


//     } else if(i < arr1.length && j === arr2.length-1) {
//       if(arr2[j] != arr1[i]){
//       newArr.push(arr1[i]);
//       }
//       i += 1;
//     }

//   }
//   return newArr;
// }


console.log(unionSortedArrays([1, 2, 2], [2, 3, 3]));
// should log [1, 2, 2, 3, 3]
console.log(unionSortedArrays([1, 2], [3, 4]));
// should log [1, 2, 3, 4]


/**
 * BONUS: ensure that the output array has only unique numbers
 * 
 * @param {number[]} arr1 a SORTED array of numbers
 * @param {number[]} arr2 a SORTED array of numbers
 * @returns {number[]} a NEW SORTED array with elements from either
 */

function unionSortedArraysDedupe(arr1, arr2) {
  
}

console.log(unionSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
// should log [1, 2, 3]


/**
 * Calculates the absolute difference between the sum of two diagonals.
 * 
 * @param {Array<Array<number>>} twoDArray a 2-dimensional array of numbers
 * Note that the outer and inner arrays will all be equal in length.
 */

function diagonalDifference(twoDArray) {

}

Math.abs(5 - 10); // returns 5

console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
// should log 0: (1 + 5 + 9) - (3 + 5 + 7)

function diagonalDifference(arr) {
  var sum1=0;
  var sum2=0;
  var final = 0;
  for (var i=0; i<arr.length; i++) {
      sum1+=arr[i][arr.length-i-1];
  }
  for (i=0; i<arr.length; i++) {
      sum2+=arr[i][i];
      console.log('sum2 is', sum2);
  }
  final = sum1 - sum2;
  return Math.abs(final);
}


function diagonalDifference(twoDArray) {
  // your code here
  console.log("length  "+twoDArray.length);
  let sum1=0;
  let sum2=0;
  for(var i=0;i<twoDArray.length;i++){
      sum1 += twoDArray[i][i];
      sum2 += twoDArray[i][(twoDArray.length-1) - i];
  }
  return (Math.abs(sum1 - sum2));
}
console.log(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]]));