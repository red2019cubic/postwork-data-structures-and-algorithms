function selectionSort(arr) {
  // type your code here

 
    

  for(let i = arr.length - 1; i > 0; i--){
    let largest = 0;
    for(let j = 1; j <= i; j++){
      if(arr[j] > arr[largest]){
        largest = j;
      }
    }
    swap(arr, largest, i);

      
  }
  return arr;

}

function swap(intArr, i, j){
  if(i==j){
    return;
  }
  let temp = intArr[i];
  intArr[i]=intArr[j];
  intArr[j]=temp;
}
console.log(selectionSort([15, 2, 5,3,5]))
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
