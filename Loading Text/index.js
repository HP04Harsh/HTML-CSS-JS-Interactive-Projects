const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    // Update the text to show the load percentage dynamically
    loadText.innerText = `${load}%`;  // Dynamically show load percentage

    // Adjust opacity based on load value
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // Apply blur effect based on load value
    bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`; // Correct template literal syntax
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
};
