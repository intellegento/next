import React from 'react'
import styles from '../../styles/Footer.module.scss'
import { useRouter } from "next/router"
import gsap from 'gsap';
import SplitText from '../../gsap/SplitText';



    

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_title}>
                <h3>Didn’t find what <br />your looking <br />for?</h3>
            </div>
            <div className={styles.footer_img_back}></div>
            <div className={styles.footer_img_front}></div>
            <form className={styles.footer_form}>
                <div className={styles.footer_slide_submit}>
                </div>
                <div className={styles.footer_submit_btn}>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9L22 9M2 9L8.92308 1M2 9L8.92308 17" stroke="#5A6B6F" stroke-width="1.6"/>
                </svg>
                    <p>make your custom</p>
                </div>

            </form>
        </footer>
    )
}