// This function passed all the tests.
function createPhoneNumber(numbers) {
    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ')');
    numbers.splice(5, 0, ' ');
    numbers.splice(9, 0, '-');
    let r = "";
    for (let i = 0; i < numbers.length; i++) {
        r += numbers[i];
    }
    return r;
}
let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(t))