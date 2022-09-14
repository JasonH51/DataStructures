const arr = [55, 234, 123, 12, 12, 2, 3, 124, 3, 2, 1];

function selectionSort(arr) {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

selectionSort(arr);
console.log(arr);
