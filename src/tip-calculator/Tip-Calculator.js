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

  const sendFeedback = (emptyInputs) => {
    if(emptyInputs.length > 1) {
      setFeedback('Please fill in the fields');
      return;
    }

    const emptyInput = emptyInputs[0];

    switch(emptyInput) {
      case 'bill':
        setFeedback('Please specify a bill amount');
        break;
      case 'share':
        setFeedback('Please specify how many people will pay the bill');
        break;
      case 'rate':
        setFeedback('You must select a service rate');
        break;
      default:
        setFeedback('Please fill in the fields');
    }
  }

  return (
    <div className="tip-calculator">
      <h1>TIP CALCULATOR</h1>
      {feedback && <Feedback feedback={feedback} setFeedback={setFeedback}/>}
      <Form 
        setResults={setResults} 
        getResults={getResults} 
        results={results}
        feedback={feedback}
        sendFeedback={sendFeedback}
        setFeedback={setFeedback}/>
      {results && <Results results={results}/>}
    </div>
  )
}

export default TipCalculator