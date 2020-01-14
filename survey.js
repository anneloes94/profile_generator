const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";
let activity = "";

rl.question("What's your name? ", (answerName) => {
  // // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  // return answerName;
  rl.question("What's an activity you like doing? ", (answerAct) => {
    rl.question("What do you listen to while doing that ", (answerListen) => {
      rl.question("Which meal is your favourite? ", (answerMeal) => {
        rl.question("What is your favourite thing to eat for that meal? ", (answerFood) => {
          rl.question("What sport is your absolute favourite? ", (answerSport) => {
            rl.question("What is your superpower (what are you amazing at)? ", (answerPower) => {
              console.log(`${answerName} loves listening to ${answerListen} while ${answerAct}, devouring ${answerFood} for ${answerMeal}, prefers ${answerSport} over any other sport, and is amazing at ${answerPower}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});


