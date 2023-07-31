import React from 'react'

const ReferAndEarn = () => {
  return (
    <React.Fragment>
        <article className='container my-3'>
            <div className='card' style={{backgroundColor:'#8833ff',padding:'20px 10px',borderRadius:'15px'}}>
              <h1 className='text-white'><i class="fa fa-inr" aria-hidden="true"></i> 16</h1>
              <label className='text-white'>Total Rewards Earned</label>
              <div className='card mt-3 p-3'>
                <h4 className='card-title'>Invite a friend. Get free crypto. <i class="fa fa-share-alt" aria-hidden="true"></i></h4>
                <p>Buying a crypto is good, but free crypto is better! Earn free crypto worth <i class="fa fa-inr" aria-hidden="true"></i>400 on your friend's first trade.</p>
                <div style={{backgroundColor:'#ddd',textAlign:'center',padding:'10px 0px',borderRadius:'15px'}}>
                  <h3><i class="fa fa-whatsapp" style={{color:'green'}} aria-hidden="true"></i> Invite on WhatsApp</h3>
                </div>
                <div style={{marginTop:'10px', border:'1px solid black',borderRadius:'10px',textAlign:'center',padding:'10px'}}>
                  <h3>Invite contact</h3>
                </div>
                <h6 style={{marginTop:'10px',textAlign:'center',textDecoration:'underline'}}>Terms & Conditions</h6>
              </div>  
            </div>
            <div className='card' style={{backgroundColor:'#dddddd',marginTop:'15px',textAlign:'center',border:'none',borderRadius:'10px',padding:'10px 0px'}}>
              <h3>Redeem Gift Voucher</h3>
              <p>You can only redeem one unique code per account.</p>
              <div style={{textAlign:'center'}}>
                <input style={{width:'80%',padding:'10px 10px',position:'relative',border:'none',borderRadius:'10px',color:'black'}} type='text' name='otp_code' placeholder='Enter Code'></input>
                <i class="fa fa-arrow-right" style={{position:'absolute',left:"86%",top:'69%',cursor:'pointer',zIndex:'10',padding:'5px 10px',backgroundColor:'black',borderRadius:'5px',color:'#fff'}} aria-hidden="true"></i>
              </div>
            </div>
            <div style={{marginTop:"20px"}}>
              <h4>Your Rewards</h4>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{width:'49%',backgroundColor:'#ddd',textAlign:'center',borderRadius:'10px'}}>
                  <i class="fa fa-lock fa-5x" style={{color:'#444488'}} aria-hidden="true"></i>
                  <p>Unlocks on completing INR 10,000 deposit</p>
                </div>
                <div style={{width:'49%',backgroundColor:'#ddd',textAlign:'center',borderRadius:'10px'}}>
                  <i class="fa fa-lock fa-5x" style={{color:'#444488'}} aria-hidden="true"></i>
                  <p>Unlocks on 1st successful referral</p>
                </div>
              </div>
            </div>
        </article>
    </React.Fragment>
  )
}

export default ReferAndEarn