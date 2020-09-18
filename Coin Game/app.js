function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const player = document.querySelector("#player");

window.addEventListener("keyup", function(e) {
    /*
                                      Moving Top and Down
                                      */
    if (e.keyCode === 40 || e.keyCode === "ArrowDown") {
        const currentTop = extractPos(player.style.top);
        player.style.top = `${currentTop + 20}px`;
    } else if (e.keyCode === 38 || e.key === "ArrowUp") {
        const currentTop = extractPos(player.style.top);
        player.style.top = `${currentTop - 20}px`;

        /*
                                                                  Moving Left and Right 
                                                                  */
    } else if (e.keyCode === 37 || e.key === "ArrowLeft") {
        const currentLeft = extractPos(player.style.left);
        player.style.left = `${currentLeft - 20}px`;
    } else if (e.keyCode === 39 || e.key === "ArrowRight") {
        const currentLeft = extractPos(player.style.left);
        player.style.left = `${currentLeft + 20}px`;
    }
});

const extractPos = (pos) => {
    if (!pos) return 0;
    return parseInt(pos.slice(0, -2));
};