import { useState } from "react"
import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Question from "./Question"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="quiz--container">
      {quizState.showResults && (
      <div>
        <div>Great Job!!!</div>
        <div>You got {quizState.correctAnswerCount} correct!!</div>
        <div onClick={() => dispatch({type: 'RESTART'})}>Restart Quiz</div>
      </div>
    )}
      {!quizState.showResults && ( 
        <div className="quiz-section">
          <h1>Question {quizState.currentQuestionIndex + 1} / {quizState.results.length}</h1>
          <Question />
          <div className="next" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next Question</div>
        </div>
      )}
    </div>
  )
}

export default Quiz