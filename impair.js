
function findOdd(number) {
    let count = {};
    for (let i = 0; i < number.length; i++) {
        count[number[i]] = count[number[i]] + 1;
    }

