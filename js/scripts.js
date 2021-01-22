let userInput = 13;
const stringInput = userInput.toString();
const userInputArray = [];

function mrRobogers(userInput) {
 
  for (let index = 0; index <= userInput; index ++) {
    userInputArray.push(index);  
  if (userInputArray.includes(3)) {
    userInputArray.pop();
    userInputArray.push("Won't you be my neighbor?");    
    }
  }
};

