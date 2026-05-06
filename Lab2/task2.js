function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true; 
}

// Перевірка[cite: 22]:
let schedule = {};
console.log(isEmpty(schedule)); 
schedule["8:30"] = "Вставай";
console.log(isEmpty(schedule)); 