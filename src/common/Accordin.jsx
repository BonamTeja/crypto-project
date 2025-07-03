import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const Accordin = (props) => {
    const {data} = props
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) =>(event,isExpanded) =>{
        console.log(isExpanded,'isExpanded')
        setExpanded(isExpanded ? panel : false)
        console.log(panel,'panel')
    }
    console.log(expanded,'expanded')
    
  return (
    <>
        {
            data && data.map((item,index) => <Accordion key={index} sx={{margin:'10px 0px'}} expanded={item.id === expanded} onChange={handleChange(item.id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{width:'100%',alignItems:'center'}}>
                        <label style={{fontWeight:'bold',color:'#00f',fontSize:'22px'}}>{item.mainData.title}</label>
                        <label style={{float:'right'}}>{item.mainData.label}</label>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color:'#888'}}>
                        {item.dataItems && item.dataItems.map((itm,indx) => <div key={indx}>
                            <label style={{fontWeight:'bold',color:'#55f',fontSize:'18px'}}>{itm.workRole}</label><br />
                            <label>{itm.workLocation}</label>
                        </div>)}
                    </Typography>
                </AccordionDetails>
            </Accordion>)
        }
    </>
  )
}

export default Accordin