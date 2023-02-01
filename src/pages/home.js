import React from 'react'
import { CustomLink } from '../components/btn'
import PageLayout from '../layout/default-layout'


 const HeroSession = ({heroText, paragraph,}) => {
  return (
      <div>
          <h1>
              {heroText} <span>easy</span> {heroText}
          </h1> 
          <p>
              {paragraph}
          </p>
          <CustomLink
              label="Sign Up"
              to="/register"
              className='btn-green'
          />
    </div>
  )
}


function Home() {
  return (
      <PageLayout>
          <div className='container mt-5' >    
          <HeroSession
              heroText="Learning made easy and fun."
              paragraph="Learn at your pace and with ease without pressure
              and connect to tutors who will help achieve your 
              educational goals"
          />
          </div>
    </PageLayout>
  )
}

export default Home