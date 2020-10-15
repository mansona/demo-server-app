console.log('Hello world!');

if (process.env.KEY_TO_UNIVERSE) {
  console.log('I can do anything.');
}

// After forking the repo:
//
//  - uncomment line 14
//  - commit changes
//  - push commit (check if GitHub Actions ran)
//  - make a pull request (check again if GitHub Actions ran)
//
// console.log(`The key to the universe is ${process.env.KEY_TO_UNIVERSE}.`);
