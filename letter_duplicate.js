function letterDuplicate(word) {
    for (var i = 0; i < word.length; i++) {
        if (i != szo.lastIndexOf(word.charAt(i))) {
            return true;
        } else {
            return false;


        }
    }
}