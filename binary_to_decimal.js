function binary(binaryString) {
    var decimalNum = 0;

    binaryString.split("").forEach(function(element, index) {

        decimalNum += element * Math.pow(2, [binaryString.lenght()]--);
    })

    return decimalNum;
}