const readline = require('readline');
const generateNumbers = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const playGame = () => {
  const num1 = generateNumbers();
  const num2 = generateNumbers();

  console.log(`Find the greatest common divisor of given numbers.`);
  console.log(`Question: ${num1} ${num2}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Your answer: ', (answer) => {
    const userAnswer = parseInt(answer, 10);
    if (gcd(num1, num2) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd(num1, num2)}'.`);
    }
    rl.close();
  });
};
module.exports = playGcdGame;


