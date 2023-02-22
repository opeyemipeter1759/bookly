import React from 'react'
import Navbar from '../components/navbar'

function PageLayout({children}) {
  return (
      <div>
          <Navbar/>
          {children}
      </div>
  )
}

export default PageLayout