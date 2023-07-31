import React,{ useEffect }  from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../Redux/NewsSlice'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const news = useSelector((state) => state.cryptoNews)
    console.log(news,'crt')
    const dispatch = useDispatch()
    useEffect(() =>{
        if(news && news.status == "idle"){
            dispatch(fetchNews()) 
        }
    })
    console.log(news,'k')
    const newsData = news.cryptoNews.articles
    console.log(newsData,'news')
  return (
    <React.Fragment>
        <Header />
        <article className='container-fluid' style={{margin:'20px 0px'}}>
          <h2>The Latest Crypto News</h2>
          <section className='row justify-content-center'>
            {newsData && newsData.map((item,index) => <div key={index} style={{width:'80%',marginTop:'15px'}}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography><label>{item.title}</label><br/><label>{item.date}</label></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{color:'#888'}}>
                    <label>{item.text}</label><br />
                    <label style={{margin:'10px 0px'}}>Source: {item.source}</label><br />
                    <p>Class: {item.sentiment.class}</p>
                    <p>Polarity: {item.sentiment.polarity}</p>
                    <p>Subjectivity: {item.sentiment.subjectivity}</p>
                    <Link to={item.url} style={{textDecoration:'none'}}>View more...</Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>)}
          </section>
        </article>
        <Footer />
    </React.Fragment>
  )
}

export default Dashboard