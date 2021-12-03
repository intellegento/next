// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import ProductCard from '../ProductCard'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import styles from '../../styles/Slider.module.scss'

function Slider(props) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
        <SwiperSlide>
        <ProductCard/>
     </SwiperSlide>
     <SwiperSlide>
        <ProductCard/>
     </SwiperSlide>
     <SwiperSlide>
        <ProductCard/>
     </SwiperSlide>
    </Swiper>
  );
};

export default Slider