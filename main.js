var Addition = (function () {
    function Addition() {
    }
    Addition.calcSum = function () {
        return Math.abs(this.numOne + this.numTwo);
    };
    Addition.numOne = 2;
    Addition.numTwo = -6;
    return Addition;
}());
console.log(Addition.calcSum());
//# sourceMappingURL=main.js.map