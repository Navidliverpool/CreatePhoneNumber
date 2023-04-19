// This function does not belong to this pseudocode. 
function reducee(a, b) {
    for (let i = 0; i < b.length; i++) {
        a += b[i];
    }
    return a;
}
const array1 = [1, 2, 3, 4];
let t = 0;
let result = reducee(t, array1);
console.log(result);