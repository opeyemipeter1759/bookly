import React from 'react'
import Navbar from '../components/navbar'

function PageLayout({children}) {
  return (
      <>
          <Navbar/>
          {children}
      </>
  )
}

export default PageLayout