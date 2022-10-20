import React, { useContext } from 'react'
import { AuthContext } from '../Context/UserContext'

function About() {
  const {user} = useContext(AuthContext)
  return (
    <div>
      {user?.email}
    </div>
  )
}

export default About