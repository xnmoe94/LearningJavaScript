// const li = document.querySelectorAll('li');

// for (let i = 0; i < li.length; i++) {
//     console.log(li[i].innerText);
//     li[i].innerText = "We are all Heros";

// }

// const colors = ['red', 'yellow', 'green', 'blue'];

// li.forEach((element, i) => {
//     const color = colors[i];
//     element.style.color = color;
//     console.log(color)


// })

// for (let alllis of li) {

//     alllis.innerHTML = 'We are <b>The Champions</b>';
//     alllis.style.color = 'red';
// }


// const tod = document.querySelector('.todo');

// tod.classList.add('done');


// const ul = document.querySelector('ul');
// const li = document.querySelector('li');
// const addButton = document.querySelector('button');
// const input = document.querySelector('input');

// addButton.addEventListener('click', function() {

//     const getvalue = input.value;
//     const addelement = document.createElement('li');
//     addelement.innerHTML = getvalue;
//     ul.appendChild(addelement);


// })




const warriorsGames = [{
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
]



const makeChart = (warriorgame) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    for (let games of warriorgame) {
        const { homeTeam, awayTeam } = games;
        const gameli = document.createElement('li');
        const { team: hTeam, points: hPoints } = homeTeam;
        const { team: aTeam, points: aPoints } = homeTeam;
        const teamNames = `${aTeam} @ ${hTeam}`;
        let scoreLine;

        if (aPoints > hPoints) {
            scoreLine = `<b>${aPoints}</b>-${hPoints}`;

        } else {
            scoreLine = `<b>${aPoints}</b>-${hPoints}`;
        }
        const warrior = hTeam = 'Golden State' ? homeTeam : awayTeam;
        gameli.classList.add(warrior.isWinner ? 'win' : 'loss');
        gameli.innerHTML = `${teamNames} ${scoreLine}`;
        ul.appendChild(gameli);
    }

    return ul;

};


const Chart1 = makeChart(warriorsGames);
document.body.prepend(Chart1);