const spaceElement = document.querySelector("#spaceToDraw");
const inputElement = document.querySelector("#iptSize");
const btnElement = document.querySelector("#btn");
const columElement = document.querySelector("#columnLeft");
const iptColor = document.querySelector("#iptColor");
const eraseElement = document.querySelector("#erase");


let toColor = "black";
iptColor.addEventListener("input",function()
{
    toColor = iptColor.value;
})
eraseElement.addEventListener("click",() => toColor = "white");
const windowSize = 480;

let iptVal = 16;

let newSpace = null;
function draw(pixel)
{
    pixel.style.border = "1px solid black";
    pixel.style.backgroundColor = toColor;
}
btnElement.addEventListener("click",function()
{
    
    iptVal = Number(inputElement.value);
    if (isNaN(iptVal)){alert("ingresa un número válido");}
    else
    spaceElement.remove();

   if (newSpace) { newSpace.remove();}
    newSpace = document.createElement("div");
    newSpace.style.height = windowSize +"px";
    newSpace.style.width = windowSize +"px";
    newSpace.style.border = "1px solid black";
    newSpace.style.display = "flex";
    newSpace.style.flexWrap = "wrap";
     
 
    columElement.appendChild(newSpace);

    
    
    for (let i = 0; i < iptVal*iptVal; i++){
        
        const pixel = document.createElement("div")

        newSpace.appendChild(pixel);
        pixel.style.display = "flex";
        pixel.style.border = "1px solid black";
        pixel.style.width = (windowSize/iptVal - 2) + "px";
        pixel.style.height = (windowSize/iptVal - 2) + "px";
     pixel.addEventListener("click", function(){
        draw(pixel);
}

);
}
}) 


//------

   for (let i = 0; i < iptVal*iptVal; i++){
        
        const pixel = document.createElement("div")

        spaceElement.appendChild(pixel);
        pixel.style.display = "flex";
        pixel.style.border = "1px solid black";
        pixel.style.width = (windowSize/iptVal - 2) + "px";
        pixel.style.height = (windowSize/iptVal - 2) + "px";
     pixel.addEventListener("click", function(){
        draw(pixel);
}

);
}
spaceElement.style.height = windowSize +"px";
spaceElement.style.width = windowSize +"px";



