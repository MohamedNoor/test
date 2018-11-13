function repeatStr (n, s) {
  //if the number n is greater than 0 the code below get excuted
  if (n > 0){
  //the string below than get repeated by n times
    return s.repeat(n);
  } else {
  //if n is less than 0 then an empty string is returned
    return '';
  }
}

// to activate the function call repeatStr(n, s) in the console log with n being the number and s being the string you want to repeat




function revrot(str, sz) {
  //if the string is empty or size is less than 0 or size is more than the string length an empty string is returned
  if (str === "" || sz <= 0 || sz > str.length) {
    return "";
  }
  //an empty chunks array is created
  let chunks = [];
  //variable cuts is created to store the value the string divided by the size
  let cuts = Math.floor(str.length/sz);
  let cut = 0;
  // the code will keep on going as long as cut is less than cuts
  while (cut < cuts) {
  //the string is cut into appriate size and stored in the chunk array
    chunks.push(str.slice(cut * sz, sz *(cut +1)));
    cut++;
  }
  //loop through the chunk array
  for (var j = 0; j < chunks.length; j++) {
    //if the value of chunks when its passed through cubeDivTwo function can be divided by 2 then the chunks is reversed
    if(cubeDivTwo(chunks[j])) {
      chunks[j] = reverse(chunks[j]);
    } else {
      //else the chunk is rotated
      chunks[j]= rotate(chunks[j]);
    }
  }
  // the chunks are joined together
  return chunks.join('');
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
function cubeDivTwo(numStr) {
  let num = 0;
  for (let i = 0; i < numStr.length; i++) {
    //num has the value of  numStr to the power of 3
    num += Math.pow(numStr[i], 3);
  }
  //we check here if it can be divided by 2 with no remainder
  return num % 2 ===0;
}
