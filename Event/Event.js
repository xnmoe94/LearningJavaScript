const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function() {
//     btn.style.position = 'absolute';



//     const height = Math.floor(Math.random() + window.innerHeight);
//     const width = Math.floor(Math.random() + window.innerHeight);




//     btn.style.left = `${width}px`;
//     btn.style.right = `${height}px`;



// });

const body = doument.querySelector('body');

btn.addEventListener('click', function() {

    body.style.changeColor = 'red';

})