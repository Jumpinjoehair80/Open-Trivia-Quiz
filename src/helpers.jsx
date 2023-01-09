export const shuffleAnswers = (results) => {

  const unshuffledAnswers = [
    results.correct_answer,
    ...results.incorrect_answers
  ]

  return unshuffledAnswers
}

// return unshuffledAnswers.map(answer => ({sort: Math.random(), value: answer})).sort((a,b) => a.sort - b.sort).map(obj => obj.value)
