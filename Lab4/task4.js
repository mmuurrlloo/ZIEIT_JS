function strikeStr(str) {
  if (!str) return str;
  
  const words = str.split(' ');
  const groups = [];
  
  for (let i = 0; i < words.length; i += 3) {
    groups.push(words.slice(i, i + 3).join(' '));
  }
  
  return groups.join(' \n ');
}

console.log(strikeStr("Що я хотів би розповісти на цю тему:")); 

console.log(strikeStr("Всім привіт!")); 