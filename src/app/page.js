"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions/cardActions';
import Tabs from '../components/Tabs.js';
import Header from '../components/Header.js';

export default function HomePage() {
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
    <div className="body relative" style={{ backgroundColor: "#969696" }}>
      <div className="h-full w-full relative flex-col item-center justify-center m-auto" style={{ height: "100vh", backgroundColor: "#969696", margin: "0" }}>
        <Header />
        <div className="flex justify-center">
          <h1>In the Cards</h1>
        </div>
        <div className="flex justify-center">
          <img
            src='/Images/CardBack.webp'
            width="100vw"
            // height="auto"
            alt="Tarot Card Deck"
          />
        </div>
        <div className="flex justify-center">
          <Tabs />
        </div>
      </div>
    </div>
  )
}
