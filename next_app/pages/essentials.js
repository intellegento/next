import React from 'react'
import Header from '../components/Header/index'
import InfoBlog from '../components/InfoBlog/index'
import Slider from '../components/Slider/index'
import Footer from '../components/Footer/index'


export default function Essentials() {
  return (
    <>
      <Header>
        <p>the essential</p>
        <p>line</p>
      </Header>
      <InfoBlog />
      <Slider />
      <Footer />
      </>
  )
}