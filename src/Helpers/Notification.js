import React from 'react'
import NotificationAlert from '../elements/NotificationAlert'

const Notification = () => {

  const notificationData = [
    {id:1, heading:'Price Alert',subHeading:'-Create customerised price alerts',className:'fa fa-bell-o'},
    {id:2, heading:'Watchlist & Portfolio Alert',subHeading:'-Get price alert for all coins on your watchlist and portfolio',className:'fa fa-user-o'},
  ]
  return (
    <React.Fragment>
        <article className='text-bg-dark rounded-5 my-3 py-4'>
            <article className='container-fluid p-2 text-bg-secondary rounded-5' style={{width:'95%',margin:'10px auto'}}>
                <h2 className='text-center'>Notification</h2>
            </article>
            <NotificationAlert data={notificationData} />
        </article>
    </React.Fragment>
  )
}

export default Notification