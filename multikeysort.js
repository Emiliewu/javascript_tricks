/**
 * Sorts an array by traversing backwards to find each value's correct position.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 */

function insertionSort(arr) {
  _insertion(arr, 0, arr.length-1);
}

function _insertion(arr, l, r) {
  for (let i=l+1; i <= r; i++) {
    let temp = arr[i];
    while (i > 0 && temp < arr[i-1]) {
      arr[i] = arr[i-1];
      i -= 1;
    }
    arr[i] = temp;
  }
  return arr;
}

console.log(insertionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      const temp = arr[i];
      let j = i - 1;
      while(j >= 0 && temp < arr[j]){
          arr[j+1] = arr[j];
          j--;
      }
      arr[j+1] = temp;
  }
  return arr;
}

let arr = [6,8,9,-2,8,4,5,1,0];
console.log("result: " + (insertionSort(arr)));

/**
 * Sorts an array of objects according to an array of keys.
 * 
 * @param {Object[]} arr an UNSORTED array of objects
 * @param {string[]} keys an array of keys to sort by
 * 
 * Use any of the sorting algos we've covered thus far.
 */

function multiKeySort(arr, keys) {
  for(let j = 0; j < keys.length-1; j++) {
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i].keys[j] > arr[i+1].keys[j]) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      } else if (arr[i].keys[j] === arr[i+1].keys[j] && arr[i].keys[j+1] > arr[i+1].keys[j+1] ) {
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  
  return arr;
}
function multiKeySort(arr, keys) {
  let key = keys[0];
  let key2 = keys[1];
  // for ( let i = 1; i < arr.length; i++) {
  //   let idx = i;
  //       while(idx > 0 &&(arr[idx][key] < arr[idx - 1][key] || (arr[idx][key]===arr[idx-1][key]&&arr[idx][key2] < arr[idx-1][key2])))  {
  //           let temp = arr[idx];
  //           arr[idx] = arr[idx - 1];
  //           arr[idx - 1] = temp;
  //           idx--;
  //       }
  // }
  for ( let i = 1; i < arr.length; i++) {
    let idx = i;
        while(idx > 0 &&arr[idx][key] <= arr[idx - 1][key] )  {
          if(arr[idx][key] === arr[idx-1][key]){
            if(arr[idx][key2] < arr[idx-1][key2]){
              let temp = arr[idx];
              arr[idx] = arr[idx - 1];
              arr[idx - 1] = temp;
              idx--;
            }
          } else {
            let temp = arr[idx];
            arr[idx] = arr[idx - 1];
            arr[idx - 1] = temp;
            idx--;
          }
        }
  }
  return arr;
}

console.log(multiKeySort([
  {
    firstName: 'Lee',
    lastName: 'Babba'
  },
  {
    firstName: 'Lee',
    lastName: 'Abba'
  },
  {
    firstName: 'Adam',
    lastName: 'Smith'
  }
], ['firstName', 'lastName']));

// should log [
//   {
//     firstName: 'Adam',
//     lastName: 'Smith'
//   },
//   {
//     firstName: 'Lee',
//     lastName: 'Abba' },
//   {
//     firstName: 'Lee',
//     lastName: 'Babba'
//   }
// ]