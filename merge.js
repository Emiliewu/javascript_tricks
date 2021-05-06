// merge 
// sort the array using merge
function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length-1);
}
function _mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let mid = Math.floor(l + (r - l)/2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid+1, r);
  _merge(arr, l, mid, r);
}

function mergeSort2(arr) {
  _mergeSort2(arr, 0, arr.length-1);
}
function _mergeSort2(arr, l, r) {
  if(r-l <= 15) {
    _insertion(arr, l, r);
    return;
  }
  let mid = Math.floor(l + (r - l)/2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid+1, r);
  _merge(arr, l, mid, r);
}

// for a nearly sorted array, check the value before merge
function mergeSort3(arr) {
  _mergeSort3(arr, 0, arr.length-1);
}
function _mergeSort3(arr, l, r) {
  if (l >= r) {
    return;
  }
  let mid = Math.floor(l + (r - l)/2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid+1, r);
  if(arr[mid] > arr[mid+1]) {
    _merge(arr, l, mid, r);
  }
}


function _merge(arr, l, mid, r) {
  const aux = arr.slice(l, r+1);
  let i = l, j = mid + 1;
  for(let k = l; k <= r; k++) {
    if(i > mid) {
      arr[k] = aux[j - l];
      j += 1;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i += 1;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i += 1;
    } else {
      arr[k] = aux[j - l];
      j += 1;
    }
  }
}

