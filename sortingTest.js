function randomArrGenerator(min, max) {
  let size, arr = [];
  while(true) {
    size = prompt('Input Array Size:');
    if (!isNaN(+size) && +size > 1 || size === null) {
      break;
    }
    console.log('Input Invalid!');
  }
  if (size === null) {
    return;
  }
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random()*(max-min+1))+min);
  }
  return arr;
}

let arr = randomArrGenerator(0, 10000);
let arr1 = [...arr];
let arr2 = [...arr];
let arr3 = [...arr];
let arr4 = [...arr];
let arr5 = [...arr];
let arr6 = [...arr];



// console.time('insertion');
// insertion(arr);
// console.timeEnd('insertion');

// console.time('merge');
// mergeSort(arr1);
// console.timeEnd('merge');

console.time('merge_optimize');
mergeSort2(arr2);
console.timeEnd('merge_optimize');

// console.time('merge_optimize2');
// mergeSort3(arr3);
// console.timeEnd('merge_optimize2');

console.time('quicksort');
quickSort(arr4);
console.timeEnd('quicksort');

console.time('quicksort-2way');
quickSort2(arr5);
console.timeEnd('quicksort-2way');

