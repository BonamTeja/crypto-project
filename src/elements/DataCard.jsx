import React from 'react'
import { useDispatch } from 'react-redux';
import { addToWatchlist } from '../Redux/WatchlistSlice';
import Button from '../common/Button';

const DataCard = (props) => {
    const {cryptoTop,title, className, noItems} = props;
    const dispatch = useDispatch();
  return (
    <div className={`${className}`}>
      <div className="card">
        <h5 className="card-header bg-primary text-white">{title}</h5>
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
                        cryptoTop && cryptoTop.map((item,index) => index < noItems ?<tr key={index}>
                          <td><img src={item.iconUrl} style={{width:"18px",heigth:'18px'}}></img> {item.name} ({item.symbol})</td>
                          <td className='fw-bold'>$ {Number(item.price).toFixed(2)}</td>
                          {
                            Number(item.change) > 0 ?<td className='text-success fw-bold'>+{Number(item.change).toFixed(2)}</td> :<td className='text-danger fw-bold'>{Number(item.change).toFixed(2)}</td>
                          }
                          <td>
                          <Button className='btn btn-danger' title="ADD" item={item}/></td>
                        </tr> :null)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default DataCard