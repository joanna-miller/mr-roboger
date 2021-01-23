function robogersInput(number) {
  const userInputArray = [];
  for (let index = 0; index <= number; index ++) {
    userInputArray.push(index); 
  }
  const userInputString = userInputArray.toString();
    let secondString = userInputString.replace(/1/g, "beep!");
    let thirdString = secondString.replace(/2/g, "boop!");
    return thirdString;
    
};

function convertToRobot(string) {
  string.replace(/1/g, "beep!"); 
  string.replace(/2/g, "boop!");
  console.log(string);
}  




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



$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();

    const userInput = parseInt($("#number").val());
   
    const result = robogersInput(userInput);

    $("#results-array").text(result);
    $("#results").show();
  });
});    

