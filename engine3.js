function createPhoneNumber(numbers) {
    let result = [];
    let mainR = "";

    for (let i = 0; i < numbers.length; i++) {
        if (i == 2) {
            result.push('(');
        } else {
            result.push(numbers[i]);
        }
    }
    return result;
}
let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(t))