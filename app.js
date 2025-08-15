let parent = document.querySelector(".parent")
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let child =document.querySelectorAll(".child");
let press = document.querySelector(".press");
let lvl = document.querySelector(".lvl");
let num =document.querySelector(".lvl .num");
let retry =document.querySelector(".retry");
let level =document.querySelector(".level");
let scoreNum =document.querySelector(".scoreNum");
let score =document.querySelector(".score");
score.style.display = "none";
let colorsElement = [green, red, yellow, blue]
let checkColor = [];
let userColor = [];
let k=1;
let j =0;
lvl.classList.add("removeDisplay");
scoreNum.innerHTML = j ;
num.innerHTML = k;
retry.classList.add("removeDisplay");
let click = new Audio("sound/click.mp3");
colorsElement.forEach((color) => {
    color.addEventListener("click", () => {
        click.play();
        let colorName = color.classList[0];
        userColor.push(colorName);
        let length = userColor.length;
        for(let i =0 ;i<length;++i)
        {
            if(userColor[i]!=checkColor[i])
            {
                console.log("failed");
                if(k>j)
                {
                    j=k;
                    console.log(j)
                }
                scoreNum.innerHTML = j;
                k=1;
                num.innerHTML = k;
                console.log(j);
                
                failed();
            }
            else{
                if(i == checkColor.length-1)
                {
                    console.log("done");
                    num.innerHTML = ++k;
child.forEach(c => c.classList.add("dis"));

                    console.log(k);
                    nextLevel();
                }
            }
        }
    })
})
press.addEventListener("click",()=>{
      activeState();
      press.style.display = "none"
      lvl.style.display = "flex"
      score.style.display = "block";
      setTimeout(startGame,500)
})
retry.addEventListener("click",()=>{
    activeState();
    retry.style.display = "none";
    level.style.transform = "scale(1.1)"
    setTimeout(()=>{
        level.style.transform = "scale(1)"
    },300)
    lvl.style.display = "flex";
    setTimeout(startGame,700)
})
let removeClick = (i)=> {
    colorsElement[i].classList.remove("click");
}
let randomClick = (i)=>{
    console.log(i);
    colorsElement[i].classList.add("click");
    click.play();
    checkColor.push(colorsElement[i].classList[0]);
    setTimeout(()=>{
        removeClick(i)
    },75);
    console.log(checkColor);
}

let startGame = ()=>{
    let i = Math.floor(Math.random()*4);
    randomClick(i);
}
let nextLevel= ()=>{
    setTimeout(()=>{
       child.forEach(c => c.classList.remove("dis"));

    },500)
    userColor = [];
    setTimeout(startGame,1000);
}

let failed = ()=>{
    userColor = [];
    checkColor = [];

    lvl.style.display = "none";
    level.style.transform = "scale(1.1)"
    setTimeout(()=>{
        level.style.transform = "scale(1)"
    },300)
    retry.style.display = "flex";
    inactiveState();
}

let inactiveState = ()=>{
    colorsElement.forEach((color)=>{
        color.classList.toggle("disabled");
    })
}
inactiveState();

let activeState = ()=>{
    colorsElement.forEach((color)=>{
        color.classList.toggle("disabled");
    })
}

let load = ()=>
{
    setInterval(()=>{
        parent.classList.add("show")
    },200)
}
load();