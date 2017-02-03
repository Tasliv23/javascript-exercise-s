function wordCount(wordString) {
    var wordCount = {};
    wordString.split(" ").forEach(function(word) {
        if (!wordCount[word]) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    });
    wordCount = JSON.stringify(wordCount);

    return wordCount;
}