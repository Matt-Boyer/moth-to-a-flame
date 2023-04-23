//x=0 y=random
//x=random y=0
//x=max y=random
//x=random y=max
//cursor is flame dodge moths

const createMoth = () => {
    const moth = document.createElement("img");
    moth.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/350/350942.png");
    document.body.appendChild(moth);
    spawnMoths(moth);
    clickMoth(moth)
}


const startGame = () => {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", () => {
        startButton.remove();
        createScoreCounter();
        setInterval(() => {
            createMoth()
        }, 1500);
    })
}

const spawnMoths = (moth) => {
    let randomNum = Math.random() * 100;
    let edge = 0;
    const topSpawn = `position:absolute; top:${edge}%; width:30px; right:${randomNum}%`
    const bottomSpawn = `position:absolute; bottom:${edge}%; width:30px; right:${randomNum}%`
    const rightSpawn = `position:absolute; top:${randomNum}%; width:30px; right:${edge}%`
    const leftSpawn = `position:absolute; top:${randomNum}%; width:30px; left:${edge}%`

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

let mothNum = 0;
let id = mothNum;

const mothMoveToFlameRight = (moth,randomNum,edge) => {
    setInterval(() => {
        if (randomNum > 50) {
            randomNum--;
            edge++;
        }
        if (randomNum < 50) {
            randomNum++;
            edge++;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver()
        }
        moth.style = `position:absolute; top:${randomNum}%; width:30px; right:${edge}%`
    }, 200);
}

const mothMoveToFlameLeft = (moth,randomNum,edge) => {
    setInterval(() => {
        if (randomNum > 50) {
            randomNum--;
            edge++;
        }
        if (randomNum < 50) {
            randomNum++;
            edge++;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver()
        }
        moth.style = `position:absolute; top:${randomNum}%; width:30px; left:${edge}%`
    }, 200);
}

const mothMoveToFlameTop = (moth,randomNum,edge) => {
    setInterval(() => {
        if (randomNum > 50) {
            randomNum--;
            edge++;
        }
        if (randomNum < 50) {
            randomNum++;
            edge++;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver()
        }
        moth.style = `position:absolute; top:${edge}%; width:30px; right:${randomNum}%`
    }, 200);
}

const mothMoveToFlameBottom = (moth,randomNum,edge) => {

    setInterval(() => {
        if (randomNum > 50) {
            randomNum--;
            edge++;
        }
        if (randomNum < 50) {
            randomNum++;
            edge++;
        }
        if ((randomNum  > 48 && randomNum < 52) && (edge > 48))    {
            gameOver()
        }
        moth.style = `position:absolute; bottom:${edge}%; width:30px; right:${randomNum}%`
    }, 200);
}

var gameOver = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            const h2 = document.createElement("h2");
            h2.innerText = "GAME OVER";
            document.body.appendChild(h2);
            called = false;
        }
    };
})();

let count = 0;
const createScoreCounter = () =>    {
    let counter = document.createElement("h3");
    counter.setAttribute("id", "counter");
    counter.innerText = `${count}`;
    document.body.appendChild(counter);
    counter.style = "align-self: flex-start;position: absolute; margin:3px"
}

const clickMoth = (moth) => {
    moth.addEventListener("click", () =>    {
        count++;
        let counter = document.getElementById("counter");
        moth.remove();
        clearInterval(moth);
        counter.innerText = `${count}`
    })
}

startGame()
