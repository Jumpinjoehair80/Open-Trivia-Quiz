import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Question from "./Question"
// import getInfo from "../data"
import axios from "axios"
import { useEffect } from "react"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)


  useEffect(() => {
    axios
    .get('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(res => {
      const result = res.data.results;

      // set user info
      dispatch({
        type: "DATA",
        payload: result
      });
    })
  }, [])


    console.log('quiz state result', quizState.results)


  return (
    <div className="quiz--container">
      {quizState.showResults && (
      <div className="end--container">
        <h1>Great Job!!!</h1>
        <h3>You got {quizState.correctAnswerCount} correct!!</h3>
        <div className="button" onClick={() => dispatch({type: 'RESTART'})}>Restart Quiz</div>
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