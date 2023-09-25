let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let winMsg = document.getElementById("win-msg")

let haveBlackJack = false
let isAlive = true
let message = ""

let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let cards = [firstCard,secondCard]

let card = 0

function startGame() {
    if (isAlive == false) {
        firstCard = Math.floor(Math.random() * 10) + 2
        secondCard = Math.floor(Math.random() * 10) + 2
        cards = [firstCard,secondCard]
        sum = 0
        messageEl.textContent = "New game"
        isAlive = true
    }

    if (haveBlackJack == true) {
        firstCard = Math.floor(Math.random() * 10) + 2
        secondCard = Math.floor(Math.random() * 10) + 2
        cards = [firstCard,secondCard]
        sum = 0
        messageEl.textContent = "New game"
        haveBlackJack = false
    }

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        haveBlackJack = true
        message = "You have blackjack"
    } else {
        isAlive = false       
        message = "You have lost"
    }
    messageEl.textContent = message
}

function newCard() {
    message = "Drawing a new card"
    messageEl.textContent = message
    card = Math.floor(Math.random() * 10) + 2
    
    sum = sum + card
    cards.push(card)
    
    renderGame()
}
