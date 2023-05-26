const container = document.getElementById("container");
for (let i = 0; i < (100 ** 2); i++){
const newDiv = document.createElement("div");
container.appendChild(newDiv);
newDiv.classList.add("newDiv");
newDiv.addEventListener("mouseover", function() {
    newDiv.style.backgroundColor = "black";
} )
};

