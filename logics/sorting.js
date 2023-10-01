

// Loop inside loop
for (let i = 0; i < 10; i++) {
  console.log('##' + i + '##');
  for (let j = 0; j < 10; j++) {
    console.log(j); // how many times this statement will be executed --> 100 times
  }
}

// Swapping Technique
const arr = [99, 78, 45, 66];

// do not use one more array simple interchange the first & last value of above array


// ** Wrong Way **
// arr[0] = arr[3];
// arr[3] = arr[0];


// using temp
const temp = arr[0];

arr[0] = arr[3];

arr[3] = temp;



// Sorting
// I/P: 99 78 45 66 73 89 21 15

// O/P: 15 21 45 66 73 78 89 99


const array = [99, 78, 45, 66, 73, 89, 21, 15];


for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) { // compare jth & j+1th element 
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);