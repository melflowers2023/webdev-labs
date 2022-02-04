let current = 1.2;
const makeBigger = () => {
   
   current += .25;
   setFont()
};

const makeSmaller = () => {
   
   current -= .25;
   setFont()
};

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${current}em`
}


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

