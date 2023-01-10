import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"
import Answer from "./Answer"
import he from "he"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.results[quizState.currentQuestionIndex]

  return (
    <div>
      <div className="question">
        {he.decode(currentQuestion.question)}
      </div>
      <div>
        {quizState.answer.map((answer, index) => ( <Answer answerText={answer} key={index} index={index} currentAnswer={quizState.currentAnswer} correctAnswer={currentQuestion.correct_answer} onSelectAnswer={(answerText) => dispatch({type: 'SELECT_ANSWER', payload: answerText})}/>))}
      </div>
    </div>
  )
}

export default Question