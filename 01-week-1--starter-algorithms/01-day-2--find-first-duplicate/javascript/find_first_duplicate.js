function findFirstDuplicate(arr) {
  // type your code here
  console.log(typeof arr.length);
  if(arr.length === Number(0)|| arr.length === 1){
    return -1;
  }
  for(let i = 0; i < arr.length; i++){
   
  
      if(arr[i] == arr[i + 1]){
        return arr[i];
      }
    
  }
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
