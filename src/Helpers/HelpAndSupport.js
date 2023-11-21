import React,{ useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../Redux/NewsSlice';
import { Link } from 'react-router-dom';
import imageOne from '../images/getStarted-0.svg';
import imageTwo from '../images/contactInfo-1.svg'
import imageThree from '../images/safe.svg';
import imageFour from '../images/newUserChecklistBuyCrypto-1.svg';
import imageFive from '../images/taxSeason.svg';



const HelpAndSupport = () => {
    const news = useSelector((state) => state.cryptoNews)
    const dispatch = useDispatch()
    useEffect(() =>{
        if(news && news.status == "idle"){
            dispatch(fetchNews()) 
        }
    })
    const newsData = news.cryptoNews.articles
    console.log(newsData,'mmm')

    const helpData = [
        {id:1, imageUrl:imageOne, imageAlt:'imageOne', heading:'Getting Started', description:'Everything you need to start using CryptoClash'},
        {id:2, imageUrl:imageTwo, imageAlt:'imageTwo', heading:'Managing my account', description:'Manage your account, settings, and more'},
        {id:3, imageUrl:imageThree, imageAlt:'imageThree', heading:'Fraud and suspicious activity', description:'Lock your account, secure your funds'},
        {id:4, imageUrl:imageFour, imageAlt:'imageFour', heading:'Trading and funding', description:'Buy, sell, convert, send, or receive crypto'},
        {id:5, imageUrl:imageThree, imageAlt:'imageFive', heading:'Privacy and security', description:'Avoid scams and protect your account'},
        {id:6, imageUrl:imageFive, imageAlt:'imageSix', heading:'Taxes', description:'Understanding crypto taxes and reports'}
    ]

    return (
        <>
            <article>
                <section className='container mt-4'>
                    <h2><i class="fa fa-bolt" aria-hidden="true"></i> Top Articles</h2>
                    <div className='row justify-content-between' style={{margin:'10px 0px'}}>
                        {
                            newsData && newsData.map((item,index) => index <5 ? <Link to={item.url} className='col-5 mt-3 link_color' style={{textDecoration:'none', color:'#666', fontWeight:'bold' , display:'flex', alignItems:'center', justifyContent:'space-between'}}> <span style={{marginRight:'10px'}}>{item.text}</span> <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </Link>:null )
                        }
                    </div>
                </section>
                <section className='container mt-4'>
                    <h2><i class="fa fa-question-circle" aria-hidden="true"></i> Help by Topic</h2>
                    <div className='row justify-content-between' style={{margin:'10px 0px'}}>
                        {
                            helpData && helpData.map((item,index) => <div className='col-4 mt-3'>
                                <div className="card" style={{width:'100%', textAlign:'center', padding:'15px'}}>
                                    <div className="card-body">
                                        <img src={item.imageUrl} width={40} height={40} alt={item.imageAlt} />
                                        <h5 className="card-title mt-3">{item.heading}</h5>
                                        <p className="card-text" style={{height:'48px'}}>{item.description}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
            </article>
        </>
    )
}

export default HelpAndSupport