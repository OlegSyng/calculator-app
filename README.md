# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](/images/Screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- LESS pre-processor
- JS for mathematical computations

### What I learned

```html
<div class="input">
  <input class="input__btn input__btn--regular" type="button" onclick="inputFunc(7)">
  ...
</div>
```
```css
//Theme selector classes:
:root {
    &.t-1 {
        // Backgrounds
        --bg-main: #3a4764;
        --bg-keypad: #232c43;
        --bg-screen: #182034;
        ...
    }
    &.t-2 {...}
    &.t-3 {...}
}
```
```js
const result = (func) => {
    let manipulation = null;
    const standartAction = (manipulation) => {
        outputText.innerHTML = manipulation;
        userInput = [];
        memo1 = "";
        memo2 = manipulation;
    }
    switch(func) {
        case 'add':
            manipulation = Number(memo2) + Number(memo1);
            standartAction(manipulation);
            break;
        case 'substract':
            manipulation = Number(memo2) - Number(memo1);
            standartAction(manipulation);
            break;
        case 'multiply':
            manipulation = Number(memo2) * Number(memo1);
            standartAction(manipulation);
            break;
        case 'devide':
            manipulation = Number(memo2) / Number(memo1);
            standartAction(manipulation);
            break;
    }
}
```
