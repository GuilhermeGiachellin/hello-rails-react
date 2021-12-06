import React from "react"
import { Route, Routes } from 'react-router-dom'
import Messages from './messages/Messages'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Messages />}/>
    </Routes>
  )
}

export default App