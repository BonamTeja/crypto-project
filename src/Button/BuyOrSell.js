import React, { useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { buyItem } from '../Redux/BuyItemSlice';
import Popup from 'reactjs-popup';
import { fetchData } from '../Redux/CryptoSlice'

const BuyOrSell = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const [cost,setCost] = useState();
    
    const handlePrice = (event) =>{
        setCost({
          ...cost,
          [event.target.name]:event.target.value
        })
    }
    const submitPrice = (event) =>{
        event.preventDefault()
    }
    const costFunction = (item1) =>{
        const initial = Number(cost.priceAmount)/Number(item1.price)
        const newCost ={...item1,cost:Number(cost.priceAmount),initialValue:Number(initial)}
        console.log(newCost)
        dispatch(buyItem(newCost))
    }
  return (
    <div>
        <Popup trigger =
            {<button className='btn btn-success px-3'>BUY</button>}
            position='bottom-center'>
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
  );
}

export default BuyOrSell