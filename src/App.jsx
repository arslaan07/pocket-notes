import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ContentArea from './components/ContentArea'
import Layout from './components/Layout'
import useDisclouse from './hooks/useDisclouse'

const App = () => {
  const { onOpen, isOpen, onClose} = useDisclouse()
  
  return (
    <Routes>
      <Route path='/' element={<Layout onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>}>
        <Route index element={<Home />} />
        <Route path="groupname" element={<ContentArea />} />
      </Route>
    </Routes>
  )
}

export default App
