let array1 = [3, 1, 7, 9];
let array2 = [2, 4, 1, 9, 3];

function arrays(array1, array2) {
  const arr = [];
  
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) == false) {
      arr.push(array1[i]);
    }
  }

 
  for (let j = 0; j < array2.length; j++) {
    if (array1.includes(array2[j]) == false) {
      arr.push(array2[j]);
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum+ arr[i];
  }
  return sum;
}

console.log(arrays(array1, array2));

// in the seconde part you just turned the test of includ in ==true :)