import React from 'react'
import Clock from '../components/Clock';
import Location from '../components/Location';
import SocialLinks from '../components/SocialLinks';
import Projects from '../components/Projects';
import InvertMouse from '../components/InvertMouse';
import { Links } from 'react-router-dom';

function main() {
  return (
    <div
      className="bg-black text-white w-full h-screen flex flex-col items-center justify-center"
      style={{ userSelect: 'none', cursor: 'none' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <InvertMouse />
      <SocialLinks />
      <Projects />
      <div className="text-center">
        <h1 className='text-4xl font-black md:text-6xl lg:text-9xl'>MINA SAAD</h1>
        <p className='text-xl font-semibold md:text-3xl lg:text-5xl'>web developer</p>
      </div>
      <Clock />
      <Location />
    </div>
  )
}

export default main