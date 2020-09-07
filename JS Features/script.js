// const feline = {
//     legs: 4,
//     family: 'felide'
// }

// const canine = {
//     families: 'Canine',
//     furdy: true
// }



// const copy = {...canine, ...feline };


// const Multiplication = (...nums) => (

//     nums.reduce((total, currval) => total * currval)

// )



// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     // Using the new shorthand property syntax:
//     return {
//         max,
//         min,
//         sum,
//         avg
//     }
// }
// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);

// function pick(arr) {
//     //return random element from arr
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }




// function getCard() {
//     const values = [
//         '1',
//         '2',
//         '3',
//         '4',
//         '5',
//         '6',
//         '7',
//         '8',
//         '9',
//         '10',
//         'J',
//         'Q',
//         'K',
//         'A'
//     ];
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const value = pick(values);
//     const suit = pick(suits)
//     return {
//         value,
//         suit
//     };
// }



const Numbers = {
    Pythagorean_theorem: function(a, b) {
        return Math.sqrt((a * a) + (b * b));
    }
}



const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!",
        "YOLO", "Can't Stop, Won't Stop"
    ],

    pickPhrases() {
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];

    },

    start() {
        this.timerid = setInterval(() => {
            console.log(this.pickPhrases())

        }, 3000)
    },
    stop() {

        clearInterval(this.timerid);
        console.log("Stopping please get the hell out of there")

    }
}


// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs', ];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';


//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             })

//         }

//     }

//     return deck;
// }

// function drawCard(deck) {
//     return deck.pop()
// }

// const myDeck = makeDeck();


const mydeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs', ],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    InitializedDeck() {
        const { suits, deck, values } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })

            }

        }

        return deck;
    },

    drawCard() {

        while (this.deck.length >= 2) {
            console.log(this.deck.pop());
        }



    }


}