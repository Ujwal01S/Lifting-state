import React from 'react'

import { Overlay } from './components/UI/Overlay'
import { ExpenseCard } from './components/Expenses/ExpenseCard'

const App = () => {
  return (
    <Overlay>
        <ExpenseCard />
     
    </Overlay>
  )
}

export default App