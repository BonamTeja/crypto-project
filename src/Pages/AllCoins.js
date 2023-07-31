import React, { useState } from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/CryptoSlice';
import { useEffect } from 'react';
import { addToWatchlist } from '../Redux/WatchlistSlice';
import Popup from 'reactjs-popup';
import { buyItem } from '../Redux/BuyItemSlice';
import { useNavigate } from 'react-router-dom';

const AllCoins = () => {
    const data = useSelector((state) => state.crypto)
    const [price,setPrice] = useState()
    
    const cryptoData = (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins != null) && (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins.length > 0) ? data.cryptoCoins.data.coins : null
    const dispatch = useDispatch()
    const status = data.status
    useEffect(() =>{
        // if(status === 'idle'){
          dispatch(fetchData())
        // }
    },[])
    const sparkLine = (cryptoData && cryptoData.map((item) => (item.sparkline).map((item) => Number(item)).sort(function(a,b){return a - b})))
    

    {/*Handle price Starts*/}
    const handlePrice =(event) =>{
        setPrice({
            ...price,
            [event.target.name]:event.target.value
        })
    }
    {/*Handle price Starts*/}

    {/* Submitting PriceAmount Starts */}

    const submitPrice =(event)=>{
        event.preventDefault()
        console.log(event)
    }

    {/* Submitting PriceAmount Ends */}
    const navigate = useNavigate();
    const costFunction = (item) =>{
        const initial = price.priceAmount/item.price
        console.log(initial)
        const newCost ={...item,cost:Number(price.priceAmount),initialValue:Number(initial)}
        dispatch(buyItem(newCost))
        navigate('/portfolio')
    }

  return (
    <React.Fragment>
        <Header />
        <article>
            <h1 className='text-warning text-center'>All Crypto Coins</h1>
            <article className='container'>
                <section className='row'>
                    {
                        cryptoData && cryptoData.map((item,index) =><div className='col-md-4 my-3' key={index}>
                            <div className="card py-2" >
                                <img src={item.iconUrl} className="card-img-top" alt="..." style={{height:'300px'}} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.rank}. {item.name}</h4>
                                    <h5 className='text-secondary'>({item.symbol})</h5>
                                    <h5 className='text-secondary'>Price : $ {Number(item.price).toFixed(5)}</h5>
                                    {Number(item.change) > 0 ? <h5 className='text-success'>Change : +{Number(item.change)}%</h5> :<h5 className='text-danger'>Change : {Number(item.change)}%</h5>}
                                    <h6 style={{color:'rgb(10, 50, 255)'}}>Minimum Price : $ {sparkLine[index][0].toFixed(5)}</h6>
                                    <h6 style={{color:'rgb(250, 100, 50)'}}>Maximum Price : $ {sparkLine[index][23].toFixed(5)}</h6>
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn btn-danger' onClick={() => dispatch(addToWatchlist(item))}>ADD</button>

                                        {/* Popup Starts*/}
                                        <Popup trigger =
                                            {<button className='btn btn-success px-3'>BUY</button>}
                                            position='left center'>
                                            {close => (
                                                <section className='container bg-info-subtle rounded-3 p-3'>
                                                    <button className='btn btn-danger float-end' onClick={close}>x</button>
                                                    <div className='card-body'>
                                                        <figure className='text-center'>
                                                            <h3 ><img src={item.iconUrl} alt='...' style={{width:'30px',height:'30px'}} /> {item.name}</h3>
                                                            <figcaption className='text-secondary fw-bold'>({item.symbol})</figcaption>
                                                        </figure>
                                                        <h5 className='text-secondary'>Price : $ {Number(item.price).toFixed(5)}</h5>
                                                        <form onSubmit={submitPrice}>
                                                            <section className='form-group my-1'>
                                                                <label className='fs-5 my-1'>Enter Amount in USD: </label>
                                                                <input type='text' name='priceAmount' className='form-control fs-5' placeholder='$ 0' onChange={handlePrice}></input>
                                                            </section>
                                                            <section className='text-center'>
                                                                <input type='submit' className='btn btn-primary my-2' value='Proceed' onClick={()=>costFunction(item)}/>
                                                                
                                                            </section>
                                                        </form>
                                                    </div>
                                            </section>
                                            )}
                                        </Popup>
                                        {/* Popup Ends*/}

                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </section>
            </article>
        </article>
        <Footer />
    </React.Fragment>
  )
}

export default AllCoins