function revrot(str, sz) {
  //if the string is empty or size is less than 0 or size is more than the string length an empty string is returned
  if (str === "" || sz <= 0 || sz > str.length) {
    return "";
  }
  //an empty blocks array is created
  let blocks = [];
  //variable cuts is created to store the value the string divided by the size
  let cuts = Math.floor(str.length/sz);
  let cut = 0;
  // the code will keep on going as long as cut is less than cuts
  while (cut < cuts) {
  //the string is cut into appriate size and stored in the blocks array
    blocks.push(str.slice(cut * sz, sz *(cut +1)));
    cut++;
  }
  //loop through the blocks array
  for (var j = 0; j < blocks.length; j++) {
    //if the value of blocks when its passed through cubeDivision function can be divided by 2 then the blocks is reversed
    if(cubeDivision(blocks[j])) {
      blocks[j] = reverse(blocks[j]);
    } else {
      //else the block is rotated
      blocks[j]= rotate(blocks[j]);
    }
  }
  // the blocks are joined together
  return blocks.join('');
}
//reverse function is created
function reverse(numStr) {
  return numStr.split("").reverse().join("");
}
//rotate function is created
function rotate(numStr) {
  return numStr.slice(1) + numStr[0];
}
//function below tells if the cubes version can be divided by 2 or not so we can reverse it and rotate it
function cubeDivision(numStr) {
  let num = 0;
  for (let i = 0; i < numStr.length; i++) {
    //num has the value of  numStr to the power of 3
    num += Math.pow(numStr[i], 3);
  }
  //we check here if it can be divided by 2 with no remainder
  return num % 2 ===0;
  //true or false returns
}
