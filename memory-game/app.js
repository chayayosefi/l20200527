document.addEventListener('DOMContentLoaded', function () {
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    // card options
    let cards = [{
            name: 'f1',
            img: 'images/f1.png'
        },
        {
            name: 'f1',
            img: 'images/f1.png'
        },
        {
            name: 'f2',
            img: 'images/f2.png'
        },
        {
            name: 'f2',
            img: 'images/f2.png'
        },
        {
            name: 'f3',
            img: 'images/f3.png'
        },
        {
            name: 'f3',
            img: 'images/f3.png'
        },
        {
            name: 'f4',
            img: 'images/f4.png'
        },
        {
            name: 'f4',
            img: 'images/f4.png'
        },
        {
            name: 'f5',
            img: 'images/f5.png'
        },
        {
            name: 'f5',
            img: 'images/f5.png'
        },
        {
            name: 'f6',
            img: 'images/f6.png'
        },
        {
            name: 'f6',
            img: 'images/f6.png'
        }
    ]

    // shuffle deck 
    cards.sort(function (a, b) {
        return Math.random() - 0.5;
    });
    //console.log(cards)

    // create the board
    let grid = document.querySelector('.grid');
    let counter = document.querySelector('#result');

    // I
    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/back-card.jpg')
            //card.src = 'image/back-card.png'
            card.setAttribute('data-cardid', i)
            //card.data-cardid = i
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // execute
    createBoard()


    // II  flip selected card
    function flipCard() {
        let cardId = this.getAttribute('data-cardid');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img) // set the card image
        if (cardsChosenId.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // III check for match
    function checkForMatch() {
        let allCards = document.querySelectorAll('.grid > img');
        let selectedFirst = cardsChosenId[0];
        let selectedSecond = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!!!!");
            allCards[selectedFirst].setAttribute('src', 'images/blank.png')
            allCards[selectedSecond].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            // restore back card
            allCards[selectedFirst].setAttribute('src', 'images/back-card.jpg')
            allCards[selectedSecond].setAttribute('src', 'images/back-card.jpg')
        }
        // clear selected for next try
        cardsChosen = []
        cardsChosenId = []

        counter.textContent = cardsWon.length;

        if (cardsWon.length === allCards.length / 2) {
            // SpeechRecognitionResult.textContent = "Great!!! you found them all...."
            alert("Great!!! you found them all....")
        }

    }





})