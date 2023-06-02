let Hero = document.querySelector(".Hero");
let Buttons = document.querySelectorAll(".SliderButton");
let HeroContentTitle = document.querySelector(".HeroContentTitle");
let HeroContentHook = document.querySelector(".HeroContentHook");
let HeroContentBenefit = document.querySelector(".HeroContentBenefit");
let HeroContentButton = document.querySelector(".HeroContentButton");
let Selector = document.querySelector(".TopContentSelector");

let Image1 = "url('Images/Slider1.PNG')";
let Image2 = "url('Images/Slider2.PNG')";
let Image3 = "url('Images/Slider3.PNG')";
let Image4 = "url('Images/Slider4.PNG')";

let SliderPos = 0;
let Images = [Image1,Image2,Image3,Image4];

let HeroContentMap = new Map([
    [0,["#YouMake","Make it your way","A better way of living with Samsung","Buy Now"]],
    [1,["","Get a storage upgrade on us","On select colors of Galaxy S23 Ultra, get 512GB for the price of 256GB","Buy Now"]],
    [2,["","Save up to $300 on The Frame","Transform your TV into art.","Buy Now"]],
    [3,["","Pre-order for $1,000 off","Save big on the new Bespoke Family Hub+, featuring a 2x Larger screen.","Pre-order now"]]
  ]);

function slideContent(slide){
    let info = HeroContentMap.get(slide);

    HeroContentTitle.textContent = info[0];
    HeroContentHook.textContent = info[1];
    HeroContentBenefit.textContent = info[2];
    HeroContentButton.textContent = info[3];
}

function updateBoard(){
    let clone = document.querySelector(".FillDivHB");

    for(let i = Selector.length ; i > 0;i --){
        if (Selector.childNodes[i].className == "FillDivHB"){

        }
        Selector.childNodes[i].remove();
    }

    for (let i = 0 ; i < Images.length - 1; i++){
        let newClone = clone.cloneNode(true);
        Selector.appendChild(newClone);
    }
}

function slideBoxes(){
    let boxes = document.querySelectorAll(".FillDiv");
    for (let i = 0 ; i < boxes.length ;i++){
        let box = boxes[i];
        box.style.backgroundColor = "rgba(116, 116, 116, 0.25)";
    }
    boxes[SliderPos].style.backgroundColor = "rgb(110, 110, 110)";
}

function slideImage(position){
    SliderPos = position;
    slideContent(SliderPos);
    Hero.style.backgroundImage = Images[SliderPos];
    slideBoxes();
}

Buttons[0].onclick = function(){
    SliderPos -= 1;
    if (SliderPos < 0){
        SliderPos = Images.length - 1;
    }
    slideImage(SliderPos);
}

Buttons[1].onclick = function(){
    SliderPos += 1;
    if (SliderPos >= Images.length){
        SliderPos = 0;
    }
    slideImage(SliderPos);
}

updateBoard();
slideBoxes();

for(let i = 0 ; i < Selector.children.length;i++){
    if (Selector.children[i].className = "FillDivHB"){
        Selector.children[i].onclick = function(){
            let position = i;
            slideImage(position);
        }
    }
}