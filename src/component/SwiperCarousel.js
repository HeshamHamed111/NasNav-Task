import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
// Import Swiper styles
import 'swiper/swiper.min.css';
import '../swiper.css';
import React from 'react';
SwiperCore.use([Pagination, Navigation]);

const SwiperCarousel = ({children, items}) => {

    const child = items.map((el) => 
    <SwiperSlide>
  {(React.cloneElement(children, {
        item: el,
        key: el.id
    }))}
    </SwiperSlide>

    );
    return ( 
        <Swiper spaceBetween={50} slidesPerView={3} pagination navigation>
        {child}
      </Swiper>
     );
}
 
export default SwiperCarousel;
