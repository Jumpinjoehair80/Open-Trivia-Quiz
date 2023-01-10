import he from "he"

const Answer = ({answerText, index, onSelectAnswer, currentAnswer, correctAnswer}) => {
  const letterMapping = ['A', 'B', 'C', 'D']
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer 
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer  
  const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : ''
  const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : ''
  const disabledClass = currentAnswer ? 'disabled-answer' : ''

  return (
    <div className={`button ${wrongAnswerClass}  ${correctAnswerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answerText)}>
      <div>{letterMapping[index]}. {he.decode(answerText)}</div>
    </div>
  )
}

export default Answer