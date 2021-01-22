let userInput = 4;
const returnArray = [];

function mrRobogers(userInput) {
  for (let index = 0; index <= userInput; index ++) {
    returnArray.push(index);  
  }
  const returnString = returnArray.join(" ");
  returnString.replace(/3/g, "help");
  console.log(returnString);
}

