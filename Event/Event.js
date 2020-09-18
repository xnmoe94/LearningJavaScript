// const btn = document.querySelector("button");

// btn.addEventListener("mouseover", function() {
//     btn.style.position = "absolute";

//     const height = Math.floor(Math.random() + window.innerHeight);
//     const width = Math.floor(Math.random() + window.innerHeight);

//     btn.style.left = `${width}px`;
//     btn.style.right = `${height}px`;
// });

const colors = ["red"];

const container = document.querySelector("boxes");

for (let color of colors) {
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.classList.add("box");
    container.appendChild(box);
}