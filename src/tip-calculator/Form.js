import React, { useState, useRef } from 'react'

const Form = ({getResults, results, setResults}) => {
  const [bill, setBill] = useState('');
  const [share, setShare] = useState('');
  const [rate, setRate] = useState('');

  const firstInput = useRef();

  const newCalculation = () => {
    setBill('');
    setShare('');
    setRate('');
    setResults(null);
    firstInput.current.disabled = null;
    firstInput.current.focus();      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!bill || !share || !rate) return;
    getResults(bill, share, rate);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>How much was your bill?</label>
        <input 
          ref={firstInput} 
          type="number" 
          value={bill} 
          onChange={(e) => setBill(e.target.value)} 
          disabled={results ? true : null}/>
      </div>
      <div>
        <label>How many people sharing the bill?</label>
        <input 
          type="number" 
          value={share} 
          onChange={(e) => setShare(e.target.value)} 
          disabled={results ? true : null}/>
      </div>
      <div>
        <label>How was your service?</label>
        <select 
          value={rate} 
          onChange={(e) => setRate(e.target.value)} 
          disabled={results ? true : null}>
          <option value="">Choose</option>
          <option value="20">Great 20%</option>
          <option value="10">Good 10%</option>
          <option value="2">Bad 2%</option>
        </select>
      </div>
      {!results && 
        <input type="submit" value="Calculate"/>}
      {results && 
        <button className="btn" onClick={newCalculation}>
        New Calculation
        </button>}
    </form>
  )
}

export default Form