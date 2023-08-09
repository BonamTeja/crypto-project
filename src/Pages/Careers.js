import React from 'react'
import Header from '../Helpers/Header'
import Footer from '../Helpers/Footer'
import imageOne from '../images/economic_freedom.png';
import imageTwo from '../images/interviewing.png';
import imageThree from '../images/life.png';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
const Careers = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) =>(event,isExpanded) =>{
        setExpanded(isExpanded ? panel:false)
    }
  return (
    <React.Fragment>
        <Header />
        <article>
            <h1 style={{textAlign:'center'}}>Careers</h1>
            <section style={{width:'98%',margin:'10px auto',padding:'20px 0px',borderRadius:'10px',backgroundColor:'#feffcf'}}>
                <h3 style={{textAlign:'center'}}>Lead the future of the cryptoeconomy</h3>
                <h5 style={{textAlign:'center'}}>We’re Crypto Clash. We’re the leading choice to join the crypto revolution. Come work with us.</h5>
                <div style={{width:'98%',margin:'20px 0px 20px 0px auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={imageOne} alt='image1' style={{width:'30%',borderRadius:'15px'}} />
                    <div style={{width:'50%',marginLeft:'8%'}}>
                        <h5>Increasing economic freedom world-wide</h5>
                        <p>Our mission is to increase economic freedom around the world, and we couldn’t do this without hiring the best people.</p>
                        <Link to='#' style={{textDecoration:'none'}}>Learn more...</Link>
                    </div>
                </div>
                <div style={{width:'98%',margin:'20px 0px 20px 0px auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'50%',marginRight:'8%'}}>
                        <h5>Interviewing at Crypto Clash</h5>
                        <p>Want to learn more about how to work at the world’s most trusted cryptocurrency platform? Let us give you the details on how we hire.</p>
                        <Link to='#' style={{textDecoration:'none'}}>Learn more...</Link>
                    </div>
                    <img src={imageTwo} alt='image1' style={{width:'30%',borderRadius:'15px'}} />
                </div>
                <div style={{width:'98%',margin:'20px 0px 20px 0px auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={imageThree} alt='image1' style={{width:'30%',borderRadius:'15px'}} />
                    <div style={{width:'50%',marginLeft:'8%'}}>
                        <h5>Life at Crypto Clash</h5>
                        <p>We’re a remote-first group of hard-working overachievers who are deeply focused on building the future of finance and cryptoeconomy for our users across the globe. Know those people who always lead the group project? That’s us.</p>
                        <Link to='#' style={{textDecoration:'none'}}>Learn more...</Link>
                    </div>
                </div>
            </section>
            <section style={{margin:'10px auto',width:'98%'}}>
                <h3 style={{textAlign:'center',paddingBottom:'15px',borderBottom:'8px solid #ddd',borderRadius:'5px'}}>Choose your team</h3>
                <Accordion sx={{marginTop:'10px'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography sx={{width:'100%',alignItems:'center'}}>
                            <label style={{fontWeight:'bold',color:'#00f',fontSize:'22px'}}>Business Development & Patnerships</label>
                            <label style={{float:'right'}}>5 openings</label>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color:'#888'}}>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Head, Mobile Business Development</label><br />
                                <label>Dublin, Ireland</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Head, Mobile Business Development</label><br />
                                <label>Berlin, Germany</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Head, Mobile Business Development</label><br />
                                <label>London, UK</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Operations Manager</label><br />
                                <label>London, UK</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Operations Manager</label><br />
                                <label>Remote, UK</label>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginTop:'10px'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography sx={{width:'100%',alignItems:'center'}}>
                            <label style={{fontWeight:'bold',color:'#00f',fontSize:'22px'}}>Business Operations & Strategy</label>
                            <label style={{float:'right'}}>2 openings</label>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color:'#888'}}>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Business Operations & Strategy Associate</label><br />
                                <label>Remote, USA</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Business Operations & Strategy Senior Associate</label><br />
                                <label>Remote, USA</label>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{marginTop:'10px'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography sx={{width:'100%',alignItems:'center'}}>
                            <label style={{fontWeight:'bold',color:'#00f',fontSize:'22px'}}>IT</label>
                            <label style={{float:'right'}}>3 openings</label>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color:'#888'}}>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Senior Network Engineer</label><br />
                                <label>Remote, USA</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Site Reliability Engineer - Identity Platform</label><br />
                                <label>Remote, USA</label>
                            </div>
                            <div>
                                <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>Staff Site Reliability Engineer - Client Platform</label><br />
                                <label>Remote, USA</label>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </section>
        </article>
        <Footer />
    </React.Fragment>
  )
}

export default Careers