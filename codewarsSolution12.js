function createPhoneNumber(numbers) {


    var areaCode = numbers.slice(0, 3).join("");
    var exchange = numbers.slice(3, 6).join("");
    var lineNumb = numbers.slice(6, 10).join("");

    var finalNumber = "(" + areaCode + ")" + " " + exchange + "-" + lineNumb;

    return finalNumber.toString();
}