import React from 'react';
import "./friends.css";
import { Data } from "./DataFriends"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Friends = () => {
  return (
   <section className='friend section' id='friends'>
        <h2 className='section__title'>Colegas</h2>
        <span className='section__subtitle'>Amigos en el mismo ámbito de trabajo</span>

        <Swiper className="friend__container"
             loop={true}
             grabCursor={true}
             spaceBetween={24}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               576: {
                 slidesPerView: 2,
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: 48,
               },
             }}
             modules={[Pagination]}
            >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className='friend__card' key={id}>
                        <img src={image} alt={title} className='friend__img' />

                        <h3 className='friend__name'>{title}</h3>
                        <p className='friend__description'>{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Friends
