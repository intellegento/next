import React from 'react'
import { SwiperSlide } from 'swiper/react'
import styles from '../../styles/Slider.module.scss'


function ProductCard(props) {
    return (
        <SwiperSlide>
            <div className={styles.swiper_slide}>
                <div className={styles.swiper_slide_item}>
                    <div className={styles.swiper_slide_title}>
                        <h3>Cuban link 2nd line </h3>
                    </div>
                    <div className={styles.swiper_slide_card_item}>
                        <img src="/images/slider-item-2.jpg" alt="item" />
                    </div>
                    <div className={styles.slider_card_descr}>
                        <p>Lorem ipsum dolor sit amet, consetetur <br />sadipscing elitr,</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>

    )
}

export default ProductCard;