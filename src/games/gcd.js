
import { welcome, getUserName, congratulate, tryAgain } from '../src/cli.js';
import { gcd, isAnswerCorrect, getRandomNumber } from '../src/index.js';
const playGcdGame = () => {
  welcome();
  const name = getUserName();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const roundsCount = 3;
  let correctAnswersCount = 0;
  while (correctAnswersCount < roundsCount) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const correctAnswer = gcd(number1, number2);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isAnswerCorrect(userAnswer, correctAnswer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      tryAgain(userAnswer, correctAnswer, name);
      return;
    }
  }
  congratulate(name);
};
export default playGcdGame;

