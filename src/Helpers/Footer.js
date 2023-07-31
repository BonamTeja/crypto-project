import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
      <section>
        <footer>
          <div className= "container-fluid" style={{backgroundColor:"black", color:"white"}}>
            <div className='container'>
              <div className="row py-2">
                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>About</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>About</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"whitesmoke"}}>About</a></li>
                  </ul>
                </div>
                <div className="col-md-5 offset-md-1 mb-3">

                </div>
              </div>
            </div>
          </div>

          <div style={{backgroundColor:"rgb(80,80,80)", color:"white"}}>
            <div className="container d-flex flex-column flex-sm-row justify-content-between py-1">
              <p>© 2023 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className='ms-3' ><a className="link-body-emphasis" href="#"><i className="fa fa-instagram fa-lg" style={{color:"white"}} aria-hidden="true"></i></a></li>
                <li className='ms-3' ><a className="link-body-emphasis" href="#"></a><i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i></li>
                <li className='ms-3' ><a className="link-body-emphasis" href="#"></a><i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </React.Fragment>
  )
}

export default Footer