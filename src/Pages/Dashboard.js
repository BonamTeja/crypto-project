import React,{ useEffect }  from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../Redux/NewsSlice';
import { fetchData } from '../Redux/CryptoSlice';
import Accordion from '@mui/material/Accordion';
import DataCard from '../elements/DataCard';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const news = useSelector((state) => state.cryptoNews)
  console.log(news,'crt')
  const data = useSelector((state) => state.crypto)
  const cryptoData = (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins != null) && (data && data.cryptoCoins && data.cryptoCoins && data.cryptoCoins.data && data.cryptoCoins.data.coins.length > 0) ? data.cryptoCoins.data.coins : null;
  console.log(cryptoData)
  const cryptoTop = cryptoData && cryptoData.filter((item) => Number(item.change) > 0).sort(function(a,b) {
        return b.change - a.change
    })
  const cryptoLosers = cryptoData && cryptoData.filter((item) => Number(item.change) < 0).sort(function(a,b) {
    return a.change - b.change
  })
  const status = data.status
  const dispatch = useDispatch()
  useEffect(() =>{
    if(news && news.status == "idle"){
      dispatch(fetchNews()) 
    }
    if(status === 'idle'){
      dispatch(fetchData())
    }
  })
  console.log(news,'k')
  const newsData = news.cryptoNews.articles
  console.log(newsData,'news')
  return (
    <React.Fragment>
        <Header />
        <article className='container mt-4'>
          <h2 className='text-center'>Today's Crypto News</h2>
          <section className='container py-3' style={{margin:'0px auto', width:'100%'}}>
            <div className='row align-items-center justify-content-between'>
              <DataCard cryptoTop={cryptoTop} title="Top Gainers" className="col-md-6" noItems={5} />
              <DataCard cryptoTop={cryptoLosers} title="Top Losers" className="col-md-6" noItems={5} />
            </div>
            <div className='row align-items-top justify-content-between my-4'>
              <DataCard cryptoTop={cryptoData} title="Top 10 Coins" className="col-md" noItems={10} />
            </div>
          </section>
        </article>
        <article className='container mt-4'>
          <h2 className='text-center'>The Latest Crypto News</h2>
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