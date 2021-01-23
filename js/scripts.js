function robogersInput(number) {
  const userInputArray = [];
  for (let index = 0; index <= number; index ++) {
    userInputArray.push(index); 
  }
  const userInputString = userInputArray.join(" ");
    let secondString = userInputString.replace(/\S*3\S*/g, "Won't you be my neighbor?");
    let thirdString = secondString.replace(/\S*2\S*/g, "Boop!");
    
    return thirdString;
    
};

function convertToRobot(string) {
  string.replace(/1/g, "Beep!"); 
  string.replace(/2/g, "Boop!");
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

