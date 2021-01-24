function robogersInput(number) {
  const userInputArray = [];
  const subZero = "I can't count below zero!"
  if (number >= 0) {
    for (let index = 0; index <= number; index ++) {
      userInputArray.push(index); 
    }
    const userInputString = userInputArray.join(" ");
    let secondString = userInputString.replace(/\S*3\S*/g, "Won't you be my neighbor?");
    let thirdString = secondString.replace(/\S*2\S*/g, "Boop!");
    let fourthString = thirdString.replace(/\S*1\S*/g, "Beep!");

    return fourthString; 
  } else {
    return subZero;
  }
};


$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();

    const userInput = parseInt($("#number").val());
   
    const result = robogersInput(userInput);
    $("#results-string").text(result);
    $("#results").show();
  });
});    

   