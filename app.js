document.documentElement.className = 't-1';

// function to set a given theme/color-scheme
const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
const selectTheme = () => {
    if (theme.value === '1') {
        setTheme('t-1');
    }
    if (theme.value === '2') {
        setTheme('t-2');
    }
    if (theme.value === '3') {
        setTheme('t-3');
    } 
}
const theme = document.getElementById('theme');
theme.addEventListener('change', selectTheme);

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 't-1') {
       setTheme('t-1');
       document.getElementById('theme').value = '1';
   }
   if (localStorage.getItem('theme') === 't-2') {
        setTheme('t-2');
        document.getElementById('theme').value = '2';
    } 
    if (localStorage.getItem('theme') === 't-3') {
        setTheme('t-3');
        document.getElementById('theme').value = '3';
    }  
})();




const outputText = document.querySelector('.output__text');

let userInput = [];
let func = null;
let memo1 = "";
let memo2 = "";

const reset = () => { 
    userInput = [];
    outputText.innerHTML = "";
}

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

const inputFunc = (value) => {
    const functionality = (value) => {
        if(func === null && memo2 === "") {
            func = value;
            memo2 = memo1;
            reset();
        } else {
            result(func);
            func = value;
        }
    }
    switch(true) {
        case (typeof value === 'number'):
            userInput.push(value);
            outputText.innerHTML = userInput.join("");
            memo1 = userInput.join("");
            break;
        case (value === 'del'): //&& userInput.length > 0
            userInput.pop();
            outputText.innerHTML = userInput.join("");
            memo1 = userInput.join(""); 
            if(memo2) {
                memo2 = memo2.toString();
                memo2 = memo2.slice(0, -1)
                outputText.innerHTML = memo2;
            }
            break; 
        case (value === 'decimal'):
            userInput.push(".");
            outputText.innerHTML = userInput.join("");
            memo1 = userInput.join("");
            break;
        case (value === 'reset'):
            reset();
            memo1 = "";
            memo2 = "";
            func = null;
            break;
        case (value === 'result'):
            if(func !== null) {
                result(func);
                func = null;
            } else {
                outputText.innerHTML = 'Please input value';
            }
            break;
        case (value === 'add' || value === 'substract' || value === 'multiply' || value === 'devide'):
            functionality(value);
            break;
    }   
}



