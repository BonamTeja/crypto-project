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
import Accordin from '../common/Accordin';
import CareerCard from '../elements/CareerCard';
const Careers = () => {
    const mainDataOne = {
        id:1,
        title:'Business Development & Patnerships',
        label:'5 openings'
    }
    const dataItemsOne = [
        {workRole:'Head, Mobile Business Development',workLocation:'Dublin, Ireland'},
        {workRole:'Head, Mobile Business Development',workLocation:'Berlin, Germany'},
        {workRole:'Head, Mobile Business Development',workLocation:'London, UK'},
        {workRole:'Operations Manager',workLocation:'London, UK'},
        {workRole:'Operations Manager',workLocation:'Remote, UK'},
    ]

    const mainDataTwo = {
        id:2,
        title:'Business Operations & Strategy',
        label:'2 openings'
    }

    const dataItemsTwo = [
        {workRole:'Business Operations & Strategy Associate', workLocation:'Remote, USA'},
        {workRole:'Business Operations & Strategy Senior Associate', workLocation:'Remote, USA'}
    ]

    const mainDataThree = {
        id:3,
        title:'IT',
        label:'3 openings'
    }

    const dataItemsThree = [
        {workRole:'Senior Network Engineer', workLocation:'Remote, USA'},
        {workRole:'Site Reliability Engineer - Identity Platform', workLocation:'Remote, USA'},
        {workRole:'Staff Site Reliability Engineer - Client Platform', workLocation:'Remote, USA'},
    ]
    const [flag, setFlag] = useState()
    const handleFunction = (p) =>{
        setFlag(p)
    }

    const careerData = [
        {
            id:1,
            heading:'Increasing economic freedom world-wide',
            description:'Our mission is to increase economic freedom around the world, and we couldn’t do this without hiring the best people.',
            link:'Learn more...',
            image:imageOne,
            imageAlt: 'imageOne', 
        },
        {
            id:2,
            heading:'Interviewing at Crypto Clash',
            description:'Want to learn more about how to work at the world’s most trusted cryptocurrency platform? Let us give you the details on how we hire.',
            link:'Learn more...',
            image: imageTwo,
            imageAlt:'imageTwo',
        },
        {
            id:3,
            heading:'Life at Crypto Clash',
            description:'We’re a remote-first group of hard-working overachievers who are deeply focused on building the future of finance and cryptoeconomy for our users across the globe. Know those people who always lead the group project? That’s us.',
            link:'Learn more...',
            image: imageThree,
            imageAlt: 'imageThree',
        }
    ]
  return (
    <React.Fragment>
        <Header />
        <article>
            <h1 style={{textAlign:'center'}}>Careers</h1>
            <section style={{width:'98%',margin:'10px auto',padding:'20px 0px',borderRadius:'10px',backgroundColor:'#feffcf'}}>
                <h3 style={{textAlign:'center'}}>Lead the future of the cryptoeconomy</h3>
                <h5 style={{textAlign:'center'}}>We’re Crypto Clash. We’re the leading choice to join the crypto revolution. Come work with us.</h5>
                <CareerCard careerData={careerData}  />
            </section>
            <section style={{margin:'10px auto',width:'98%'}}>
                <h3 style={{textAlign:'center',paddingBottom:'15px',borderBottom:'8px solid #ddd',borderRadius:'5px'}}>Choose your team</h3>
                <Accordin expand={flag} mainData={mainDataOne} dataItems={dataItemsOne} handleFunction={handleFunction} />
                <Accordin expand={flag} mainData={mainDataTwo} dataItems={dataItemsTwo} handleFunction={handleFunction} />
                <Accordin expand={flag} mainData={mainDataThree} dataItems={dataItemsThree} handleFunction={handleFunction} />
            </section>
        </article>
        <Footer />
    </React.Fragment>
  )
}

export default Careers