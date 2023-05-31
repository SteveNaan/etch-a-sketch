let color = "black";

let colorMode = ""

let canvasSize = ""

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
        canvasSize = 100;
        createCanvas(canvasSize)
    }
    else {
        canvasSize = 32;
        createCanvas(canvasSize)
    }

    container.style.gridTemplateRows = `repeat(${canvasSize}, auto)`;
    container.style.gridTemplateColumns = `repeat(${canvasSize}, auto)`;
})

createCanvas(32)

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
    number = Math.floor(Math.random() * 255);
    color += number + "," + number + "," + number + ")";
    return color
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