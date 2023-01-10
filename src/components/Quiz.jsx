import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Question from "./Question"
import axios from "axios"
import { useEffect } from "react"
import he from "he"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    axios
    .get('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(res => {
      let result = res.data.results;
      const answers = [
        result[0].correct_answer,
        ...result[0].incorrect_answers
      ]

      dispatch({
        type: "DATA",
        payload: result,
        payment: answers
      });
    })
  }, [])  

  return (
    <div className="quiz--container">
      {quizState.showResults && (
      <div className="end--container">
        <h1>Great Job!!!</h1>
        <h3>You got {quizState.correctAnswerCount} correct!!</h3>
        {/* <div className="button" onClick={() => dispatch({type: 'RESTART'})}>Restart Quiz</div> */}
        {/* RELOADS WINDOW ON CLICK */}
        <div className="button" onClick={() => window.location.reload()}>Restart Quiz</div>
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