import React from 'react';
import { CustomLink } from '../components/btn';
import PageLayout from '../layout/default-layout';
import { courseList } from '../assets/styles/pages/home-data';

const HeroSession = ({ paragraph, img }) => {
  return (
    <div className=' d-lg-flex d-sm-flex-column '>
      <div className='hero-session-l'>
        <h1>
          Learning made <span>easy</span> and <span>fun</span>.
        </h1>
        <p>{paragraph}</p>
        <CustomLink label='Sign Up' to='/register' className='btn-green' />
      </div>
      <img
        src='/images/hero-page-image.svg'
        alt='hero--page-img'
        className='hero-session-img mt-5 img-fluid'
      />
    </div>
  );
};

const CourseSession = ( { img, title, bodyText} ) =>
{
    return (
        <div className='col-md-4 course-session-item'>
            <img src={img} alt="course" className='img-fluid'/>
            <h2>{title}</h2>
            <p>{bodyText}</p>
        </div>
    )
}

function Home() {
  return (
    <PageLayout>
      <div className='container mt-5  '>
        <HeroSession
          heroText='Learning made easy and fun.'
          paragraph='Learn at your pace and with ease without pressure
              and connect to tutors who will help achieve your 
              educational goals'
              />
              <div className='users-reading'>
              <h1>
                  2K+
              </h1>
              <p>
                  Registered Tutors
              </p>
              </div>    

              {/* course session */}
              <div className='course-session'>
                  <h1 className='text-center'>Courses to Learn</h1>
                  <div className='row'>
                      {
                          courseList.map( ( list, index ) =>
                          {
                              return (
                                  <CourseSession
                                      img={list.img}
                                      title={list.title}
                                      bodyText={list.bodyText}
                                  />
                              )
                          })
                      }
                  </div>
              </div>
      </div>
    </PageLayout>
  );
}

export default Home;
