const arr = [55, 234, 123, 12, 12, 2, 3, 124, 3, 2, 1];

// best O(n) - for partially sorted / mostly sorted arrays
//average/worst O(n^2)
// insertion sort will look for what position your current value belongs.
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      // move number to first postion
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // within the sorted sub array find the postion to insert value
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          // i = current value to place
          // j = position in sub array to find where i belongs
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        } else if (arr[i] === arr[j - 1]) {
          // if sub array has duplicate values add them next to each other
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(arr);
console.log(arr);
