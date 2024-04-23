import { useState, useEffect, useCallback } from'react'

const OptimizedComponent = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(prevState => prevState + 1)
    console.log('handleClick', count)
  }, [])

  useEffect(() => {
    console.log('handleClick create')
  }, [handleClick])

  return (
      <div>
          <h3>Count: {count}</h3>
          <button onClick={handleClick}>Click me</button>
      </div>
  )
}

export default OptimizedComponent