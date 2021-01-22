let userInput = 4;
const userInputArray = [];

function mrRobogers(userInput) {
  for (let index = 0; index <= userInput; index ++) {
    userInputArray.push(index);  
  }
  const returnString = userInputArray.join(" ");
  console.log(returnString.replace(/3/g, "Won't you be my neighbor?"));
}

