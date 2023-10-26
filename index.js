// Create the player object

let player = {
    name : "Alain", 
    chips : 0,
    updateChips: function(Int) {
        chips += Int
    }
}

// Set up variables
let cards = []
let sum = 0
let haveBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " " + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    haveBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent = cardsEl.textContent + " " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        haveBlackJack = true
        message = "You have blackjack"
        player.chips = player.chips + 10
        playerEl.textContent = player.chips
    } else {
        isAlive = false       
        message = "You have lost"
        player.chips = player.chips - 10
        playerEl.textContent = player.chips
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive == true && !haveBlackJack) {
        message = "Drawing a new card"
        messageEl.textContent = message
        card = getRandomCard()
        
        sum = sum + card
        cards.push(card)
        
        renderGame()
    }
}
