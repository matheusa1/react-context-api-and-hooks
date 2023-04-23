import * as actionTypes from './actionTypes'

export const buildActions = (dispatch) => {
  return {
    increment: () => dispatch({ type: actionTypes.INCREMENT }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCount: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrement: () => asyncIncrement(dispatch),
    asyncError: () => asyncError(dispatch),
  }
}

const asyncIncrement = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START })

  return await new Promise((resolve) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_END })
      resolve('done')
    }, 2000)
  })
}

const asyncError = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START })

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR })
      reject(new Error('An error occurred'))
    }, 2000)
  })
}
