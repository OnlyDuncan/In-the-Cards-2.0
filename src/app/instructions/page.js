"use client";

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cardActions';

export default function Instructions() {

  const dispatch = useDispatch();
  const { cardArray, loading, error } = useSelector(state => state.cards);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!loading && cardArray.length === 0) {
      dispatch(fetchCards());
      console.log("Dispatch called.");
    }
  }, [dispatch, loading, cardArray.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading cards; {error}</div>;

  const faqs = [
    { question: "One Card Spread Instructions", 
    answer: 
    `First, select the One Card Spread option. Next, think of a question or 
    issue you'd like guidance on. With that question or issue in your 
    mind's eye, click on the card. Click on the card again to view the 
    card's traditional meaning, and then reflect on it. Trust your intuition 
    and personal associations, and interpret the message the card is 
    trying to tell you.`
    },
    { question: "Three Card Spread Instructions", 
    answer: 
    `First, select the Three Card Spread option. Three Card Spreads have 
    multiple purposes. This reading uses the Past, Present, Future 
    format. It can offer insight about your life in general, or it can be 
    about a specific question or issue you may have. The first card 
    represents influences from the past that have led to the current 
    situation or issue. It can indicate events, experiences, or decisions 
    that have shaped your present circumstances. The second card 
    represents your current situation or the main issue you are dealing 
    with right now. It offers insights into what is happening in your life at 
    the present moment. The third card represents the potential 
    outcomes or developments that may occur in the future based on the 
    current path or trajectory. It provides guidance on what could 
    manifest if things continue as they are or if certain actions are taken. 
    With your question, issue, or concern in your mind's eye, click on the 
    cards to reveal them. Click on the cards again to view their traditional 
    meaning, and reflect on them. Trust your intuition and personal 
    associations, and interpret the message the cards are trying to tell 
    you.` 
    },
    { question: "Five Card Spread Instructions",
    answer: 
    `First, select the Five Card Spread option. Five Card Spreads have 
    multiple purposes. This reading uses the Cross format. It can offer 
    insight about your life in general, or it can be about a specific 
    question or issue you may have. The first card usually represents the 
    current situation or the central issue you're facing. It provides insight 
    into the circumstances or challenges at hand. The second card often 
    indicates the obstacles, difficulties, or challenges that you may 
    encounter related to the present situation. It helps identify what 
    might be blocking progress or causing concern. The third card offers 
    guidance, advice, or suggested actions to consider in response to 
    the challenges or issues presented in cards 1 and 2. It provides 
    insights into how to navigate the current situation. The fourth card 
    typically represents the potential outcome of the current path or 
    situation if things continue as they are. It can also indicate future 
    influences or developments related to the present circumstances. 
    The fifth card serves as an overall summary or clarification of the 
    reading. It synthesizes the messages from the previous cards and 
    offers additional insights or clarity on the situation. With your 
    question, issue, or concern in your mind's eye, click on the cards to 
    reveal them. Click on the cards again to view their traditional 
    meaning, and reflect on them. Trust your intuition and personal 
    associations, and interpret the message the cards are trying to tell 
    you.`
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div>
      <Header />
      <div>Instructions</div>
      <div>Remember that the Tarot is not about predicting the future in a deterministic sense, 
        but more about providing guidance and an opportunity for reflection of present problems 
        and potential outcomes. It is an invitation to positive introspection.
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};