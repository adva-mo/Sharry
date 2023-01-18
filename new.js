const find2lowest = (arr) => {
  let first = arr[0];
  let second = arr[1];

  let smallest;
  if (second < first) {
    smallest = second;
    second = first;
  } else {
    smallest = first;
  }

  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] === smallest) {
    //   i++;
    // }
    if (arr[i] < smallest) {
      second = smallest;
      smallest = arr[i];
    } else if (arr[i] < second) {
      second = arr[i];
    }

    // smallest = arr[i];
  }
  return [smallest, second];
};
console.log(find2lowest([12, 13, 1, 10, 34]));

console.log(Number.MAX_VALUE);
