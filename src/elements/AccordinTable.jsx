
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AccordinTable = (props) => {
    const {Privacydata} = props
    const [expanded, setExpanded] = useState();

    const handleChange = (panel) =>(event,isExpanded) =>{
        setExpanded(isExpanded ? panel:false)
    }
  return (
    <>
        {
            Privacydata && Privacydata.map((item,index) => <Accordion key={index} expanded={item.id ==expanded} onChange={handleChange(item.id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><h5>{item.title}</h5></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>{item.categoryHead}</th>
                                    <th>{item.descriptionHead}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    item.category && item.category.map((itm,ind) => <tr key={ind}>
                                        <td>{itm.categoryOne}</td>
                                        {
                                            itm.descriptionOne.length > 1 ? <td>{itm.descriptionOne.map((itx,i) => <p key={i}><b>{itx.heading}</b> {itx.description}</p>)}</td> : <td>{itm.descriptionOne[0]}</td>
                                        }
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </Typography>
                </AccordionDetails>
            </Accordion>)
        }
    </>
  )
}

export default AccordinTable