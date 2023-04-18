if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

function createPhoneNumber(numbers) {
    var phoneNumber = "({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}"
        .format(numbers[0], numbers[1], numbers[2],
            numbers[3], numbers[4], numbers[5],
            numbers[6], numbers[7], numbers[8],
            numbers[9]);

    return phoneNumber;
}