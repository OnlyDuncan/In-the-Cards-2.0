"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions/cardActions';

export default function HomePage() {
  const dispatch = useDispatch();
  const { cardArray, loading, error } = useSelector(state => state.cards);

  useEffect(() => {
    if (cardArray.length === 0) {
      dispatch(fetchCards());
    }
  }, [dispatch, cardArray]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards; {error}</div>;

  console.log(cardArray);

  return (
    <div className="body relative" style={{ backgroundColor: "#969696" }}>
      <div className="h-full w-full relative flex-col item-center justify-center m-auto" style={{ height: "100vh", backgroundColor: "#969696", margin: "0" }}>
        <div className="flex justify-center" style={{ backgroundColor: "#969696" }}>
          {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
              {cardArray.map(({ cardName, data }) => (
                data.map(({ Title, Image }) => (
                  <div
                      key={Title}
                  >
                      <img
                            src={`/Images/${Image}.webp`}
                            width="0"
                            height="0"
                            sizes="100vh"
                            className={`h-full w-auto`}
                            alt="Tarot Card"
                      />
                  </div>
                ))
              ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
