const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(function(a, b) {
        console.log(a, b);
        return a + b;
    },
    initialValue
);

console.log(sumWithInitial);
// Expected output: 10