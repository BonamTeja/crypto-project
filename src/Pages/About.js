import React from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import image2 from '../images/aboutImg.webp';

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <article className='container'>
        <section className='row my-3'>
          <div className='col-md-6'>
            <h2>About Us</h2>
            <p>We didn't become India's biggest crypto company overnight. The journey to make money equal for all began in 2017 with just a handful of us.</p>
            <p>Crypto Clash is now India's largest crypto app with over 18 million users and more than 500 employees. We're backed by some of the world's leading investors including a16z, Tiger Global and Sequoia Capital.</p>
            <p>The cornerstones of our culture are customer obsession and an employee-first approach. We're building a platform that democratises investments for everyone — making them simple, safe and accessible to every Indian.</p>
          </div>
          <div className='col-md-6'>
            <figure>
              <img src={image2} style={{width:'100%'}} />
            </figure>
          </div>
        </section>
      </article>
      <Footer />
    </React.Fragment>
  )
}

export default About