import React from 'react'
import { useDispatch } from 'react-redux';
import { addToWatchlist, deleteAll, removeItems } from '../Redux/WatchlistSlice';

const Button = (props) => {
    const {title, className,item} = props
    const dispatch = useDispatch();
  return (
    <>
        {
            title == "ADD" && (<button className={`${className}`} onClick={() => dispatch(addToWatchlist(item))}>{title}</button>)
        }
        {
            title == 'x' && (<button className={`${className}`} onClick={() => dispatch(removeItems(item))}>{title}</button>)
        }
        {
            title == "DeleteAll" && (<button className={`${className}`} onClick={() => dispatch(deleteAll(item))}>{title}</button>)
        }
    </>
  )
}

export default Button