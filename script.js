// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Game initialization logic here
});
let score = 0;

function updateScore(isCorrect) {
    const scoreElement = document.getElementById('score');
    if (isCorrect) {
        score += 10; // Points for correct answer
    } else {
        score -= 5; // Deduct points for incorrect answer
    }
    scoreElement.innerText = `Score: ${score}`;
}
function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value;
    const feedbackElement = document.getElementById('feedback');
    let isCorrect = false;

    if (userAnswer.trim() === '50') {
        feedbackElement.innerText = 'Correct! The original block reward was 50 bitcoins.';
        feedbackElement.style.color = 'green';
        isCorrect = true;
    } else {
        feedbackElement.innerText = 'Incorrect. Try again!';
        feedbackElement.style.color = 'red';
    }

    updateScore(isCorrect);
}

function checkMCQAnswer() {
    const selected = document.querySelector('input[name="mcq"]:checked');
    const mcqFeedback = document.getElementById('mcq-feedback');

    if (selected && selected.value === '2009') {
        mcqFeedback.innerText = 'Correct! Bitcoin was created in 2009.';
        mcqFeedback.style.color = 'green';
    } else {
        mcqFeedback.innerText = 'Incorrect. Try again!';
        mcqFeedback.style.color = 'red';
    }
}

function checkCryptoAnswer() {
    const cryptoInput = document.getElementById('crypto-input').value.toLowerCase();
    const cryptoFeedback = document.getElementById('crypto-feedback');
    let isCorrect = false;

    if (cryptoInput === 'ice') { // 'ice' is the decrypted word for the given binary sequence.
        cryptoFeedback.innerText = 'Correct! You decrypted the message.';
        cryptoFeedback.style.color = 'green';
        isCorrect = true;
    } else {
        cryptoFeedback.innerText = 'Incorrect. Try again!';
        cryptoFeedback.style.color = 'red';
    }

    updateScore(isCorrect);
}
function checkTransactionAnswer() {
    const transactionInput = parseFloat(document.getElementById('transaction-input').value);
    const transactionFeedback = document.getElementById('transaction-feedback');
    let isCorrect = false;

    // Correct answer is sending amount plus fee rate
    if (transactionInput === 0.5001) {
        transactionFeedback.innerText = 'Correct! The total transaction amount is 0.5001 BTC.';
        transactionFeedback.style.color = 'green';
        isCorrect = true;
    } else {
        transactionFeedback.innerText = 'Incorrect. Try again!';
        transactionFeedback.style.color = 'red';
    }

    updateScore(isCorrect);
}


function checkHistoryAnswer() {
    const historyInput = document.getElementById('history-input').value.toLowerCase();
    const historyFeedback = document.getElementById('history-feedback');
    let isCorrect = false;

    if (historyInput === 'satoshi nakamoto') {
        historyFeedback.innerText = 'Correct! Satoshi Nakamoto is the creator of Bitcoin.';
        historyFeedback.style.color = 'green';
        isCorrect = true;
    } else {
        historyFeedback.innerText = 'Incorrect. Try again!';
        historyFeedback.style.color = 'red';
    }

    updateScore(isCorrect);
}
function checkBlockAnswer() {
    const blockInput = parseInt(document.getElementById('block-input').value, 10);
    const blockFeedback = document.getElementById('block-feedback');
    let isCorrect = false;

    // Assuming 680000 had a specific number of transactions, for example, 2500
    if (blockInput === 2,875) {
        blockFeedback.innerText = 'Correct! Block 680000 had 2,875 transactions.';
        blockFeedback.style.color = 'green';
        isCorrect = true;
    } else {
        blockFeedback.innerText = 'Incorrect. The correct answer is 2500.';
        blockFeedback.style.color = 'red';
    }

    updateScore(isCorrect);
}


