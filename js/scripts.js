let userInput = 15;
let userInputArray = [];
let stringInput = [];


function mrRobogers(userInput) {
 
  for (let index = 0; index <= userInput; index ++) {
    userInputArray.push(index);  
  }
  userInputArray.join().split(",");
  for (let index = 0; index < userInputArray.length - 1; index ++) {
  if (userInputArray.includes(3)) {
    userInputArray.pop();
    userInputArray.push("Won't you be my neighbor?");   
  }
  } 
  
};


/* function createString(array) {
  array.join().split(",");
  for (let index = 0; index < array.length - 1; index ++) {
    if (array.includes(element)) {
    array.pop();
    array.push("");   
    } 
   } */




/* function mrRobogers(userInput) {
 
  for (let index = 0; index <= userInput; index ++) {
    userInputArray.push(index);  
    if (userInputArray.includes(3)) {
    userInputArray.pop();
    userInputArray.push("Won't you be my neighbor?");    
    } 
  if (userInputArray.includes(2)) {
    userInputArray.pop();
    userInputArray.push("Boop!");    
    }
  }
}; */ 
