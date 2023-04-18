function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join("");
    const firstThree = numbers.slice(3, -4).join("");
    const lastFour = numbers.slice(6).join("");
    return `(${areaCode}) ${firstThree}-${lastFour}`;
}