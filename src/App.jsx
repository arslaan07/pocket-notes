import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ContentArea from './components/ContentArea'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="groupname" element={<ContentArea />} />
      </Route>
    </Routes>
  )
}

export default App
