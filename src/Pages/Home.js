import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Helpers/Header';
import Footer from '../Helpers/Footer';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/CryptoSlice';
import { addToWatchlist } from '../Redux/WatchlistSlice';
import image1 from '../images/crypto.jpg';
import { useLocation } from 'react-router-dom';
import DataCard from '../elements/DataCard';
import image2 from '../images/about_landing.png';
import LinearProgress from '@mui/material/LinearProgress';




const Home = () => {
  
  // if( cryptoData && cryptoData.length > 0){
  //   const cryptoTop = cryptoData && cryptoData.filter((item) => Number(item.change) > 0).sort(function(a,b) {
  //     return b.change - a.change
  //   })
  //   // let sortedArray = cryptoTop.sort(function(a,b) {
  //   //   return b.change - a.change
  //   // })
  //   // console.log(sortedArray)
  //   setResponse(cryptoTop)
  // }
 
  // console.log(response)
  const visionData = [
    {id:1, color:'warning', text:'We believe that crypto investing should be as easy as ordering food online.'},
    {id:2, color:'primary', text:'We’ve centred our Vision around creating an investment ecosystem that simplifies investment.'},
    {id:3, color:'success', text:'We want to combine transparent pricing with an extensive knowledge hub so users can make informed decisions and thrive in a dynamic digital investment world.'},
  ]
  return (
    <React.Fragment>
      <Header />
      <div className='container-fluid'>
        <figure >
          <img src={image1} style={{width:'100%',height:'600px'}} />
        </figure>
      </div>
      <section className='container row justify-content-between align-items-center my-4 py-3' style={{margin:'0px auto', width:'100%', backgroundColor:'#efefef', borderRadius:'20px', boxShadow:'0px 2px 10px #aaa'}}>
        <div className='col-5'>
          <h2>Our Mission</h2>
          <p>We believe in financial inclusion - that wealth, investment, and financial knowledge are for everyone.</p>
          <p>Our Mission, therefore, is to challenge the status quo. We believe that our platform democratises cryptocurrency investment so the everyday man can make his money work for him - without a fancy degree or a boatload of money.</p>
        </div>
        <div className='col-5'>
          <img src={image2} style={{width:'70%',}} />
        </div>
      </section>
      <section className='container my-3'>
        <div class="card" style={{width:'80%', margin:'0px auto',boxShadow:'0px 2px 5px #444'}}>
          <div class="card-body">
            <h2 class="card-title text-center">Our Vision</h2>
            <div className='row'>
              {
                visionData && visionData.map((item,index) => <div className='col-4'>
                <div style={{width:'25%', margin:'10px 0px'}}><LinearProgress variant='determinate' sx={{height:'6px',borderRadius:'8px',opacity:'0.6'}} value={100} color={item.color} /></div>
                  <p>{item.text}</p>
                </div>)
              }
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Home;