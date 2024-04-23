import { memo } from 'react'
import Counter from "../use-useReducer/Counter"
import SetText from "./SetText"

export const MemoizedCounter = memo(Counter)
export const MemoizedSetText = memo(SetText)