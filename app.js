let color = "black";

let colorMode = ""

const container = document.getElementById("container");

document.querySelectorAll('.color-button').forEach(function(button) {
    button.addEventListener('click', function() {
        color = this.getAttribute('data-color');
        colorMode = ""
    });
});

document.getElementById('random').addEventListener('click', function() {
    colorMode = 'random';
});

document.getElementById("shadesOfGrey").addEventListener("click", function() {
    colorMode = "grey";
});

document.getElementById("reset-button").addEventListener("click", function() {
    while (container.firstChild){
    container.removeChild(container.firstChild);
}
    for (let i = 0; i < (16 ** 2); i++){
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
        } )
    };
})

for (let i = 0; i < (16 ** 2); i++){
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