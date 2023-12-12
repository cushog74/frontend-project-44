import { getRandomNumber, getRandomOperator, calculate } from '../index.js';

const generateQuestion = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, operator, number2);
  return { question, correctAnswer };
};

const startCalcGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startCalcGame;

