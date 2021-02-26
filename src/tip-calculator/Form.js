import React, { useState } from 'react'

const Form = ({getResults}) => {
  const [bill, setBill] = useState('');
  const [share, setShare] = useState('');
  const [rate, setRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    getResults(bill, share, rate);

    console.log(bill, share, rate);

    // setBill('');
    // setShare('');
    // setRate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>How much was your bill?</label>
        <input type="number" value={bill} onChange={(e) => setBill(e.target.value)}/>
      </div>
      <div>
        <label>How many people sharing the bill?</label>
        <input type="number" value={share} onChange={(e) => setShare(e.target.value)}/>
      </div>
      <div>
        <label>How was your service?</label>
        <select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option value="">Choose</option>
          <option value="20">Great 20%</option>
          <option value="10">Good 10%</option>
          <option value="2">Bad 2%</option>
        </select>
      </div>
      <input type="submit" value="Calculate"></input>
    </form>
  )
}

export default Form