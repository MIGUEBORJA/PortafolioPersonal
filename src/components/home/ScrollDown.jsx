import React from 'react'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
      <a href='#about' className='home__scroll-button'>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      className='home__scroll-mouse'
      viewBox="0 0 24 24"
    >
      <path d="M7.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L12 4.414 8.707 7.707a1 1 0 01-1.414 0zm0 10l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L12 19.586l-3.293-3.293a1 1 0 10-1.414 1.414z"></path>
    </svg>
    <span className='home__scroll-name'>Scroll Down</span>
        <i className='uil uil-arrow-down home__scroll-arrow'></i>
      </a>
    </div>
  )
}

export default ScrollDown
