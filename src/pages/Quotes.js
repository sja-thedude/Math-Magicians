import React, { useState, useEffect } from 'react';
import QuoteData from '../components/QuoteData';
import '../styles/Quotes.css';

function Quotes() {
  const quotes = QuoteData();
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const RandomQuote = quotes[randomIndex];

    setQuote(RandomQuote.quote);
    setAuthor(RandomQuote.author);
  });

  return (
    <section className="page-quote">
      <p>{quote}</p>
      <h3>{`- ${author}`}</h3>
    </section>
  );
}

export default Quotes;
