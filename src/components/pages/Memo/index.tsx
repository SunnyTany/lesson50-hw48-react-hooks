import { useState } from "react"
import { MemoizedCounter, MemoizedSetText } from "../../use-memo"
import OptimizedComputeComponent from "../../use-useMemo/OptimizedComponent"

const CounterPage = () => {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')

  return (
    <div>
      <h1>Counter Page</h1>
      <MemoizedCounter />
      <hr/>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <p>{text}</p>
      <hr/>
      <input type="text" value={text1} onChange={e => setText1(e.target.value)} />
      <MemoizedSetText text={text1} />
      <hr/>
      <OptimizedComputeComponent/>
    </div>
  )

}	  

export default CounterPage