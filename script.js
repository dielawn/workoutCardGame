const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const jokers = ['Joker1', 'Joker2']

const getDeck = () => {
   let deck = [];
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++){
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    for(let k = 0; k < jokers.length; k++){
        let joker = {Value: jokers[k], Suit: 'Joker'};
        deck.push(joker);
    }
    return deck;
}

const shuffle = (deck) => {
    for(let i = 0; i < 1000; i++){
        let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
    }
    return deck;
}





const renderDeck = (deck) => {
    let deckDiv = document.getElementById('deck')
    deckDiv.innerHTML = '';
    getRandomExercises(exercises);
     
   
    for(let i = 0; i < deck.length; i++) {
        let card = document.createElement('div');        
        let value = document.createElement('div');
        let suit = document.createElement('div');
        let assignedExercise = document.createElement('div')
        let repsDiv = document.createElement('div');       
        let exerciseDiv = document.createElement('div');
       
     
        
       
        card.className = 'card back'       
        repsDiv.className = 'repsValue'
        value.className = 'value'
        suit.className = 'suit' + deck[i].Suit.toLowerCase();
        
        assignedExercise.appendChild(exerciseDiv)
        assignedExercise.className = 'exercise'

        value.innerHTML = deck[i].Value;

        card.appendChild(value);
        card.appendChild(suit);
        
        console.log(suit, value)
      
        if(suit.classList.contains('suitjoker')){
            
            if(value.textContent == 'Joker1'){
                exerciseDiv.innerHTML = specialExercises[0].exercise
            } else if(value.textContent == 'Joker2'){
                exerciseDiv.innerHTML = specialExercises[1].exercise
            }           
            
           
        }else {
            exerciseDiv.innerHTML = currentExerciseArray[i].name;    
            
        }
        card.appendChild(assignedExercise);
        switch(value.textContent){
            case 'A':
                reps = 14;
                break;
            case '2':
                reps = 2;
                break;
            case '3':
                reps = 3;
                break;
            case '4':
                reps = 4;
                break;
            case '5':
                reps = 4;
                break;
            case '6':
                reps = 6;
                break;
            case '7':
                reps = 7;
                break;
            case '8':
                reps = 8;
                break;
            case '9':
                reps = 9;
                break;
            case '10':
                reps = 10;
                break;
            case 'J':
                reps = 11;
                break;
            case 'Q':
                reps = 12;
                break;
            case 'K':
                reps = 13;
                break;
            case 'Joker1':
                reps = 'Max';
                break;
            case 'Joker2':
                reps = 'Max';
                break;
            
            
        }
        repsDiv.innerHTML = `Reps ${reps}`
        card.appendChild(repsDiv);
        
        deckDiv.appendChild(card);      
    }
}


const changeCardColors = () => {
    const card = document.querySelectorAll('.card');
    const suitheart = document.querySelectorAll('.suithearts')
    const suitdiamond = document.querySelectorAll('.suitdiamonds')

    if(card.classList.contains('front')){
        if(suitheart.classList.contains('suithearts') || 
        suitdiamond.classList.contains('suitdiamonds')){
        value.classList.add('red')
        }
    }
}

let deck = getDeck();
renderDeck(deck);

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function() {
  startGame()
 
});





const flipCard = (index) => {
    const cards = document.querySelectorAll('.card');
    
    let currentIndex = index;
    if (currentIndex >= cards.length)  {
        return;
    }
    cards[currentIndex].classList.remove('back');
    cards[currentIndex].classList.add('front')
    
    getExerciseDescription(index)
    changeTitle(index)
   
    currentIndex++;
    
    
}

const startGame = () => {
    shuffle(deck);
    renderDeck(deck);
   
    const cards = document.querySelectorAll('.card');
    let i = 0;
    const flipNextCard = () => {
        if (i < cards.length) {
            console.log(currentExerciseArray[i].name)
            flipCard(i);
          
            i++;
            
            setTimeout(flipNextCard, 15000);
            countDownTimer(15, document.getElementById('countDown'));
            
        }
    };
    flipNextCard();
};

const countDownTimer = (seconds, display) => {
    let remainingTime = seconds;
    const intervalId = setInterval(() => {
        remainingTime--;
        display.innerHTML = `Time remaining: ${remainingTime}`;
        if (remainingTime <= 0) {
            display.innerHTML = `Time remaining: ${seconds}`;
            clearInterval(intervalId);
        }
    }, 1000);
  };
  

  