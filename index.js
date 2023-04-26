
//idea: cursor is flame dodge moths
let score = 0;
//higher number is slower
let speed = 8;
// let intervalOfSpawn = 1500;

//Levels
const intervalOfSpawn = () => {
    if (score > 5 && score < 10) {
        return 1200};
    if (score > 10 && score < 15) {
        return 1000;
        speed = 10;
    };
    if (score > 15 && score < 20) {
        return 800;
        speed = 150;
    };
    if (score > 20 && score < 25) {
        return 600;
        speed = 130;
    };
    if (score > 25) {
        return 400;
        speed = 100;
    };

    return 1500
}

let mothId = 0;

const createMoth = () => {
    const moth = document.createElement("img");
    if (document.body.id == "darkmode"){
        moth.setAttribute("class","dark")
    }
    moth.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/350/350942.png");
    moth.setAttribute("data-id",`${mothId}`);
    moth.setAttribute("draggable", "false")
    mothId++;
    document.body.appendChild(moth);
    spawnMoths(moth);
    clickMoth(moth)
}

const themeclicker = () =>{
    const darkBtn = document.getElementById("switch-mode")
    darkBtn.addEventListener("click", ()=>{
        if(document.body.id != "darkmode"){
            document.body.setAttribute("id","darkmode")
        }else{
            document.body.removeAttribute("id","darkmode")
        }
    })
}

const createLeaderBoard = () =>{
    let scores = localStorage.getItem("highscores")
    if (scores){
        const div = document.createElement("div")
        div.setAttribute("class","scores")
        const p = document.createElement("p")
        const ol = document.createElement("ul")
        p.innerText = "HighScores"
        scores = JSON.parse(scores)

        scores.forEach( (item)=>{
            const li = document.createElement("li")
            li.innerText = item
            ol.append(li)
        })
       div.append(p,ol)
        document.body.append(div)
    }
}

const startGame = () => {
    localStorage.setItem("highscores",JSON.stringify(["10","9","90"]))
    themeclicker()
    createLeaderBoard()
    const startButton = document.getElementById("startButton");
    const darkmodebtn = document.getElementById("switch-mode")
    const scores = document.querySelector(".scores")
    startButton.addEventListener("click", () => {
        startButton.remove();
        darkmodebtn.remove();
        scores.remove();
        createScoreCounter();
        function interval() {
            setTimeout(() => {
                createMoth();
                interval()
            }, intervalOfSpawn());
        };
        interval()
    })
}

const spawnMoths = (moth) => {
    let randomNum = Math.random() * 100;
    let edge = 0;
    const topSpawn = `position:absolute; top:${edge}%; width:30px; right:${randomNum}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`;
    const bottomSpawn = `position:absolute; bottom:${edge}%; width:30px; right:${randomNum}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`;
    const rightSpawn = `position:absolute; top:${randomNum}%; width:30px; right:${edge}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    const leftSpawn = `position:absolute; top:${randomNum}%; width:30px; left:${edge}%;user-select: none; -webkit-user-select: none; -moz-user-select: none;`

    const pickRandomSide = Math.random() * 4;
    if (pickRandomSide <= 1) {
        mothMoveToFlameBottom(moth,randomNum,edge)
        return moth.style = `${bottomSpawn}`
    }
    if (pickRandomSide > 1 && pickRandomSide <= 2)  {
        mothMoveToFlameTop(moth,randomNum,edge)
        return moth.style = `${topSpawn}`
    }
    if (pickRandomSide > 2 && pickRandomSide <= 3)  {
        mothMoveToFlameRight(moth,randomNum,edge)
        return moth.style = `${rightSpawn}`
    }
    if (pickRandomSide > 3 && pickRandomSide <= 4)  {
        mothMoveToFlameLeft(moth,randomNum,edge)
        return moth.style = `${leftSpawn}`
    }
}


const mothMoveToFlameRight = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.06;
            edge+=.06;
        }
        if (randomNum < 50) {
            randomNum+=.06;
            edge+=.06;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver();
            displayFinalScore();
        }
        moth.style = `position:absolute; top:${randomNum}%; width:30px; right:${edge}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

const mothMoveToFlameLeft = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.06;
            edge+=.06;
        }
        if (randomNum < 50) {
            randomNum+=.06;
            edge+=.06;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver();
            displayFinalScore();
        }
        moth.style = `position:absolute; top:${randomNum}%; width:30px; left:${edge}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

const mothMoveToFlameTop = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.06;
            edge+=.06;
        }
        if (randomNum < 50) {
            randomNum+=.06;
            edge+=.06;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver();
            displayFinalScore()
        }
        moth.style = `position:absolute; top:${edge}%; width:30px; right:${randomNum}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

const mothMoveToFlameBottom = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.06;
            edge+=.06;
        }
        if (randomNum < 50) {
            randomNum+=.06;
            edge+=.06;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver();
            displayFinalScore()
        }
        moth.style = `position:absolute; bottom:${edge}%; width:30px; right:${randomNum}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

var gameOver = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            const h2 = document.createElement("h2");
            h2.innerText = "GAME OVER";
            h2.style = "user-select: none; -webkit-user-select: none; -moz-user-select: none;"
            document.body.appendChild(h2);
            called = false;
        }
    };
})();


const createScoreCounter = () =>    {
    let counter = document.createElement("h3");
    counter.setAttribute("id", "counter");
    counter.setAttribute("draggable","false")
    counter.innerText = `${score}`;
    document.body.appendChild(counter);
    counter.style = "align-self: flex-start;position: absolute; margin:3px;user-select: none; -webkit-user-select: none; -moz-user-select: none;"
}

const clickMoth = (moth) => {
    moth.addEventListener("click", (event) =>    {
        score++;
        let counter = document.getElementById("counter");
        moth.remove();
        clearInterval(moth.dataset.id);
        counter.innerText = `${score}`
    })
}

const displayFinalScore = () => {
    let counter = document.getElementById("counter");
    counter.remove();
    let finalScore = score;
    let lastScore = document.createElement("h3");
    lastScore.setAttribute("draggable","false");
    lastScore.innerText = `${finalScore}`;
    document.body.appendChild(lastScore);
    lastScore.style = "align-self: flex-start;position: absolute; margin:3px;user-select: none; -webkit-user-select: none; -moz-user-select: none;"
}

startGame()
