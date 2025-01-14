# Beep Boop

#### This third Epicodus Independant Web Project expands our knowledge of Arrays, Looping, and Spec Writing.

##### By **Arnaud Ardans II**

## Description

_This web application takes a number entered by the user, and loops through those numbers from 0 to the entered number, and returns a response based on a set of unique rules._

## Specifications:

##### Basic Specs

- **Spec:** The program returns a range of numbers from 0 to the users inputted number.
  - **_Input:_** "4"
  - **_Output:_** 0, 1, 2, 3, 4
- **Spec:** All digits are replaced with "Beep!" when any digit contains 1.
  - **_Input:_** `"4"`
  - **_Output:_** `0, "Beep!", 2, 3, 4`
- **Spec:** All digits are replaced with "Boop!" when any digit contains 2.
  - **_Input:_** `"4"`
  - **_Output:_** `0, "Beep!", "Boop!", 3, 4`
- **Spec:** All digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that." when any digit contains 3.
  - **_Input:_** `"4"`
  - **_Output:_** `0, "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that.", 4`
- **Spec:** When a negative number is entered, the program alerts to re-enter a positive integer.
  - **_Input:_** `"-4"`
  - **_Output:_** `"Please enter a positive number and try again."`
- **Spec:** If input is empty when submitted, alerts user to enter an integer.
  - **_Input:_** `" "`
  - **_Output:_** `Please fill out this field`

#### Expectations

- **Spec:** When the number is 13, the text should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  - **_Input:_** `"13"`
  - **_Output:_** `..., "I'm sorry, Dave. I'm afraid I can't do that.", ...`
- **Spec:** When the number is 21, the text should be replaced with "Boop!"
  - **_Input:_** `"21"`
  - **_Output:_** `..., "Boop!", ...`
- **Spec:** When the number is 32, the text should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
  - **_Input:_** `"32"`
  - **_Output:_** `..., "I'm sorry, Dave. I'm afraid I can't do that.", ...`

## Setup/Installation Requirements

- Setup
  _ Load on [GitHub Pages](https://roadspill.github.io/epi_proj3_arrays-looping/)
  _ Clone/Download Repo
- Load in browser of choice.
- Enter a number higher than 0 (zero)
- Submit and Receive Results

## Known Bugs

NNB as of 10/6/2019

## Support and contact details

- For support please contact me at github@arnaudardans.com
- All contributions accepted, please email me if you submit and contributions.

## Technologies Used

- HTML
- CSS
- Bootstrap 4
- JavaScript
- jQuery v3.4.1

### License

MIT License

Copyright (c) 2019 Arnaud Ardans II

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
