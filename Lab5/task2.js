const readline = require('readline/promises');

async function sumInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let numbers = [];

  while (true) {
    let value = await rl.question("Введіть число: ");

    if (value === null || value === "" || !isFinite(value)) {
      break;
    }

    numbers.push(Number(value));
  }

  rl.close();

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

sumInput().then(sum => {
  console.log("Сума введених чисел: " + sum);
});