let attempts = 0;
let wonMessage = 0;
let lostMessage = 0;
let wonLostMessage = 0;

const form = document.querySelector(".form")
const gameInput = form.querySelector("#gameInput")
const gameBtn = document.querySelector("#btn");
const ramaining = document.querySelector(".ramaining");
const wonLost = document.querySelector(".won-lost");
const totalAttempts = document.querySelector(".total-attempts")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    attempts++;
    if(attempts >= 5){
        gameInput.disabled = true;
        gameBtn.disabled = true
    }if(attempts < 6){
        checkResult(gameInput)
    }
    gameInput.value = "";
})

const checkResult = (gameInput) => {
    const inputValue = gameInput.value;
    const random = getRandomNumber(1, 5);
    if(inputValue == random){
        ramaining.innerHTML = `You Have won`;
        wonMessage++;
    }else{
        ramaining.innerHTML = `You have Lost..Random Number was: ${random}`
        lostMessage++;
    }
    totalAttempts.innerText = `Total Attepmpts: ${5 - attempts}`
    wonLost.innerHTML = `Won : ${wonMessage},,Lost: ${lostMessage}`
}
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}



