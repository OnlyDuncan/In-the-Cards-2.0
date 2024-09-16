"use client";

import React, { useEffect } from 'react';
import Header from '../../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cardActions';
import CardContentsLibrary from '@/components/CardContentsLibrary.js';

export default function Library() {

  const dispatch = useDispatch();
  const { cardArray, loading, error } = useSelector(state => state.cards);

  useEffect(() => {
    if (!loading && cardArray.length === 0) {
      dispatch(fetchCards());
      console.log("Dispatch called.");
    }
  }, [dispatch, loading, cardArray.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards; {error}</div>;

  const deck = cardArray;
  
  const filteredDeck = deck.flatMap(card =>
    card.data.filter(item => item.Orientation === 'Upright')
  );

  const sections = [
    { title: "Major Arcana", start: 0, end: 21 },
    { title: "Suite of Swords", start: 22, end: 35 },
    { title: "Suite of Wands", start: 36, end: 49 },
    { title: "Suite of Cups", start: 50, end: 63 },
    { title: "Suite of Pentacles", start: 64, end: 77 }
  ];

  return (
    <div className="min-h-screen w-full relative flex-col item-center justify-center m-auto" style={{ backgroundColor: "#969696", paddingBottom: '50px' }}>
      <Header />
      <div className="flex justify-center w-full px-4" style={{ marginTop: "50px" }}>Library</div>
      <div className='w-full flex flex-col items-center gap-12 mt-8 px-4' style={{ marginTop: "30px" }}>
        {sections.map(({ title, start, end }) => (
          <div key={title} className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {filteredDeck.slice(start, end + 1).map((card) => (
                <CardContentsLibrary
                  key={card.Title}
                  Title={card.Title}
                  Orientation={card.Orientation}
                  Image={card.Image}
                  Meaning={card.Meaning}
                  Deck={deck}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}