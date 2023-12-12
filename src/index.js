import readlineSync from 'readline-sync';

const maxRounds = 3;

export const runGame = (description, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`); 
  console.log(description);

  for (let round = 1; round <= maxRounds; round += 1) {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`); 
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); 
      console.log(`Let's try again, ${userName}!`); 
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};