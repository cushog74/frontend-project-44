


const generateRandomNumber = () => Math.floor(Math.random() * 100); // Генерация случайного числа
const generateRandomOperator = () => ['+', '-', '*'][Math.floor(Math.random() * 3)]; // Генерация случайного оператора

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return NaN;
  }
};

const playBrainCalc = () => {
  console.log('Welcome to the Brain Calc game!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i++) {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    const operator = generateRandomOperator();

    const question = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${question}`);

    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    const correctAnswer = calculate(number1, operator, number2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default playBrainCalc;


