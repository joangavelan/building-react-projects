import React from 'react'

const ProgressBar = ({current, length}) => {

  const getPercentage = (current, total) => (current * 100) / total; 

  return (
    <div className="bar">
      <div style={{width: `${getPercentage(current, length)}%`}} className="progress-bar"/>
    </div>
  )
}

export default ProgressBar
