
import { db } from '../utils/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

async function CardPicker() {
    const orientations = ["Upright", "Reversed"];

    const cardNames = [
        "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", 
        "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", 
        "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", 
        "The Tower", "The Star", "The Moon", "The Sun", "Judgement", 
        "The World", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", 
        "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", 
        "Knight of Swords", "Queen of Swords", "King of Swords", "Ace of Wands", "Two of Wands", "Three of Wands", 
        "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", 
        "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Cups", 
        "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", 
        "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", 
        "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", 
        "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", 
        "Queen of Pentacles", "King of Pentacles"
    ];

    let cardArray = [];
    console.log("Starting to fetch cards...");

    for (const cardName of cardNames) {
        let tempArray = [];
        console.log(`Fetching card data for: ${cardName}`);

        for (const orientation of orientations) {
            const cardRef = doc(db, "cards", cardName, cardName, `${cardName} (${orientation})`);
            try {
                const cardSnap = await getDoc(cardRef);
                const cardData = cardSnap.data();
                if (cardData) {
                    tempArray.push(cardData);
                    console.log(`Fetched data for ${cardName} (${orientation}):`, cardData);
                } else {
                    console.log(`No data found for ${cardName} (${orientation})`);
                }
            } catch (error) {
                console.error(`Error fetching card data for ${cardName} (${orientation}):`, error);
            }
        }

        if (tempArray.length > 0) {
            cardArray.push({ cardName, data: tempArray });
        }
    }

    console.log("Finished fetching cards:", cardArray);

    return cardArray;
}

export default async function CardFetcher() {
    let cardArray = await CardPicker();

    return cardArray;
}