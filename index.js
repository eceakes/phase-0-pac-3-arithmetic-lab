function add(a, b) {
return a + b;
}
function subtract(a, b){
return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
let number = 1;
function increment(n) {
    return (number += n);
}
function decrement(n) {
    let number = 1;
    return (n -= number);
}
function makeInt(string) {
    return parseInt(string, 10);
}
function preserveDecimal(string) {
    return parseFloat(string);
}