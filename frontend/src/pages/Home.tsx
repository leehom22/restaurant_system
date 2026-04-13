import React from 'react'
import Hero from '../components/Hero'
import Landing from '../components/Landing'

const Home = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Hero/>
        <Landing/>
    </div>
  )
}

export default Home