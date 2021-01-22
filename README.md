# _Mr. Roboger's Neighborhood_

#### _Return range of values from user input_

#### By _**Jo Miller**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_Input any number into the form and submit, and you will be returned with an range of every number contained within your number! Return numbers containing 3 will be replaced with "Won't you be my neighbor". Return numbers containing 2 will be replaced with "Boop!". Return numbers containing 1 will be replaced with "Beep!"._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _Any known issues_
* _should go here_

## Specifications

Describe: mrRobogers
Test: It should return an 0 if the number 0 is inputted.
Expect: (mrRobogers(0).toEqual([0]));

Test: It should return a range of values from user input.
Expect: (mrRobogers(1).toEqual(0,1));

Test: It should return an array of values from user input.
Expect: (mrRobogers(1).toEqual([0,1]));

Test: It should return an array of values from user input, with 3 to be replaced with "Won't you be my neighbor?".
Expect: (mrRobogers(3).toEqual([0 1 2 Won't you be my neighbor?]) 

## License

[MIT](LICENSE.txt)

## Contact Information

_Jo Miller: joannamiller@gmail.com_
