function insertion(arr) {
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
