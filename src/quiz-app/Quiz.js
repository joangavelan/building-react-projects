import React, { useState } from 'react'
import './Quiz.css'
import ProgressBar from './ProgressBar'
import { questions } from './questions'

const Quiz = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const currentQuestion = questions[currentIndex];
  const choices = currentQuestion.choices;
  const lastQuestion = currentIndex === questions.length - 1;

  const next = () => {
    //increments score if user choice is correct
    if(currentQuestion.answerKey === +selectedChoice) setScore(score => score + 1)
    //If current question is the last question this trigger will end the quiz
    if(lastQuestion) {
      setQuizEnded(true);
      return;
    } 
    //back to null so radio buttons re-render unchecked
    setSelectedChoice(null);
    //next question
    selectedChoice 
      ? setCurrentIndex(current => current + 1)
      : alert('Choose your answer');
  }

  const restart = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizEnded(false);
    setSelectedChoice(null);
  }

  const feedback = score > Math.floor(questions.length / 2) ? 'Good Job!' : 'You can do better';

  return (
    <div className="quiz">
      {/* question */}
      <h2>{quizEnded ? feedback : currentQuestion.question}</h2>
      {/* tracker */}
      <div className="tracker">
        {quizEnded 
          ? `You answered correctly ${score} out of 5 questions`
          : `${currentIndex + 1} of 5`}
      </div>
      {/* progress bar */}
      <ProgressBar 
        current={currentIndex} 
        length={questions.length} 
        quizEnded={quizEnded}/>
      {/* tagline */}
      <div className="tagline">
        {quizEnded ? 'Completed!' : 'Pick an option below!'}
      </div>
      {/* choices */}
      <div className="choices">
        {choices.map((choice, index) => (
          <label key={index}>
          {choice}
          <input 
            type="radio" 
            value={index}
            checked={selectedChoice === index.toString() ? true : false}
            onChange={(e) => setSelectedChoice(e.target.value)} 
            name="choice"
            disabled={quizEnded ? true : null}/> 
        </label>
        ))}
      </div>
      {/* buttons */}
      {!quizEnded && <button onClick={next}>Next</button>}
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default Quiz