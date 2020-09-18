const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'black',
    'purple',
    'grey',
    'pink'


];

const printColor = function() {
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
    console.log(this)
    consolelog(this.style.backgroundColor);


};

const container = document.querySelector('#boxes');
const boxs = document.createElement('div');
for (let color of colors) {
    const boxs = document.createElement('div');
    boxs.style.backgroundColor = color;
    boxs.classList.add('box');
    container.appendChild(boxs);
    boxs.addEventListener('click', printColor);

};