import React from 'react'

const Results = ({results: {tip, total, each}}) => {
  return (
    <div className="results">
      <p>Tip amount: $ {tip}</p> 
      <p>Total amount: $ {total}</p>
      <p>Each person owes: $ {each}</p>
    </div>
  )
}

export default Results