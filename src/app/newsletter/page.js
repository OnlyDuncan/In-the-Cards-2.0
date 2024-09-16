"use client";

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cardActions';
import { db, collection, addDoc } from '../../utils/firebase.js';

export default function Newsletter() {

  const dispatch = useDispatch();
  const { cardArray, loading, error } = useSelector(state => state.cards);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!loading && cardArray.length === 0) {
      dispatch(fetchCards());
      console.log("Dispatch called.");
    }
  }, [dispatch, loading, cardArray.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards; {error}</div>;
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {

      await addDoc(collection(db, 'emails'), {
        email: email,
        timestamp: new Date()
      });

      setMessage('Subscription successful!');
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full relative flex-col item-center justify-center m-auto" style={{ backgroundColor: "#969696", paddingBottom: '50px' }}>
      <Header />
      <div className="flex justify-center" style={{ marginTop: "50px" }}>Newsletter</div>
      <div className="flex justify-center" style={{ marginTop: "30px" }}>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            required
          />
          <button type="submit" style={{ marginTop: "20px" }}>Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}