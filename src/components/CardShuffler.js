"use client";

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

function deckBuilder(deckArray) {

    let spreadArray = [];

    for (let i = 0; i < deckArray.length; i++) {
        deckArray[i] = shuffle(deckArray[i]);
        spreadArray.push(deckArray[i][0]);
    }

    spreadArray = shuffle(spreadArray);

    return spreadArray;

}
