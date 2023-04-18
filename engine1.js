function createPhoneNumber(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i == 0) {
            result[i] = '(' + numbers[0];
        } else if (i == 4) {
            result[i] = ')' + numbers[4];
        } else if (i == 5) {
            result[i] = ' ' + numbers[5];
        } else if (i == 9) {
            result[i] = '-' + numbers[9];
        } else {
            console.log("i", i)
            console.log("before", result)
            result.push(numbers[i]);
            console.log("after", result)
        }
    }
    let mainR = "";
    for (let i = 0; i < result.length; i++) {

        mainR += result[i];
    }
    return mainR;
}
let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(t))