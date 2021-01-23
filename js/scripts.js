let userInputArray = [];

function robogersInput(number) {
  for (let index = 0; index <= number; index ++) {
    userInputArray.push(index);   
  }
  return userInputArray;
};


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
   
    const result = mrRobogers(userInput);

    $("#results-array").text(result);
    $("#results").show();
  });
});    

