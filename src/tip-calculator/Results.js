import React from 'react'

const Results = ({results}) => {
  return (
    <div className="results">
      <p>Tip amount: $ {results.tip}</p> 
      <p>Total amount: $ {results.total}</p>
      <p>Each person owes: $ {results.each}</p>
    </div>
  )
}

export default Results