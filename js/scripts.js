let userInput = 5;
let userInputArray = [];

function mrRobogers(userInput) {
 
  for (let index = 0; index <= userInput; index ++) {
    userInputArray.push(index);  
    if (userInputArray.includes(3)) {
      userInputArray.pop();
      userInputArray.push("Won't you be my neighbor?");  
    } else if 
      (userInputArray.includes(2)) {
        userInputArray.pop();
        userInputArray.push("Boop!");  
    } else if 
      (userInputArray.includes(1)) {
        userInputArray.pop();
        userInputArray.push("Beep!"); 
    }
  } 
};
