import React, { useReducer,useEffect } from 'react'
import { fetchData } from '../Redux/CryptoSlice';
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll, removeItems } from '../Redux/WatchlistSlice'
import BuyOrSell from '../Button/BuyOrSell';

const Watchlist = () => {
  const listItems = useSelector((state) => state.list.Watchlist)
  const data = useSelector((state) => state.crypto)
  const cryptoData = (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins != null) && (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins.length > 0) ? data.cryptoCoins.data.coins : null
  const dispatch = useDispatch()
  const status = data.status
  useEffect(() =>{
    if(status === 'idle'){
      dispatch(fetchData())
    }
  })
  console.log(listItems)  
  const totalAmount = listItems.reduce((start, item) => {
    return start += ((Number(item.price))*item.quantity) 
  },0)

  return (
    <React.Fragment>
        <Header />
        <article className='container-fluid'>
          {
            listItems && listItems.length > 0 ?
            <table className='table_1'>
              <thead>
                <tr>
                  <th>Coin Name</th>
                  <th>Price</th>
                  <th>Change</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  listItems.map((item,index) => <tr key={index}>
                  <td>{item.name}</td>
                  <td className='fw-bold'>${Number(item.price).toFixed(2)}</td>
                  {Number(item.change) > 0 ? <td className='text-success fw-bold'>+{Number(item.change)}</td>:<td className='text-danger fw-bold'>{Number(item.change)}</td> }
                  <td>
                    <div className="d-flex text-center">
                      <button className='btn btn-danger' onClick={() =>dispatch(removeItems(item))}>x</button>
                      {/*<BuyOrSell item ={item}/> */}
                    </div>
                  </td>
                </tr>)
                  
                }
              </tbody>
              <tfoot>
                <tr>
                  <td style={{textAlign:'right'}} colSpan={3}>Grand Total : $ {totalAmount.toFixed(2)}</td>
                  <td><button className='btn btn-danger' onClick={() => dispatch(deleteAll())}>DeleteAll</button></td>
                </tr>
              </tfoot>
            </table>:<p>Sorry! Items Not Found</p>
          }
        </article>
        <Footer />
    </React.Fragment>
  )
}

export default Watchlist