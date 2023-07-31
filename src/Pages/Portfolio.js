import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/CryptoSlice'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import Popup from 'reactjs-popup'
import { buyItem, sellItem } from '../Redux/BuyItemSlice'

const Portfolio = () => {
    const [sell,setSell] = useState();
    let buyItems = useSelector((state) => state.itemscart.buyProducts)
    const [cost,setCost] = useState()
    const data = useSelector((state) => state.crypto)
    const cryptoData = (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins != null) && (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins.length > 0) ? data.cryptoCoins.data.coins : null
    buyItems = buyItems && buyItems.filter((item) => cryptoData && cryptoData.some((item1) => item1.name === item.name ));
    var updatedBuyItems = buyItems && buyItems.map((item, index) =>{
      var itemExists = cryptoData && cryptoData.findIndex((item1) => item1.name === item.name)
      if(itemExists > -1)
      {
        const newItem = {...item,rank:cryptoData && cryptoData[itemExists].rank,currentPrice:cryptoData && cryptoData[itemExists].price}
        return newItem
      }
    })

    
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchData())
    },[])
    

    const totalValue = updatedBuyItems && updatedBuyItems.reduce((start,item)=>{
      start = (Number(start)+((Number(item.currentPrice))*(Number(item.initialValue)))).toFixed(4)
      return start
    },0)
    const totalInvested = updatedBuyItems && updatedBuyItems.reduce((start,item)=>{
      start = (Number(start)+Number(item.cost)).toFixed(4)
      return start
    },0)
    
    {/*Handle Input*/}
    

    const handlePrice = (event) =>{
      setCost({
        ...cost,
        [event.target.name]:event.target.value
      })
    }

    const submitPrice = (event) =>{
      event.preventDefault()
    }

    const costFunction = (item) =>{
      const initial = cost.priceAmount/item.cost
      const newCost ={...item,cost:Number(cost.priceAmount),initialValue:Number(initial),price:item.currentPrice}
      console.log(newCost)
      console.log(((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4))
      dispatch(buyItem(newCost))
    }
    {/*Sell Function*/}

    const handleSellPrice = (event) =>{
        setSell({
          ...sell,
          [event.target.name]:event.target.value
        })
      }
  
      {/*Submit Input*/}
      const submitSellPrice = (event) =>{
        event.preventDefault()
        console.log(event)
      }
  
      {/*sellFunction*/}
      

    const sellFunction = (item,index) =>{
        const updatedCost = item.cost-Number(sell.sellAmount)
        const updatedInitial = updatedCost/item.price
        const PoL = ((Number(sell.sellAmount)/item.price)*item.currentPrice)
        const newItem = {...item,sellCost:Number(sell.sellAmount),cost:updatedCost,initialValue:Number(updatedInitial)}
        console.log(newItem)
        dispatch(sellItem(newItem))
        if(newItem.cost >= 0){
          if(Number(PoL) < Number(sell.sellAmount)){
            alert(`😭Lol!, You lost ${Number(sell.sellAmount) - Number(PoL)} at Price of ${item.currentPrice}`)
          }
          else{
            alert(`😍🎆Congratulations🎉🎊 You Get Profit of ${Number(Number(PoL) - Number(sell.sellAmount)).toFixed(4)} at Price of ${Number(item.currentPrice).toFixed(4)}`)
          }
        }
        else{
          alert("Please check sell price")
        }
    }
    console.log(updatedBuyItems)
  return (
    <div>
        <Header />
        <article className='container my-3'>
          <section className='row'>
              <div className='container-md' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <h3>Total InvestedValue : {totalInvested}</h3>
                  <h3>Total CurrentValue : {totalValue}</h3>
                </div>
                {
                  (Number(totalValue) > Number(totalInvested)) ? <div className='text-success'>
                      <h3>Profit (in $) : + {(totalValue-totalInvested).toFixed(4)}</h3>
                      <h3>Profit (in %) : + {(((totalValue-totalInvested)/totalInvested)*100).toFixed(4)}</h3>
                  </div> : <div className='text-danger'>
                    <h3>Loss (in $) : {(totalValue-totalInvested).toFixed(4)}</h3>
                    <h3>Loss (in %) : {(((totalValue-totalInvested)/totalInvested)*100).toFixed(4)}</h3>
                  </div>
                }
              </div>
              {updatedBuyItems && updatedBuyItems.map((item,index) =>
                <div className='col-md-4' key={index}>
                  <div className="card p-3 mt-3" style={{backgroundColor:'#f3ffff'}}>
                    <img src={item.iconUrl} className="card-img-top" alt="..." style={{height:'300px'}} />
                    <div className='card-body'>
                      <h4 className="card-title">{item.rank}. {item.name}</h4>
                      <h5 >({item.symbol})</h5>
                      <h5 style={{color:'#414141'}} >Price(Inv) : $ {Number(item.price).toFixed(5)}</h5>
                      <h5 style={{color:'#414141'}}>Current Price : $ {Number(item.currentPrice).toFixed(5)}</h5>
                      <h5 style={{color:'#414141'}}>Current value : $ {((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4)}</h5>
                      <h5 style={{color:'#414141'}}>Invested value : $ {Number(item.cost).toFixed(2)}</h5>
                      
                    <div>
                    {((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4) - Number(item.cost).toFixed(2) > 0 ? <div className='text-success' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>
                          <h5>Profit (in $)</h5>
                          <h5>+{(((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4) - Number(item.cost).toFixed(2)).toFixed(4)}</h5>
                        </div>
                        <div>
                          <h5>Profit (in %)</h5>
                          <h5>+{(((((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4) - Number(item.cost).toFixed(2)).toFixed(4)/Number(item.cost))*100).toFixed(4)}</h5>
                        </div>
                      </div> :
                      <div className='text-danger' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>
                          <h5>Loss ( in $)</h5>
                          <h5>{(((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4) - Number(item.cost).toFixed(2)).toFixed(4)}</h5>
                        </div>
                        <div>
                          <h5>Loss (in %)</h5>
                          <h5>{(((((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4) - Number(item.cost).toFixed(2)).toFixed(4)/Number(item.cost))*100).toFixed(4)}</h5>
                        </div>
                      </div> }
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    {/* Popup Starts*/}
                    
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
                    
                    <Popup trigger={<button className='btn btn-warning px-3 text-white'>Sell</button>} position='left center'>
                      {close => (
                        <section className='container bg-info-subtle rounded-3 p-3'>
                          <button className='btn btn-danger float-end' onClick={close}>x</button>
                          <div className='card-body'>
                            <figure className='text-center'>
                              <h3 ><img src={item.iconUrl} alt='...' style={{width:'30px',height:'30px'}} /> {item.name}</h3>
                              <figcaption className='text-secondary fw-bold'>({item.symbol})</figcaption>
                            </figure>
                            <h5 style={{color:'#414141'}}>Current Price : $ {Number(item.currentPrice).toFixed(5)}</h5>
                            <h5 style={{color:'#414141'}}>Current value : $ {((Number(item.currentPrice))*(Number(item.initialValue))).toFixed(4)}</h5>
                            <h5 style={{color:'#414141'}}>Invested value : $ {Number(item.cost).toFixed(2)}</h5>
                            <form onSubmit={submitSellPrice}>
                              <section className='form-group my-1'>
                                <label className='fs-5 my-1'>Enter Amount in USD: </label>
                                <input type='text' name='sellAmount' className='form-control fs-5' placeholder='$ 0' onChange={handleSellPrice}></input>
                              </section>
                              <section className='text-center'>
                                <input type='submit' className='btn btn-primary my-2' value='Proceed' onClick={()=>sellFunction(item,index)}/>       
                              </section>
                            </form>
                          </div>
                        </section>
                      )}
                    </Popup>
                    </div>
                    </div>
                  </div>
                </div>)}
          </section>
        </article>
        <Footer />
    </div>
  )
}

export default Portfolio