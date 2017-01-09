import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../containers/MainContainer'

function Home () {
  return (
    <MainContainer>
      <h1 id="eventsTitle">TEC Events</h1>
      <p className='lead'>Get in line or get left behind</p>
      <ul id="eventsList">

      </ul>
    </MainContainer>
  )
}

export default Home
