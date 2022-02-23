function computerPlay () {
    const options = ['Rock', 'Paper', 'Scissors'];
    let r = Math.floor(Math.random() * 3);
    return options[r]
}

function playRound(playerSelection, computerSelection) {

    const validSelections = ['ROCK', 'PAPER', 'SCISSORS'];
    console.log(typeof(validSelections));

    const playerCanonSel = playerSelection.toString().toUpperCase();
    const computerCanonSel = computerSelection.toString().toUpperCase();

    console.log(playerCanonSel);
    console.log(computerCanonSel);

    if (validSelections.indexOf(playerCanonSel) < 0) {
        return 'Illegal input! You can only input "Rock", "Paper" or "Scissors"'
    }

    if (playerCanonSel === computerCanonSel) {
        return 'We draw! We have the same choice'
    }

    if (playerCanonSel === 'ROCK' && computerCanonSel === 'SCISSORS') {
        return 'You Win! Rock beats Scissors'
    } else if (playerCanonSel === 'PAPER' && computerCanonSel === 'ROCK') {
        return 'You Win! Paper beats Rock'
    } else if (playerCanonSel === 'SCISSORS' && computerCanonSel === 'PAPER') {
        return 'You Win! Scissors beats Paper'
    } else {
        return 'Sorry, You Lost!'
    }
}

function game (numPlay) {
    let nWin = 0;
    for (let i=0; i<numPlay; i++) {
        let playerSelection = prompt('Enter "Rock", "Paper" or "Scissors":');

        if (playerSelection == null) {
            console.log('EXIT...');
            break
        }
        const computerSelection = computerPlay();
        const ret = playRound(playerSelection, computerSelection);
        console.log(ret);
        if (ret.startsWith('You Win!')) {
            nWin++;
        }
    }
    console.log('You won ' + nWin + ' out of ' + numPlay + ' games')
}