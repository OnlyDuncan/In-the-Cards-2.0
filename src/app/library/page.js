"use client";

import React, { useEffect } from 'react';
import Header from '../../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cardActions';
import Image from 'next/image';
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

  // console.log("Library Deck:", deck);
  
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

  console.log("Filtered Deck:", filteredDeck);

  return (
    <div>
      <Header />
      <div>This is the library page.</div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
        {sections.map(({ title, start, end }) => (
          <div key={title} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5">
              {filteredDeck.slice(start, end + 1).map((card) => (
                // <div
                //   key={card.Title}
                //   className="relative"
                // >
                //   <Image
                //     src={`/Images/${card.Image}.webp`}
                //     alt={`Tarot Card`}
                //     layout="responsive"
                //     width={250}
                //     height={750}
                //     className="object-cover"
                //   />
                //   <div className="text-center mt-2 text-black">{cleanTitle(card.Title)}</div>
                // </div>

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