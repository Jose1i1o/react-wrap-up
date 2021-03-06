import { useState } from "react";

export const useCounterModified = ( initialState = 10 ) => {

  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter( counter + 1 )
  }

  const reduce = () => {
    setCounter( counter - 1 )
  }

  const reset = () => {
    setCounter(initialState)
  }

  return {
    counter,
    increment,
    reduce,
    reset
  }

}
