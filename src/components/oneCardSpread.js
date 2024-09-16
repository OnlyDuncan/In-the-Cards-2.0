import React, { useState, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import deckBuilder from './CardShuffler.js';
import CardContents from './CardContents.js';
import { useSelector } from 'react-redux';
import deepEqual from 'fast-deep-equal';

export default function OneCardSpread () {

    const deck = useSelector(state => state.cards.cardArray);
    const shuffledDeck = useMemo(() => { console.log('Rebuilding shuffled deck'); return deckBuilder(deck);}, [deepEqual(deck, deck)]);

    console.log('Deck:', deck);
    console.log('Shuffled Deck:', shuffledDeck);

    const [showFrontPresent, setShowFrontPresent] = useState(true);

    return (

        <div className="flex justify-center align-center">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col justify-center mb-12 md:mb-0">
                    <div className="md:ml-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontPresent}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...shuffledDeck[0]} onClick={() => {
                                    setShowFrontPresent(false);
                                }} />
                            </CSSTransition>
                            <div className="flex justify-center text-center text-white mt-2 whitespace-nowrap">
                                The Present
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}