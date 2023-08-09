import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const PrivacyAndPolicy = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) =>(event,isExpanded) =>{
    setExpanded(isExpanded ? panel:false)
  }
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
            <li>Our goal is to simplify your crypto experience. If you do not wish for your personal information to be collected, used, or disclosed as described in this Privacy Policy, or you are under 18 years of age, you should stop accessing our Services.</li>
            <li>We collect and use your information in order to provide and improve our Services and your experience, protect the security and integrity of our platform, and meet our legal obligations.
              <ul style={{listStyleType:'disc'}}>
                <li>To learn more, explore <Link to='#' style={{textDecoration:'none'}}>Section 1. What Information We Collect and Section</Link> <Link to='#' style={{textDecoration:'none'}}>2. How We Use Your Information.</Link></li>
              </ul>
            </li>
            <li>We share your information with other Crypto Clash companies, as well as trusted third parties and service providers, in order to offer our Services and fulfill legal requirements.
              <ul style={{listStyleType:'disc'}}>
                <li>To learn more, explore <Link to='#' style={{textDecoration:'none'}}>Section 3. How And Why We Share Your Information.</Link></li>
              </ul>
            </li>
            <li>We offer privacy tools for you to request access to or deletion of information we hold about you. You can use these tools by visiting your Privacy Rights Dashboard. Depending on where you live, you may also have other privacy rights under law.</li>
            <li>If you have any questions, please contact us on our Support Portal or at dpo@Crypto Clash.com. <Link to='#' style={{textDecoration:'none'}}>See Section 9. How to Contact Us With Questions</Link> for more information.</li>
          </ul>
          <section style={{}}>
            <h2>What Information We Collect</h2>
            <p>We collect the following personal information and documentation:</p><hr/>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><h5>Information You Provide to Us</h5></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <table className='table table-striped table-bordered'>
                    <thead>
                      <tr>
                        <th>Information Category</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Basic Customer Information</td>
                        <td>Name, Address, Date of birth, Nationality, Country of residence, Gender, Phone number, Email Address </td>
                      </tr>
                      <tr>
                        <td>Supplemental Identification Information</td>
                        <td>Utility bills (for your billing address), Photographs and/or videos, Government-issued identity document, e.g. passport, driver’s license, or state identification card, Social security number, Employment information (e.g. company name), Proof of residency, including visa information</td>
                      </tr>
                    </tbody>
                  </table>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginTop:'15px'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                
              >
                <Typography><h5>Information Collected Automatically</h5></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <table className='table table-striped table-bordered'>
                    <thead>
                      <tr>
                        <th>Information Category</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>App, browser, and device information</td>
                        <td>Information about the device, operating system, and browser you’re using Other device characteristics or identifiers (e.g. plugins, the network you connect to) IP address </td>
                      </tr>
                      <tr>
                        <td>Product Usage Information</td>
                        <td><p><b>Activity information:</b> Information about what you view or click on while visiting our Sites and Apps and how you use our Services</p>
                        <p><b>Diagnostic and Troubleshooting Information:</b> Information about how our Services are performing when you use them, i.e. service-related diagnostic and performance information, including timestamps, crash data, website performance logs, and error messages or reports</p></td>
                      </tr>
                    </tbody>
                  </table>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </section>
        </article>
      </article>
    </React.Fragment>
  )
}

export default PrivacyAndPolicy