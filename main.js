// Skapa ett random nummer
let random = Math.trunc(Math.random() * 101);
console.log(random);

//Skapa en variabel som bestämmer antalet gissningar man får
let numberOfGuesses = 5;
//Skapa en variabel för spelarens gissning
let userGuess;
// Skapa en variabel för knappen
const guessBtn = document.getElementById("guessBtn");
// Lyssna på knappen när den klickas
guessBtn.addEventListener("click", function() {
    guess();
});

// Ändra bakground beroende på om man förlorar eller vinner
function changeBackgroundColor() {

    if (random === userGuess) {
        let victoryBackground = document.getElementsByTagName("body")[0];
        victoryBackground.classList.add("victoryBackground");
        let victoryBox = document.getElementsByTagName("main")[0]
        victoryBox.classList.add("victoryBox");
        
    } else { 
        let losingBackground = document.getElementsByTagName("body")[0];
        losingBackground.classList.add("losingBackground");
        let losingBox = document.getElementsByTagName("main")[0]
        losingBox.classList.add("losingBox");
    }
}

// Skapa en funktion som hämtar spelarens tal och printar det till DOM:en
function guess() {
// Skapa en variabel som hämtar spelarens tal i Number format
    userGuess = document.getElementById("guess").valueAsNumber;
    // Printa resultatet till DOM:en i en lista
    const resultList = document.getElementById("resultList");
    const newListItem = document.createElement("li");
    newListItem.textContent = guessedText(userGuess);
    resultList.appendChild(newListItem);
//Minska antal gissningar med -1 per gång
    numberOfGuesses--;
//Göra knappen oklickbar vid femte klicket
    if (numberOfGuesses === 0 || random === userGuess) { 
    guessBtn.disabled = true;
//Skapa en restart knapp när spelet är slut
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Game";
    restartBtn.id = "restartBtn";
    restartBtn.addEventListener("click", function(){
    })
    guessForm.appendChild(restartBtn);
    }
}
  
// Lägg till text som säger om du vann, gissade för högt eller lågt
function guessedText(userGuess){
    const newListItem = document.createElement("li");
    if (random !== userGuess && numberOfGuesses === 1) {
        newListItem.textContent = "Game Over. You ran out of guesses!";
        changeBackgroundColor()
    } else if (random < userGuess ) {
        newListItem.textContent = "You guessed too high! " + "Your answer was: " + userGuess;
    } else if (random === userGuess) {
        newListItem.textContent = "You are a star! You WON! ";
        changeBackgroundColor()
    } else if (random > userGuess) {
        newListItem.textContent = "You guessed too low! " + "Your answer was: " + userGuess;
    }
    resultList.appendChild(newListItem);
}

//Begränsa antalet nummer till 3
function limitInput() {
    let guessInput = document.getElementById("guess");
    if (guessInput.value.length > 3) {
        guessInput.value = guessInput.value.slice(0, 3);
    }
}
document.getElementById("guess").addEventListener("input", limitInput);


