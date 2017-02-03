function gigaSecond(megadottDatum) {


    var datum = new Date(megadottDatum);
    var a = new Date(datum.getTime() + 1000000000000);
    var b = a.toString();

    return (b);
}