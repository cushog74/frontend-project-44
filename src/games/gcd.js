const readline = require('readline');
const { askQuestion, generateRandomNumber, gcd } = require('./index');

function playGame() {
  const questions = 3;
  let correctAnswers = 0;

  for (let i = 0; i < questions; i++) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);

    const question = `${num1} and ${num2}`;
    const userAnswer = parseInt(askQuestion(`Find the greatest common divisor of ${question}.`));
    const correctAnswer = gcd(num1, num2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log('Let\'s try again, Bill!');
    }
  }

  if (correctAnswers === questions) {
    console.log('Congratulations, Bill!');
  }
}

module.exports = playGame;


