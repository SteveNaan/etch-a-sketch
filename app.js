let color = "black";

let colorMode = "";

let canvasSize = "";

let number = 0;

const container = document.getElementById("container");

document.getElementById("sizeSelection").addEventListener("change", function(e) {
        console.log('changed', e);
        canvasSize = e.target.value;
});

// container.style.grid-template-rows = rows

document.querySelectorAll('.color-button').forEach(function(button) {
    button.addEventListener('click', function() {
        color = this.getAttribute('data-color');
        colorMode = ""
    });
});

document.getElementById('random').addEventListener('click', function() {
    colorMode = "random";
});

document.getElementById("shadesOfGrey").addEventListener("click", function() {
    colorMode = "grey";
});

document.getElementById("reset-button").addEventListener("click", function() {
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    if (canvasSize > 0 && canvasSize <= 100){
        createCanvas(canvasSize)
    }
    else if (canvasSize > 100) {
        alert("Maximum canvas height is 100, please enter a number between 1-100")
        canvasSize = 100;
        createCanvas(canvasSize)
    }
    else {
        canvasSize = 16;
        createCanvas(canvasSize)
    }

    container.style.gridTemplateRows = `repeat(${canvasSize}, auto)`;
    container.style.gridTemplateColumns = `repeat(${canvasSize}, auto)`;
})

createCanvas(16)

function getRandomColor() {
    let color = "rgb(";
    for (let i = 0; i < 3; i++ ) {
        color += Math.floor(Math.random() * 255);
    if (i < 2) {
        color += ", "
    }
}
    color += ")";
    return color;
};

function getShadesOfGrey() {
    let color = "rgb(";
    if (number <= 245) {
        number += 5;
        color += number + "," + number + "," + number + ")";
        return color;
    }
    else if(number > 245) {
        number = 0;
        color += number + "," + number + "," + number + ")";
        return color;
    }
};

function createCanvas(canvasSize) {
    for (let i = 0; i < (canvasSize ** 2); i++){ // replace 32 with canvasSize?
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add("newDiv");
        newDiv.addEventListener("mouseover", function() {
            if (colorMode === "random") {
                color = getRandomColor();
            } else if (colorMode === "grey") {
                color = getShadesOfGrey();
            }
            newDiv.style.backgroundColor = color;
        })
        };
}