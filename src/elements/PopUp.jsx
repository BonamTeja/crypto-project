import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { buyItem } from '../Redux/BuyItemSlice';
import { fetchData } from '../Redux/CryptoSlice';

const PopUp = (props) => {
    const {item} = props
    const dispatch = useDispatch()
    const [price, setPrice] = useState()
    const navigate = useNavigate()

    useEffect(() =>{
        // if(status === 'idle'){
          dispatch(fetchData())
        // }
    },[])

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

    const costFunction = (item) =>{
        console.log(item,'itemPOp')
        console.log(price,'pricePOP')
        const initial = price.priceAmount/item.price
        console.log(initial,'initialpop')
        const newCost ={...item,cost:Number(price.priceAmount),initialValue:Number(initial)}
        dispatch(buyItem(newCost))
        navigate('/portfolio')
    }
  return (
    <>
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
    </>
  )
}

export default PopUp