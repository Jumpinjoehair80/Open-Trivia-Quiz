import { createContext, useReducer } from "react";
import { results } from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
  results,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answer: shuffleAnswers(results[0]),
  currentAnswer: "",
} 

const reducer = (state, action) => {
  switch(action.type){
    case 'SELECT_ANSWER': {
      const correctAnswerCount = action.payload === state.results[state.currentQuestionIndex].correct_answer ? state.correctAnswerCount + 1 : state.correctAnswerCount
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount
      }
    }
    case 'NEXT_QUESTION': {
      const showResults = state.currentQuestionIndex === state.results.length - 1
      const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
      const answer = showResults ? [] : shuffleAnswers(state.results[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answer,
        currentAnswer: ""
      }
    }
    // case 'RESTART': {
    //   return initialState
    // }
    case 'DATA': {
      return {
        ...state,
        results: action.payload,
        answer: action.payment
      }
    }
    default: 
      return state
  }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
  const value = useReducer(reducer, initialState)
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}