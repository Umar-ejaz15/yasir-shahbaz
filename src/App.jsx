import React from 'react'
import Page1 from './pages/Page1'

import LocomotiveScroll from 'locomotive-scroll';
const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w'>
      <Page1/>
    </div>
  )
}

export default App
