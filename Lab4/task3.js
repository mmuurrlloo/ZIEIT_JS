function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
  }
  return str;
}

console.log(truncate("Що я хотів би розповісти на цю тему:", 20)); 
console.log(truncate("Всім привіт!", 20));                         