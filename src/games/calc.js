import readlineSync from 'readline-sync';
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

export default playBrainCalc;


