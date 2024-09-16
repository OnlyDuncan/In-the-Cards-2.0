"use client";

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cardActions';
import Image from 'next/image';

export default function About() {

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

  return (
    <div className="min-h-screen w-full relative flex-col item-center justify-center m-auto" style={{ backgroundColor: "#969696", paddingBottom: '50px' }}>
      <Header />
      <div className="flex justify-center" style={{ marginTop: '50px' }}>About</div>
      <div className="flex justify-center">
          <Image
              src={`/Images/AboutImage.png`}
              width={250}
              height={300}
              className="h-60 w-auto"
              style={{ marginTop: '30px' }}
              alt="Image of a pile of Tarot Cards"
          />
      </div>
      <div className="flex justify-center text-center mx-auto" style={{ width: '75%', marginTop: '50px' }}>
        Tarot cards, with their mysterious origins dating back to 15th century 
        Europe, have evolved from a simple card game into a powerful tool for 
        spiritual guidance and introspection. Originally used for leisurely 
        pastimes, their symbolism and imagery began to attract occultists and 
        mystics in the late 18th century, who saw deeper meanings in the 
        cards' designs.

        Today, tarot cards are primarily used for divination, providing insights 
        into one's past, present, and future through intricate spreads and 
        interpretations. Each card in the deck carries unique symbolism, 
        reflecting various aspects of the human experience, from love and 
        relationships to career and spirituality.

        In modern culture, tarot has transcended its mystical roots to become a 
        popular method of self-reflection and personal growth. Whether 
        seeking clarity on life's dilemmas or exploring spiritual paths, individuals 
        turn to tarot for its ability to offer perspective and empower decision- 
        making. Tarot readings are now accessible through professional 
        readers, online platforms, and personal study, making it a versatile and 
        valuable tool for navigating life's journey.

        Explore the wisdom of the tarot and uncover the insights it holds for 
        you. Embrace the ancient art of tarot to illuminate your path and 
        discover the hidden truths within.
      </div>
    </div>
  )
}