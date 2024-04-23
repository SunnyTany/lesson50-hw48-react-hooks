import { useState, useMemo } from'react'

const OptimizedComputeComponent = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const computeExpensiveValue = (num: number) => {
    console.log('computeExpensiveValue')
    let value = num
    for (let i = 0; i < 1000000000; i++) {
      value += num
    }
    console.log('computeExpensiveValue', value)
    return value
  }

  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(count)
  }, [count])

  return (
    <div>
        <h3>Compute component</h3>
        <p>Count: {count}</p>
        <p>Item: {item}</p>
        <p>ExpensiveValue: {expensiveValue}</p>
        <button onClick={() => setCount(count + 1)}>+count</button>
        <button onClick={() => setItem(item + 1)}>+item</button>
    </div>
  )
}

export default OptimizedComputeComponent