import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Helpers/Header';
import Footer from '../Helpers/Footer';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/CryptoSlice';
import { addToWatchlist } from '../Redux/WatchlistSlice';
import image1 from '../images/crypto.jpg';
import { useLocation } from 'react-router-dom';



const Home = () => {
  //const  {state} = useLocation()
  //const flag = state
  //console.log(state,'lll')
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
            <div className='col-md-6'>
              <div className="card">
                <h5 className="card-header bg-primary text-white">Top Gainers</h5>
                <div className="card-body">
                  <table className='table_1'>
                    <thead>
                      <tr className='text-black'>
                        <th>Coin Name</th>
                        <th>Price</th>
                        <th>Change in Price(%)</th>
                        <th>Watchlist</th>
                      </tr>
                    </thead>
                    <tbody className='text-secondary'>
                      {
                        cryptoTop && cryptoTop.map((item,index) => index < 5 ?<tr key={index}>
                          <td><img src={item.iconUrl} style={{width:"18px",heigth:'18px'}}></img> {item.name} ({item.symbol})</td>
                          <td className='fw-bold'>$ {Number(item.price).toFixed(2)}</td>
                          <td className='text-success fw-bold'>+ {Number(item.change).toFixed(2)}</td>
                          <td><button className='btn btn-danger' onClick={() => dispatch(addToWatchlist(item))}>Add</button></td>
                        </tr> :null)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="card">
                <h5 className="card-header bg-primary text-white">Top Losers</h5>
                <div className="card-body">
                  <table className='table_1'>
                    <thead>
                      <tr>
                        <th>Coin Name</th>
                        <th>Price</th>
                        <th>Change in Price(%)</th>
                        <th>Watchlist</th>
                      </tr>
                    </thead>
                    <tbody className='text-secondary'>
                      {
                        cryptoLosers && cryptoLosers.map((item,index) => index < 5 ?<tr key={index}>
                          <td><img src={item.iconUrl} style={{width:"18px",heigth:'18px'}}></img> {item.name} ({item.symbol})</td>
                          <td className='fw-bold'>$ {Number(item.price).toFixed(2)}</td>
                          <td className='text-danger fw-bold'>{Number(item.change).toFixed(2)}</td>
                          <td><button className='btn btn-danger' onClick={() => dispatch(addToWatchlist(item))}>Add</button></td>
                        </tr> :null)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='row align-items-top justify-content-between my-4'>
            <div className='col-md'>
              <div className="card">
                <h5 className="card-header bg-primary text-white">Top 10 Coins</h5>
                <div>
                  <table className='table_1'>
                    <thead>
                      <tr>
                        <th>Coin Name</th>
                        <th>Price</th>
                        <th>Change in Price(%)</th>
                        <th>Watchlist</th>
                      </tr>
                    </thead>
                    <tbody className='text-secondary'>
                      {
                        cryptoData && cryptoData.map((item,index) => index < 10 ? <tr key={index}>
                          <td><img src={item.iconUrl} style={{width:"18px",heigth:'18px'}}></img> {item.name} ({item.symbol})</td>
                          <td className='fw-bold'>$ {Number(item.price).toFixed(2)}</td>
                          {
                            Number(item.change) > 0 ?<td className='text-success fw-bold'>+{Number(item.change).toFixed(2)}</td> :<td className='text-danger fw-bold'>{Number(item.change).toFixed(2)}</td>
                          }
                          <td><button className='btn btn-danger' onClick={() => dispatch(addToWatchlist(item))}>Add</button></td>
                        </tr> :null)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
    </React.Fragment>
  )
}

export default Home;