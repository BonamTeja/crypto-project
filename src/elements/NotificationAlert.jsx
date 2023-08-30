import React from 'react'

const NotificationAlert = (props) => {
    const {data} =props
  return (
    <>
        {
            data && data.map((item, index) => <section key={index} className='text-bg-secondary rounded-4 text-center' style={{display:'flex', alignItems:'center',justifyContent:'space-between',width:'90%', margin:'20px auto', padding:'10px'}}>
            <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                <i className={`${item.className}`} aria-hidden="true"></i>
                <h4 style={{marginLeft:'5px'}}>{item.heading}</h4>
                <sub style={{marginLeft:'5px', fontSize:'15px'}}> {item.subHeading}</sub>
            </div>
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </section>)
        }
    </>
  )
}

export default NotificationAlert