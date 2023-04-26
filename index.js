
//idea: cursor is flame dodge moths
//different color moths take more takes
//reset button
//display highscores in local storage
//sound effects
//look into click registering accurately requestanimationframe
let score = 0;
//higher number is slower
let speed = .05;
// let intervalOfSpawn = 1500;
let isGameRunning = false;
//Levels
const intervalOfSpawn = () => {
    if (score > 5 && score < 10) {
        return 1200};
    if (score > 10 && score < 15) {
        return 900;
        speed = 10;
    };
    if (score > 15 && score < 20) {
        return 700;
        speed = 150;
    };
    if (score > 20 && score < 25) {
        return 500;
        speed = 130;
    };
    if (score > 25) {
        return 300;
        speed = 100;
    };

    return 1500
}

let mothId = 0;

const createMoth = () => {
    const moth = document.createElement("img");
    moth.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/350/350942.png");
    moth.setAttribute("data-id",`${mothId}`);
    moth.setAttribute("class", "moth");

    if (document.body.id == "darkmode"){
        moth.classList.add("dark")
    }

    moth.setAttribute("draggable", "false")
    mothId++;
    document.body.appendChild(moth);
    spawnMoths(moth);
    clickMoth(moth)
}


const play = () =>  {
    isGameRunning = true;
    createLeaderBoard()
        createScoreCounter();
        function interval() {
            setTimeout(() => {
                console.log(isGameRunning)
                if (isGameRunning)  {
                    createMoth();
                    interval()
                }
                }, intervalOfSpawn());
        };
        interval()

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
    console.log("creating",isGameRunning)
    let scores = localStorage.getItem("highscores")
if (!isGameRunning){
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
}else{
    const scores = document.querySelector(".scores")
    if (scores){
        console.log("test")
        scores.remove()
    }
}
}

const startGame = () => {
    themeclicker()
    const startButton = document.getElementById("startButton");
    const darkmodebtn = document.getElementById("switch-mode")
    startButton.addEventListener("click", () => {
        startButton.remove();
        darkmodebtn.remove();
        play()
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
            randomNum-=.03;
            edge+=.03;
        }
        if (randomNum < 50) {
            randomNum+=.03;
            edge+=.03;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            isGameRunning = false
            gameOver();
            displayFinalScore();


            playAgainButton();
            resetGame()




        }
        moth.style = `position:absolute; top:${randomNum}%; width:30px; right:${edge}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

const mothMoveToFlameLeft = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.03;
            edge+=.03;
        }
        if (randomNum < 50) {
            randomNum+=.03;
            edge+=.03;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            isGameRunning = false
            gameOver();
            displayFinalScore();


            playAgainButton();
            resetGame()




        }
        moth.style = `position:absolute; top:${randomNum}%; width:30px; left:${edge}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

const mothMoveToFlameTop = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.03;
            edge+=.03;
        }
        if (randomNum < 50) {
            randomNum+=.03;
            edge+=.03;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            isGameRunning = false
            gameOver();
            displayFinalScore();


            playAgainButton();
            resetGame()


        }
        moth.style = `position:absolute; top:${edge}%; width:30px; right:${randomNum}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

const mothMoveToFlameBottom = (moth,randomNum,edge) => {
    moth.dataset.id =
    setInterval(() => {
        if (randomNum > 50) {
            randomNum-=.03;
            edge+=.03;
        }
        if (randomNum < 50) {
            randomNum+=.03;
            edge+=.03;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            isGameRunning = false
            gameOver();
            displayFinalScore();


            playAgainButton();
            resetGame()




        }
        moth.style = `position:absolute; bottom:${edge}%; width:30px; right:${randomNum}%;user-select: none;-webkit-user-select: none; -moz-user-select: none;`
    }, speed);
}

var gameOver = () =>{

    createLeaderBoard()

    deleteExistingMoths()
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "gameOverH2")
    h2.innerText = "GAME OVER";
    h2.style = "user-select: none; -webkit-user-select: none; -moz-user-select: none;"
    document.body.appendChild(h2);
};


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
    lastScore.setAttribute("id","finalScore")
    lastScore.setAttribute("draggable","false");
    lastScore.innerText = `${finalScore}`;
    document.body.appendChild(lastScore);
    lastScore.style = "align-self: flex-start;position: absolute; margin:3px;user-select: none; -webkit-user-select: none; -moz-user-select: none;"

    storeScore(finalScore)
}


const storeScore = (finalScore)=>{
    let scores = localStorage.getItem("highscores")
    if (scores){
        scores = JSON.parse(scores)
        if (scores.length < 5){
            scores.push(finalScore)
            localStorage.setItem("highscores",JSON.stringify(scores))
        }else{
            let smallest = Math.min(scores)
            let index = scores.indexOf(smallest)
            if (finalScore > smallest) scores.splice(index,1,finalScore)
        }
    }else{
        let arr = [finalScore]
        localStorage.setItem("highscores",JSON.stringify(arr))
    }

}



const playAgainButton = () => {
    const playAgainButton = document.createElement("button");
    playAgainButton.setAttribute("id", "playAgainButton");
    playAgainButton.innerText = "Play Again";
    playAgainButton.style = "align-self: flex-start;position: absolute;margin-top: 75px;;user-select: none; -webkit-user-select: none; -moz-user-select: none;"
    document.body.appendChild(playAgainButton);
}

const resetGame = () => {
    let playAgainButton = document.getElementById("playAgainButton");
    playAgainButton.addEventListener("click", () => {
        playAgainButton.remove()
        const gameOverH2 = document.getElementById("gameOverH2");
        const finalScore = document.getElementById("finalScore");
        finalScore.remove();
        gameOverH2.remove();
        play();
        score = 0;
        const counter = document.getElementById("counter");
        counter.innerText = `${score}`
    })
}


const deleteExistingMoths = () =>   {
    let moth = document.querySelectorAll(".moth");
    moth.forEach(ele => {
        clearInterval(ele.dataset.id)
        ele.remove()
    });
}




startGame()
createLeaderBoard()
