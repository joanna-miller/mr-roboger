# _Mr. Roboger's Neighborhood_

#### _Return range of values from user input_

#### By _**Jo Miller**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description


## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _Value does not return to user_

## Specifications
```
Describe: robogersInput()
Test: It should return an array of values of the number that is inputted.
Expect: (robogersInput(5).toEqual([0, 1, 2, 3, 4, 5]));

Test: It should return a string of values of the number that is inputted.
Expect: (robogersInput(5).toEqual("0 1 2 3 4 5"));

Test: Convert the number 3 in a string to "Won't you be my neighbor?".
Expect: (robogersInput(5).toEqual("0 1 2 Won't you be my neighbor? 4 5"));

Test: Convert any number containing the number 3 in a string to "Won't you be my neighbor?".
Expect: (robogersInput(13).toEqual("0 1 2 Won't you be my neighbor? 4 5 6 7 8 9 10 11 12 Won't you be my neighbor?"));

Test: Convert any number containing the number 2 in a string to "Boop!".
Expect: (robogersInput(12).toEqual("0 1 Boop! Won't you be my neighbor? 4 5 6 7 8 9 10 11 Boop!"));

Test: Convert any number containing the number 1 in a string to "Beep!".
Expect: (robogersInput(5).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Boop! Boop! Boop!"));


```

## License

[MIT](LICENSE.txt)

## Contact Information

_Jo Miller: joannamiller@gmail.com_
