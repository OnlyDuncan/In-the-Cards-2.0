import React, { useState, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import deckBuilder from './CardShuffler.js';
import CardContents from './CardContents.js';
import { useSelector } from 'react-redux';
import deepEqual from 'fast-deep-equal';

export default function ThreeCardSpread () {

    const deck = useSelector(state => state.cards.cardArray);
    const shuffledDeck = useMemo(() => { console.log('Rebuilding shuffled deck'); return deckBuilder(deck);}, [deepEqual(deck, deck)]);

    console.log('Deck:', deck);
    console.log('Shuffled Deck:', shuffledDeck);

    const [showFrontPast, setShowFrontPast] = useState(true);
    const [showFrontPresent, setShowFrontPresent] = useState(true);
    const [showFrontFuture, setShowFrontFuture] = useState(true);

    return (

        <div className="flex justify-center align-center">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col justify-center mb-12 md:mb-0">
                    <div className="md:ml-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontPast}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...shuffledDeck[0]} onClick={() => {
                                    // console.log("This is the first card:", deck[0] )
                                    setShowFrontPast(false);
                                }} />
                            </CSSTransition>
                            <div className="flex justify-center text-center text-white mt-2 whitespace-nowrap">
                                The Past
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center mb-12 md:mb-0">
                    <div className="md:ml-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontPresent}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...shuffledDeck[1]} onClick={() => {
                                    setShowFrontPresent(false);
                                }} />
                            </CSSTransition>
                            <div className="flex justify-center text-center text-white mt-2 whitespace-nowrap">
                                The Present
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center mb-12 md:mb-0">
                    <div className="md:ml-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontFuture}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...shuffledDeck[2]} onClick={() => {
                                    setShowFrontFuture(false);
                                }} />
                            </CSSTransition>
                            <div className="flex justify-center text-center text-white mt-2 whitespace-nowrap">
                                The Future
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
