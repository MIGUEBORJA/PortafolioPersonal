import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class='bx bx-award'></i>
        <h3 className='about__title'>Experiencia</h3>
        <span className='about__subtitle'>2 años (estudio)</span>
      </div>

      <div className='about__box'>
        <i class='bx bxs-briefcase-alt-2' ></i>
        <h3 className='about__title'>Completados</h3>
        <span className='about__subtitle'>1 proyecto</span>
      </div>

      <div className='about__box'>
        <i class='bx bx-support' ></i>
        <h3 className='about__title'>Soporte</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info
