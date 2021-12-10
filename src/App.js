import React from 'react'
import styled from 'styled-components';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header'
import Fetch from './components/Fetch' 
import CategoryWinners from './components/CategoryWinners'

const Main =styled.section`
width: 100%;
margin: 0
max-width: 1200px;`
export const App = () => {
  return (
    <Main>
       <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/category/:category" element={<CategoryWinners />} />
      </Routes>
      </Router>
     
      
    </Main>
  )
}
