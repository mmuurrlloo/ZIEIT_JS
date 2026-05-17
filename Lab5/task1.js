let styles = ["Jazz", "Blues"];
console.log(styles.join(", "));

styles.push("Rock-n-Roll");
console.log(styles.join(", "));

styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles.join(", "));

let firstElement = styles.shift();
console.log(firstElement);
console.log(styles.join(", "));

styles.unshift("Rap", "Reggae");
console.log(styles.join(", "));