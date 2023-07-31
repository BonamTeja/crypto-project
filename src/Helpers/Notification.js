import React from 'react'

const Notification = () => {
  return (
    <React.Fragment>
        <article className='text-bg-dark rounded-5 my-3 py-4'>
            <article className='container-fluid p-2 text-bg-secondary rounded-5' style={{width:'95%',margin:'10px auto'}}>
                <h2 className='text-center'>Notification</h2>
            </article>
            <section className='text-bg-secondary rounded-4 text-center' style={{display:'flex', alignItems:'center',justifyContent:'space-between',width:'90%', margin:'20px auto', padding:'10px'}}>
              <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <h4 style={{marginLeft:'5px'}}>Price Alert</h4>
                <sub style={{marginLeft:'5px', fontSize:'15px'}}> -Create customerised price alerts</sub>
              </div>
              <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </section>
            <section className='text-bg-secondary rounded-4 text-center' style={{display:'flex', alignItems:'center',justifyContent:'space-between',width:'90%', margin:'20px auto', padding:'10px'}}>
              <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <h4 style={{marginLeft:'5px'}}>Watchlist & Portfolio Alert</h4>
                <sub style={{marginLeft:'5px', fontSize:'15px'}}> -Get price alert for all coins on your watchlist and portfolio</sub>
              </div>
              <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </section>
        </article>
    </React.Fragment>
  )
}

export default Notification