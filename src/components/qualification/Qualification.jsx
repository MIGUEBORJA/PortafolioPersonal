import React from 'react'
import "./qualification.css";

const Qualification = () => {
  return (
    <section className='qualification section' id='qualification'>
        <h2 className='section__title'>Estudios</h2>
        <span className='section__subtitle'>Mi recorrido personal</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className='qualification__button button--flex'>
                    <i className='uil uil-graduation-cap qualification__icon'></i>Educación
                </div>
                <div className='qualification__section'>
                    <div className='qualification__content'>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachiller</h3>
                                <span className="qualification__subtitle">Colombia - I.E.R.M.L</span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'>2008 - 2022</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Técnico ADSO</h3>
                                <span className="qualification__subtitle">Colombia | Sena</span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'>2021 - 2022</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Tecnólogo ADSO</h3>
                                <span className="qualification__subtitle">Colombia | Sena</span>
                                <div className="qualification__calender">
                                    <i className='uil uil-calendar-alt'>2023 | Actualidad</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
