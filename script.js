const spaceElement = document.querySelector("#spaceToDraw");
spaceElement.style.height = "160px"
spaceElement.style.width = "160px"


for (let i = 0; i < 160; i++){
const pixel = document.createElement("div")

spaceElement.appendChild(pixel);
pixel.style.display = "flex";
pixel.style.border = "1px solid red";
pixel.style.width = "8px";
pixel.style.height = "8px";
pixel.addEventListener("click", function(){
    pixel.style.border = "1px solid blue";
    pixel.style.backgroundColor = "blue";
}

);
}
