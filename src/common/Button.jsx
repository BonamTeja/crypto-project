import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToWatchlist, deleteAll, removeItems } from '../Redux/WatchlistSlice';

const Button = (props) => {
    const {title, className,item} = props
    const dispatch = useDispatch();

    // const [result, setResult] = useState();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try{
    //             const response = await fetch('url');
    //             if(!response.ok) {
    //                 throw new Error('Network response error')
    //             }
    //             const res = await response.json()
    //             setResult(res)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData()
    // }, [])

    // const fetchDataOne = async () => {
    //     try {
    //         const response = await fetch('url');
    //         if(!response.ok) {
    //             throw new Error('Error message')
    //         }
    //         const res = await response.json()
    //         return res
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // const result = fetchDataOne()
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