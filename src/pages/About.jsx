import React from 'react'
import AboutInfo from '../components/about/AboutInfo'

const About = ({allFollowers, allFollowing}) => {
  return (
    <div>
      <AboutInfo allFollowers={allFollowers} allFollowing={allFollowing}/>
    </div>
  )
}

export default About