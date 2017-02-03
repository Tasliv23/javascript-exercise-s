function createAcronym(string) {
    return string.split(" ")
        .map(function(szo) {
            return szo.charAt(0).toUpperCase();
        })
        .join("");
};