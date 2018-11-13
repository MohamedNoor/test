function printerError(s) {
    // create a count variable with the intial value 0
    var count = 0;
    //impelement a for loop that loops through the letters in the string
    for(var i = 0; i < s.length; i++) {
      //if the letter that is selected alphabetically further than the letter m thant the count variable increments up by the value of 1
      if (s[i] > "m") {
        count++;
      }
    }
    //the count of the number of letters above m is returned as well as the the length of the string
    return count+"/"+s.length;
}
