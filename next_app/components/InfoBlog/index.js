import React from 'react'
import styles from '../../styles/Cover.module.scss'

export default function InfoBlog() {
  return ( 
    <div className={styles.section}>
        <div className={styles.cover}>
            <div className={styles.content_cover, styles.cover_for_title}>
                <img src='/images/cover1.jpg' alt="cover"/>
                <div className={styles.cover_title_text}>
                    <p>Our everyday <br/>basic collection</p>
                </div>
            </div>
            <div className={styles.content_text}>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. </p>
            </div>
            
        </div>
        <div className={styles.cover}>
            <div className={styles.content_text}>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. </p>
            </div>
            <div className={styles.content_cover}>
                <div className={styles.content_background}>
                    <img src="/images/cover2.jpg" alt="cover"/>
                </div>
            </div>
        </div>
    </div>

  ) 
}