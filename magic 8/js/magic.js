let userName = 'tigre';
const userQuestion = '?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(`${userName} asked: ${userQuestion}`);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'caannot predict now';
    break;
  case 4:
    eightBall = 'ddo not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'signs point to yes';
}

console.log(`Magic Eightball: ${eightBall}`); 