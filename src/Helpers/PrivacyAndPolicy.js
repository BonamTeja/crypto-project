import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AccordinTable from '../elements/AccordinTable';
const PrivacyAndPolicy = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) =>(event,isExpanded) =>{
    setExpanded(isExpanded ? panel:false)
  }

  const Privacydata = [
    {id:1, title:'Information You Provide to Us', categoryHead:'Information Category', descriptionHead:'Description', category:[{categoryOne:'Basic Customer Information',descriptionOne:['Name, Address, Date of birth, Nationality, Country of residence, Gender, Phone number, Email Address.']}, { categoryOne:'Supplemental Identification Information', descriptionOne:['Utility bills (for your billing address), Photographs and/or videos, Government-issued identity document, e.g. passport, driver’s license, or state identification card, Social security number, Employment information (e.g. company name), Proof of residency, including visa information.']}],},
    {id:2, title:'Information Collected Automatically', categoryHead:'Information Category', descriptionHead:'Description', category:[{categoryOne:'App, browser, and device information.', descriptionOne:['Information about the device, operating system, and browser you’re using Other device characteristics or identifiers (e.g. plugins, the network you connect to) IP address.']},{categoryOne:'Product Usage Information', descriptionOne:[{heading:'Activity information:', description:'Information about what you view or click on while visiting our Sites and Apps and how you use our Services.'},{heading:'Diagnostic and Troubleshooting Information:',description:'Information about how our Services are performing when you use them, i.e. service-related diagnostic and performance information, including timestamps, crash data, website performance logs, and error messages or reports.'}]}]},
    {id:3, title:'Information we obtain from Affiliates and third parties', categoryHead:'Information Category', descriptionHead:'Description', category:[{categoryOne:'CryptoClash Group of Companies (“Affiliates”) ', descriptionOne:['We may obtain information about you, such as Basic Customer Information, Transaction Information and Product Usage Information, from our Affiliates as a normal part of conducting business. For instance, if you link your various CryptoClash accounts e.g. your CryptoClash Wallet account or your CryptoClash Commerce account, we may utilize your Wallet Information and Financial Information in order to convert cryptocurrency into fiat and allow you to make withdrawals into your bank account.']},
    {categoryOne:'Public Database Information', descriptionOne:['We obtain information about you from public databases, such as the United Nations Sanctions List, US ITA Consolidated Screening List, and the SEC EDGAR, including your name, address, email address, phone number, gender, national ID number and nationality/country of residence, date of birth, job role, public employment profile, listing on any sanctions lists maintained by public authorities, and other data as necessary']},
    {categoryOne:'Blockchain Data', descriptionOne:['We may analyze public blockchain data, including timestamps of transactions or events, transaction IDs, digital signatures, transaction amounts, and wallet addresses']},]}
  ]

  const listData =[
    {
      id:1,
      mainList:'Our goal is to simplify your crypto experience. If you do not wish for your personal information to be collected, used, or disclosed as described in this Privacy Policy, or you are under 18 years of age, you should stop accessing our Services.',
      subList:[],
      mainLinks:[],
    },
    {
      id:2,
      mainList:'We collect and use your information in order to provide and improve our Services and your experience, protect the security and integrity of our platform, and meet our legal obligations.',
      subList:[{heading:'To learn more, explore',links:['Section 1. What Information We Collect','Section 2. How We Use Your Information.']}],
      mainLinks:[],
    },
    {
      id:3,
      mainList:'We share your information with other Crypto Clash companies, as well as trusted third parties and service providers, in order to offer our Services and fulfill legal requirements.',
      subList:[{heading:'To learn more, explore', links:['Section 3. How And Why We Share Your Information.']}],
      mainLinks:[],
    },
    {
      id:4,
      mainList:'We offer privacy tools for you to request access to or deletion of information we hold about you. You can use these tools by visiting your Privacy Rights Dashboard. Depending on where you live, you may also have other privacy rights under law.',
      subList:[],
      mainLinks:[],
    },
    {
      id:5,
      mainList:'If you have any questions, please contact us on our Support Portal or at dpo@Crypto Clash.com.',
      subList:[],
      mainLinks:['See Section 9. How to Contact Us With Questions'],
    },
  ]

  return (
    <React.Fragment>
      <article className='text-bg-light rounded-5 my-3 p-4'>
        <article>
          <h3>Crypto Clash Global Privacy Policy</h3>
          <label style={{width:'99%', borderBottom:'1px solid #aaa'}}>Last Updated: August 2, 2023</label>
          <p style={{marginTop:'10px'}}>We at Crypto Clash (the Crypto Clash entities listed in Section 11 
            below, referred to here as <b>“we”, “us” or “our”</b>) respect and protect the privacy of those who explore our Services (<b>“Users”</b>) and Users who sign up for and access our Services (<b>“Customers”</b>) (together referred throughout this policy as <b>“you”</b> and <b>“your”</b>).
            This Privacy Policy describes how we collect, use, and share personal information when you explore, sign up for or access our “Services”, which include the services offered on our websites, including <Link to='#' style={{textDecoration:'none'}}>Crypto Clash.com</Link >, <Link to='#' style={{textDecoration:'none'}}>Crypto Clash.com/exchange</Link>, <Link to='#' style={{textDecoration:'none'}}>Crypto Clash.com/prime</Link>, <Link to='#' style={{textDecoration:'none'}}>custody.Crypto Clash.com</Link >, <Link to='#' style={{textDecoration:'none'}}>Crypto Clash.com/cloud</Link> (each a <b>“Site”</b> and collectively the <b>"Sites"</b>) or when you use the Crypto Clash mobile app, the Crypto Clash Card App, Crypto Clash Exchange, Crypto Clash Prime, Dapp Wallet, or Crypto Clash Custody application programming interface (<b>“API”</b>) or third party applications relying on such APIs (together, our <b>“Apps”</b>) and related services. 
            If you reside outside of the UK and the European Economic Area (the <b>“EEA”</b>), accessing and using our Services means that you accept this Privacy Policy and its terms. 
            It is important that you understand how we use your information. You should read this page in full, but below are the key highlights and some helpful links:
          </p>
          <ul style={{marginBottom:'20px'}}>
            {
              listData && listData.map((item, index) => <li>{item.mainList} {
                item.subList.length > 0 ? <ul style={{listStyleType:'square'}}>
                  {
                    item.subList && item.subList.map((itm,id) => <li key={id}>
                      {itm.heading} {itm.links && itm.links.map((it1,id1) => <Link key={id1} to='#' style={{textDecoration:'none'}} >{it1} </Link>)}
                    </li> )
                  }
                </ul> : null
              }{
               item.mainLinks && item.mainLinks.map((it2, id2) => <Link key={id2} to='#' style={{textDecoration:'none'}}>{it2} </Link>) 
              }</li> )
            }
          </ul>
          <section>
            <h2>What Information We Collect</h2>
            <p>We collect the following personal information and documentation:</p><hr/>
            <AccordinTable Privacydata={Privacydata} />
          </section>
        </article>
      </article>
    </React.Fragment>
  )
}

export default PrivacyAndPolicy