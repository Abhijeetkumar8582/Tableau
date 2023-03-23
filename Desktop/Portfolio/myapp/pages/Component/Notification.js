import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Notification() {
    
    const buttonclick = () => {
        // setalert(false)
    }
    return (

        <>

            <div className='d-flex justify-content-end '>
                 <Card className='slide' style={{ marginTop: "10%",zIndex:"1", position: "fixed" }} sx={{ minWidth: 375 }}>
                    <CardContent>

                        <Typography variant="h7" component="div" style={{ color: "#FD1837" }}>
                            <b>By hovering over the card, you will be able to see<br /> what I have learned and my certificate.</b>
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={buttonclick} style={{ marginLeft: "1%", color: "black" }}>Close!!!</Button>
                    </CardActions>
                </Card>

            </div>
        </>
    )
}

export default Notification