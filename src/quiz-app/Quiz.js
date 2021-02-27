import React, { useState } from 'react'
import './Quiz.css'
import questions from './questions' 
import ProgressBar from './ProgressBar';

const Quiz = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  // const [quizEnded, setQuizEnded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const quizLength = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const next = () => {
    //next question
    setCurrentQuestionIndex(current => current + 1);
    //increments score if the user selected the correct answer
    if(currentQuestion.answerKey === +selectedChoice) setScore(score => score + 1)
    // console.log(selectedChoice)
    console.log(score)
  }



  return (
    <div className="quiz">
      {/* question */}
      <h2>{currentQuestion.question}</h2>
      {/* tracker */}
      <div className="tracker">{currentQuestionIndex + 1} of 5</div>
      {/* progress bar */}
      <ProgressBar current={currentQuestionIndex} length={quizLength}/>
      {/* choices */}
      <div className="tagline">Pick an option below!</div>
      <div className="choices">
        {currentQuestion.choices.map((choice, index) => (
          <label key={index}>
          {choice}
          <input type="radio" value={index} onChange={(e) => setSelectedChoice(e.target.value)} name="choice"/> 
        </label>
        ))}
      </div>
      {/* buttons */}
      <button onClick={next}>Next</button>
      <button>Restart</button>
    </div>
  )
}

export default Quiz