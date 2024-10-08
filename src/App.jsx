import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import ContentArea from './components/ContentArea'
import Layout from './components/Layout'
import useDisclouse from './hooks/useDisclouse'

const App = () => {
  const { onOpen, isOpen, onClose} = useDisclouse()
  const [selectedGroup, setSelectedGroup] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if(selectedGroup) {
      navigate(`/group/id=${selectedGroup}`)
    }
  }, [selectedGroup])
  
  console.log(selectedGroup)
  return (
    <Routes>
      <Route path='/' element={<Layout onOpen={onOpen} isOpen={isOpen} 
      onClose={onClose} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />}>
        <Route index element={<Home />} />
        <Route path="group/:id" element={<ContentArea selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />} />
      </Route>
    </Routes>
  )
}

export default App
