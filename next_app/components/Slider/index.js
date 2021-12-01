import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper} from 'swiper/react';

import ProductCard from '../ProductCard'
import styles from '../../styles/Slider.module.scss'


function Slider(props) {
    return (
        <div className={styles.section}>
            <div className={styles.slider_header}>
                <div className={styles.slider_header_title}>
                    <p>Preview: Key pieces</p>
                </div>
                <div className={styles.slider_header_btns}>
                    <button className={styles.slider_header_btn_see_all}>See All</button>
                    <div className={styles.slider_header_arrow_btns}>
                        <button className={styles.slider_header_arrow_prev}>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.3997 9.00011L1.59966 9.00011M1.59966 9.00011L9.23602 16.4668M1.59966 9.00011L9.23602 1.53345"
                                    stroke="#fff" strokeWidth="2" />
                            </svg>
                        </button>
                        <button className={styles.slider_header_arrow_next}>
                            <svg width="19" height="18" xmlns="http://www.w3.org/2000/svg">
                                <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                                <path transform="rotate(-180 9.999679565429688,9.00012493133545) " stroke="#fff"
                                    id="svg_1" strokeWidth="2"
                                    d="m18.3997,9.00011l-16.80004,0m0,0l7.63636,7.46669m-7.63636,-7.46669l7.63636,-7.46666" />

                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className={styles.swiper_block}>
                <div className={styles.swiper}> {/**mySwiper */}
                    <div className={styles.swiper_wrapper}>
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
                       
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
