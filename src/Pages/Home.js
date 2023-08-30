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



const Home = () => {
  const data = useSelector((state) => state.crypto)
  const cryptoData = (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins != null) && (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins.length > 0) ? data.cryptoCoins.data.coins : null;
  console.log(cryptoData)
  const cryptoTop = cryptoData && cryptoData.filter((item) => Number(item.change) > 0).sort(function(a,b) {
        return b.change - a.change
    })
  const cryptoLosers = cryptoData && cryptoData.filter((item) => Number(item.change) < 0).sort(function(a,b) {
    return a.change - b.change
  })
  const status = data.status
  const dispatch = useDispatch()
  useEffect(() =>{
    if(status === 'idle'){
      dispatch(fetchData())
    }
    
  })
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
  return (
    <React.Fragment>
        <Header />
        <div className='container-fluid'>
            <figure >
              <img src={image1} style={{width:'100%',height:'600px'}} />
            </figure>
        </div>
        <section className='container py-3' style={{margin:'0px auto', width:'100%'}}>
          <div className='row align-items-center justify-content-between'>
            <DataCard cryptoTop={cryptoTop} title="Top Gainers" className="col-md-6" noItems={5} />
            <DataCard cryptoTop={cryptoLosers} title="Top Losers" className="col-md-6" noItems={5} />
          </div>
          <div className='row align-items-top justify-content-between my-4'>
            <DataCard cryptoTop={cryptoData} title="Top 10 Coins" className="col-md" noItems={10} />
          </div>
        </section>
        <Footer />
    </React.Fragment>
  )
}

export default Home;