import React, { useState } from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import EditProfile from '../Helpers/EditProfile'
import Login from './Login'
import Notification from '../Helpers/Notification'
import ReferAndEarn from '../Helpers/ReferAndEarn'
import PrivacyAndPolicy from '../Helpers/PrivacyAndPolicy'

const Settings = (item) => {
  //var count=1;
  const initialState = [
    {id:1,btn:'Profile Settings',svg:<i class="fa fa-user" aria-hidden="true"></i>},
    {id:2,btn:'Notification Settings',svg:<i class="fa fa-bell" aria-hidden="true"></i>},
    {id:3,btn:'Refer & Earn',svg:<i class="fa fa-gift" aria-hidden="true"></i>},
    {id:4,btn:'Privacy & Policy',svg:<i class="fa fa-user-secret" aria-hidden="true"></i>},
    {id:5,btn:'Help & Support',svg:<i class="fa fa-question-circle" aria-hidden="true"></i>},
    {id:6,btn:'Rate Us',svg:<i class="fa fa-star" aria-hidden="true"></i>},
    {id:7,btn:'Logout',svg:<i class="fa fa-sign-out" aria-hidden="true"></i>}
  ]
  const[showTab,setShowTab] = useState(1)
  const [buttons,setbuttons] = useState(initialState)
  const displayProfile = (e) =>{
    setShowTab(e)
  }
  
  return (
    <React.Fragment>
        <Header />
        <article className='container-fluid'>
          <section className='row'>
            <aside className='col-md-3 bg-secondary py-3 text-white fw-bold d-flex flex-column'>
              <h2>Settings</h2>
              <hr />
              <ul className='nav flex-column'>
                {
                  buttons.map((item,index) => <button className='btn btn-light py-4 fs-4 my-2' key={index} style={showTab == item.id ? {backgroundColor:'aqua'}:{}} id={item.id} onClick={() => displayProfile(item.id)}><li>{item.svg} {item.btn}</li></button>)
                }
              </ul>
            </aside>
            <section className='col-md-9' style={{backgroundColor:'beige'}}>
              <div className='profile' style={(showTab === 1) ? {display:'block'}:{display:'none'}}>
                <EditProfile />
              </div>
              <div className='profile' style={showTab === 2 ? {display:'block'}:{display:'none'}}>
                <Notification />
              </div>
              <div className='profile' style={showTab === 3 ? {display:'block'}:{display:'none'}}>
                <ReferAndEarn />
              </div>
              <div className='profile' style={showTab === 4 ? {display:'block'}:{display:'none'}}>
                <PrivacyAndPolicy />
              </div>
            </section>
          </section>
        </article>
        <Footer />
    </React.Fragment>
  )
}

export default Settings