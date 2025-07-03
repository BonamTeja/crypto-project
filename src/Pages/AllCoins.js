import React, { useState } from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/CryptoSlice';
import { useEffect } from 'react';
import { buyItem } from '../Redux/BuyItemSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import PopUp from '../elements/PopUp';

const AllCoins = () => {
    const data = useSelector((state) => state.crypto)
    const [price,setPrice] = useState()
    
    const cryptoData = (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins != null) && (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins.length > 0) ? data.cryptoCoins.data.coins : null
    console.log(cryptoData,'crypto')
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
                                    <h6 style={{color:'rgb(10, 50, 255)'}}>Minimum Price : $ {sparkLine[index][1].toFixed(5)}</h6>
                                    <h6 style={{color:'rgb(250, 100, 50)'}}>Maximum Price : $ {sparkLine[index][23].toFixed(5)}</h6>
                                    <div className='d-flex justify-content-between'>
                                        <Button className='btn btn-danger' title="ADD" item={item} />
                                        {/* Popup Starts*/}
                                        <PopUp item={item} />
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