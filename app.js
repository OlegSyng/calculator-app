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


