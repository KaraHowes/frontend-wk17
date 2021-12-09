import React from 'react'
import styled from 'styled-components';

import Header from './components/Header'
import Fetch from './components/Fetch' 

const Main =styled.section`
width: 100%;
margin: 0
max-width: 1200px;`
export const App = () => {
  return (
    <Main>
      <Header/>
      <Fetch />
    </Main>
  )
}
