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

export default function deckBuilder(deck) {

    const deckArray = JSON.parse(JSON.stringify(deck));
    let spreadArray = [];

    for (let i = 0; i < deckArray.length; i++) {
        const card = deckArray[i];

        if (card.data && Array.isArray(card.data)) {
            const shuffledData = shuffle(card.data);
            spreadArray.push(shuffledData[0]);
        } else {
            console.warn(`No data found for card "${card.cardName}" or data is not an array.`);
        }
    }

    spreadArray = shuffle(spreadArray);
    console.log("Spread Array:", spreadArray);

    return spreadArray;

}
