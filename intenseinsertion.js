/**
 * Creates an intersection (elements in both) of two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArrays(arr1, arr2) {
  let i = 0, j = 0, newArr = [];
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] === arr2[j]) {
      newArr.push(arr1[i]);
      i += 1;
      j += 1;
    } else if(arr1[i] < arr2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return newArr;
}

console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));
// should log [2, 2]


/**
 * BONUS: ensure that each element in the returned array is unique
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArraysDedupe(arr1, arr2) {
  let i = 0, j = 0, newArr = [];
  while(i < arr1.length || j < arr2.length) {
    if(arr1[i] === arr2[j]) {
      if(newArr.length < 1 || arr1[i] !== newArr[newArr.length-1]){
        newArr.push(arr1[i]);
      }
      i += 1;
      j += 1;
    } else if(arr1[i] < arr2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return newArr;
}

console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
// should log [2]