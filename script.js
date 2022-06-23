let text = document.querySelector("#text");
let image = document.querySelector("#image");
let header = document.getElementsByTagName('header')[0];
let page2 = document.querySelector("#page2");
let page3 = document.querySelector("#page3");
let glass = document.querySelector("#glass");
let row1 = document.querySelector("#row1");
let row2 = document.querySelector("#row2");
let skills = document.querySelector("#skills");
let logos = document.querySelectorAll(".logos");
const aboutpage = document.querySelector(".about-page");
const aboutbtn = document.querySelector("#aboutbtn");
const tint = document.querySelector(".tint");
const exit = document.querySelector(".exit")
const topbar = document.querySelector("#topbar");
const midbar = document.querySelector("#midbar");
const botbar = document.querySelector("#botbar");
const hamburger = document.querySelector("#hamburger");
const optbar = document.querySelector("#optbar");
const hands = document.querySelector("#hands");
const resume = document.querySelector("#resumebtn");
const tooltip = document.querySelector(".tooltip");
const buttons = document.querySelectorAll("button");
const projects = document.querySelectorAll(".projects");
let count = 0;

buttons.forEach((button)=>{
    button.addEventListener("mouseover",()=>{
        toggleTooltip(button,"none")
    })
})
projects.forEach((project)=>{
    project.addEventListener("mouseover",()=>{
        toggleTooltip(project,"none")
    })
})

resume.addEventListener("mouseover",()=>{
    toggleTooltip(resume,"none")
});

click(hamburger,()=>{
    if(count === 0){
    appear(midbar,"none");
    topbar.style.transform = `translateY(7.5px) rotateZ(-135deg)`;
    botbar.style.transform = `translateY(-7.5px) rotateZ(135deg)`;
    appear(optbar,"block")
    optbar.style.animationName = "down-slide";
    count = 1;
    }else{
        appear(midbar,"block");
        topbar.style.transform = `translateY(0px) rotateZ(0deg)`;
        botbar.style.transform = `translateY(0px) rotateZ(0deg)`;
        optbar.style.animationName = "up-slide";
        setTimeout(()=>{appear(optbar,"none")},150)
        count = 0;
    }
})

click(aboutbtn,()=>{
    appear(aboutpage,"block");
    appear(tint,"block");
})

click(exit,()=>{
    appear(aboutpage,"none");
    appear(tint,"none");
})

const sources = ["react2.svg", "javascript2.svg","bootstrap2.svg","css2.svg","html2.svg","figma2.svg"]
const sources2 = ["react.svg", "javascript.svg","bootstrap.svg","css.svg","html.svg","figma.svg"]

logos.forEach((logo,index)=>{
    logo.addEventListener("mouseover",()=>{
        logo.firstChild.src = `svgs/${sources[index]}`;
    })
    logo.addEventListener("mouseout",()=>{
        logo.firstChild.src = `svgs/${sources2[index]}`;
    })
})
    
addEventListener("scroll",() =>{
    let x = scrollX; 
    let y = scrollY;
    let width = innerWidth  || document.documentElement.clientWidth || document.body.clientWidth;

    if(width < 720){
    }else{
        translate(text,"X",y * -1.1)
        translate(image,"X",y * 1.1)
    }
    if(innerWidth > 720){
        if(y >= 10){
            translate(header,"Y",-65)
        }else{
            translate(header,"Y",0)
        }
    }


    if(innerWidth > 720 && y >= 190){
        appear(glass,"block");
    }

    if(y >= 220){
        appear(row1,"flex");
    }
    if(y >= 390){
        appear(row2,"flex");
    }
    //if(y >= 350){
     //   appear(skills,"flex");
    //}

});
if(innerWidth < 600){
    appear(hands.children[0],"none")
    appear(hands.children[1],"none")
    appear(hands.children[2],"none")
}

addEventListener("resize",()=>{
    if(innerWidth < 600){
        appear(hands.children[0],"none")
        appear(hands.children[1],"none")
        appear(hands.children[2],"none")
    }else{
        appear(hands.children[0],"block")
        appear(hands.children[1],"block")
        appear(hands.children[2],"block")
    }
})
addEventListener("load",()=>{
    if(innerWidth < 600){
        appear(hands.children[0],"none")
        appear(hands.children[1],"none")
        appear(hands.children[2],"none")
    }else{
        appear(hands.children[0],"block")
        appear(hands.children[1],"block")
        appear(hands.children[2],"block")
    }
})




function translate(obj,F,distance){
 obj.style.transform = `translate${F}(${distance}px)`;
}
 
function rotate(obj,F,angle){
    obj.style.transform = `rotate${F}(${angle}deg)`;
}
 
function appear(obj,orientation){
    obj.style.display = orientation;
};
 
function click(obj,x){
    obj.addEventListener("click",x)
}



function toggleTooltip(obj,display){
    tooltip.innerText = obj.name;
    tooltip.style.display = display;
    obj.append(tooltip);
}
