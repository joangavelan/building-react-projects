import React from 'react'

const ProgressBar = ({current, length, quizEnded}) => {

  const getPercentage = (current, total) => (current * 100) / total; 

  return (
    <div className="bar">
      <div style={{width: quizEnded ? '100%' : `${getPercentage(current, length)}%`}} className="progress-bar"/>
    </div>
  )
}

export default ProgressBar