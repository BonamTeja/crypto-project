import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const Accordin = (props) => {
    const {expand, mainData, dataItems, handleFunction} = props
    // const [expanded, setExpanded] = useState(false);
    // const handleChange = (panel) =>(event,isExpanded) =>{
    //     console.log(isExpanded,'isExpanded')
    //     setExpanded(isExpanded ? panel : false)
    //     console.log(panel,'panel')
    // }
    // console.log(expanded,'expanded')
    
  return (
    <>
        <Accordion sx={{marginTop:'10px'}} expanded={mainData.id === expand} onChange={() => handleFunction(mainData.id)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{width:'100%',alignItems:'center'}}>
                    <label style={{fontWeight:'bold',color:'#00f',fontSize:'22px'}}>{mainData.title}</label>
                    <label style={{float:'right'}}>{mainData.label}</label>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{color:'#888'}}>
                    {dataItems && dataItems.map((item,index) => <div key={index}>
                        <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>{item.workRole}</label><br />
                        <label>{item.workLocation}</label>
                    </div>)}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </>
  )
}

export default Accordin