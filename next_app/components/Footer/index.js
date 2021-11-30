import React from 'react'
import styles from '../../styles/Footer.module.scss'


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_title}>
                <h3>Didn’t find what <br />your looking <br />for?</h3>
            </div>
            <div className={styles.footer_img_back}></div>
            <div className={styles.footer_img_front}></div>
            <form className={styles.footer_form}>
                <div className={styles.footer_slide_submit}>
                </div>
                <button type="submit" className={styles.footer_submit_btn}>
                    <img src="<%=require('./resource/images/arrow-l.svg')%>" alt="" />
                    <p>make your custom</p>
                </button>

            </form>
        </div>
    )
}