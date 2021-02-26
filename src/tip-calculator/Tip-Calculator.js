import React, { useState } from 'react'
import Feedback from './Feedback'
import Form from './Form'
import Results from './Results'
import './Tip-Calculator.css'

const TipCalculator = () => {
  const [results, setResults] = useState(null);
  const [feedback, setFeedback] = useState('');

  const getResults = (bill, share, rate) => {

    bill = parseFloat(bill);
    share = parseFloat(share);
    rate = parseFloat(rate);

    const tip = (bill * rate) / 100; 
    const total = tip + bill;
    const each = total / share;

    const results = {
      tip: tip.toFixed(2),
      total: total.toFixed(2),
      each: each.toFixed(2)
    }

    setResults(results);
  }

  const sendFeedback = (bill, share, rate) => {

  }

  return (
    <div className="tip-calculator">
      <h1>TIP CALCULATOR</h1>
      {feedback && <Feedback />}
      <Form setResults={setResults} getResults={getResults} results={results}/>
      {results && <Results results={results}/>}
    </div>
  )
}

export default TipCalculator