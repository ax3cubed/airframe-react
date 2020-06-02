export function isUnanswered(answer) {
  return typeof answer !== 'number' || answer === undefined
}

export function getUnanswered(answers) {
  return answers.filter(isUnanswered)
}

export function calculatePoints(answers, questionData, maxIndex = 6) {
  return answers.reduce((acc, answer, index) => {
    const points = questionData[index].isPositive ? answer : maxIndex - answer
    return acc + points
  }, 0)
}

export function calculateRating(points, totalPoints) {
  return Math.round((100 * points) / totalPoints)
}

export function isHighlighted(state, index) {
  return state.turnOnHighlight && isUnanswered(state.question[index])
}

export function calculateProgress(questionsRemaining, totalQuestions) {
  return (totalQuestions - questionsRemaining) / totalQuestions
}

export function getInitialAnswers(answersFromStorage, totalQuestions) {
  return answersFromStorage || [...Array(totalQuestions)]
}

 