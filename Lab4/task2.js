function checkSpam(str) {
  if (!str) return false;
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('росі') || lowerStr.includes('xxx');
}

console.log(checkSpam('поїхати до росії')); // true
console.log(checkSpam('free xxxxx'));        // true
console.log(checkSpam("innocent rabbit"));  // false