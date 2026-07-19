import React from 'react'
import Header from '../components/Header'
import ServicesMenu from '../components/ServicesMenu'
import TopBarbers from '../components/TopBarbers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <ServicesMenu />
      <TopBarbers />
      <Banner />
    </div>
  )
}

export default Home