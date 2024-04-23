import { useReducer } from 'react'

interface CounterState {
  count: number
}

interface Action {
  type: 'increment' | 'decrement' |'reset'
}

const initialState: CounterState = {
  count: 0
}

const COUNTER_INCREMENT = 'increment'
const COUNTER_DECREMENT = 'decrement'
const COUNTER_RESET ='reset'

function counterReducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case COUNTER_RESET:
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const increment = () => dispatch({type: COUNTER_INCREMENT})
  const decrement = () => dispatch({type: COUNTER_DECREMENT})
  const reset = () => dispatch({type: COUNTER_RESET})

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter