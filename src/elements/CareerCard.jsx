import React from 'react';
import { Link } from 'react-router-dom';

const CareerCard = (props) => {
    const {careerData} = props
  return (
    <>
        {
            careerData && careerData.map((item,index) => (item.id%2 == 0) ? <div style={{width:'98%',margin:'20px 0px 20px 0px auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{width:'50%',marginRight:'8%'}}>
                    <h5>{item.heading}</h5>
                    <p>{item.description}</p>
                    <Link to='#' style={{textDecoration:'none'}}>{item.link}</Link>
                </div>
                <img src={item.image} alt='image1' style={{width:'30%',borderRadius:'15px'}} />
            </div> : 
            <div style={{width:'98%',margin:'20px 0px 20px 0px auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={item.image} alt='image1' style={{width:'30%',borderRadius:'15px'}} />
                <div style={{width:'50%',marginLeft:'8%'}}>
                    <h5>{item.heading}</h5>
                    <p>{item.description}</p>
                    <Link to='#' style={{textDecoration:'none'}}>{item.link}</Link>
                </div>
            </div>)
        }
    </>
  )
}

export default CareerCard