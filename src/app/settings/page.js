"use client";

import React, { useEffect } from 'react';
import Header from '../../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cardActions';

export default function Settings() {

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
    <div>
      <Header />
      <div>This is the settings page.</div>
    </div>
  )
}