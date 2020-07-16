const btn = document.querySelector('.start');
const elements = document.querySelectorAll('.element')
const output = document.querySelector('.output');
const result = document.querySelector('.result');

let computerMark = '';
let playerMark = '';
let win = false;

// for(let i=0;i<elements.length;i+=3){
//     if(elements[i].textContent == elements[i+1].textContent && elements[i+1].textContent == elements[i+2].textContent){
//         return true;
//     }

// }
const checkWinner = function() {
    // if (elements[0].textContent == elements[1].textContent && elements[1].textContent == elements[2].textContent) {

    //     return true;
    // }
    for (let i = 0; i < elements.length; i += 3) {
        if (elements[i].textContent == elements[i + 1].textContent &&
            elements[i + 1].textContent == elements[i + 2].textContent) {
            output.textContent = `Wygrał ${elements[i].textContent}`
            return true;
        }

    }
    for (let i = 0; i < 3; i++) {
        if (elements[i].textContent == elements[i + 3].textContent &&
            elements[i + 3].textContent == elements[i + 6].textContent) {
            output.textContent = `Wygrał ${elements[i].textContent}`
            return true;
        }

    }

    if (elements[0].textContent == elements[4].textContent &&
        elements[4].textContent == elements[8].textContent) {
        output.textContent = `Wygrał ${elements[4].textContent}`
        return true;
    }
    if (elements[2].textContent == elements[4].textContent &&
        elements[4].textContent == elements[6].textContent) {
        output.textContent = `Wygrał ${elements[4].textContent}`
        return true;
    }


}
const computerMove = function() {
    const compChoice = Math.floor(Math.random() * 9);
    // console.log(compChoice)
    // console.log(elements[compChoice])
    if (!win) {
        if (elements[compChoice].textContent != computerMark &&
            elements[compChoice].textContent != playerMark) {
            elements[compChoice].textContent = computerMark;
            if (checkWinner() == true) {
                win = true;
            };
            playerMove();
        } else {
            computerMove();
        }
    }


    // console.log(elements[compChoice].style = 'color:red';)
}


const playerMove = function() {
    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            // console.log(e.target);
            if (!win) {
                if (e.target.textContent != computerMark &&
                    e.target.textContent != playerMark) {
                    e.target.textContent = playerMark;
                    if (checkWinner() == true) {
                        win = true;

                    };
                    computerMove();
                }
            }

        })

    })
}


const alignMark = function() {
    if (Math.floor(Math.random() * 2) == 1) {
        computerMark = 'X';
        playerMark = 'O';

    } else {
        computerMark = 'O';
        playerMark = 'X';
    }
    output.textContent = `Jestes: ${playerMark}`

}

btn.addEventListener('click', (e) => {
    console.log('start')
    win = false;
    elements.forEach((el, index) => {
        el.textContent = index + 1;
    })
    alignMark();
    if (Math.floor(Math.random() * 2) == 0) {
        computerMove();
        console.log('ruch komputera');
    } else {
        playerMove();
        console.log('twój ruch')
    }






    // e.target.style = 'background-color:red';
})