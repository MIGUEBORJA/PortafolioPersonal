import React from 'react'

const Backend = () => {
  return (
    <div className='skills__content'>
    <h3 className='skills__title'>Backend Developer</h3>

    <div className='skills__box'>
      <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bxl-nodejs' ></i>

              <div>
                  <h3 className='skills__name'>Node js</h3>
                  <span className='skills__level'>Intermedio</span>
              </div>
          </div>

          <div className='skills__data'>
                <i class='bx bxl-javascript' ></i>

              <div>
                  <h3 className='skills__name'>JavaScript</h3>
                  <span className='skills__level'>Básico</span>
              </div>
          </div>
      </div>
      <div className='skills__group'>
      <div className='skills__data'>
            <i class='bx bxl-postgresql' ></i>

              <div>
                  <h3 className='skills__name'>MySQL</h3>
                  <span className='skills__level'>Básico</span>
              </div>
          </div>

          <div className='skills__data'>
                <i class='bx bxl-java' ></i>

              <div>
                  <h3 className='skills__name'>Java</h3>
                  <span className='skills__level'>Básico</span>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Backend
