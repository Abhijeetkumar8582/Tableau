
import NavBar from './NavBar'
import Style from "/Users/abhijeetkumar/Desktop/Portfolio/myapp/styles/About.module.css"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import expItem from '../Json/Expirence.json'
import Head from 'next/head';


function Experience() {
  
    return (
        <>
        <Head>
        <title>ABHI | Experience</title>
      </Head>
      
            <NavBar />
            <h1 className={Style.heading} >Where I’ve Worked</h1>
            <Timeline position="alternate">

                {expItem.map((element, index) =>

                    index % 2 === 0 ? (<TimelineItem key={index}>

                        <TimelineSeparator key={index}>
                            <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                            <TimelineDot color="success" variant="outlined">
                                <img src={element.logo} alt="Picture of the author" width={30} height={30} style={{ borderRadius: "20px" }}></img>
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        </TimelineSeparator>
                        <div className={Style.box} >
                            <TimelineContent sx={{ py: '12px', px: 2 }}>

                                <Typography variant="h6" className={Style.desginstion} component="span">
                                    {element.desginstion}
                                </Typography>
                                <h5 className={Style.jobtype}>{element.jobtype}</h5>
                                <Typography className={Style.jobrole}>{element.jobRole}</Typography>

                            </TimelineContent>
                        </div>
                    </TimelineItem>)
                        : (

                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    <TimelineDot color="primary" variant="outlined">
                                        <img src={element.logo} alt="Picture of the author" width={30} height={30} style={{ borderRadius: "20px" }}></img>
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <div className={Style.box} >
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" className={Style.desginstion} component="span">
                                            {element.desginstion}
                                        </Typography>
                                        <h5 className={Style.jobtype}>{element.jobtype}</h5>
                                        <Typography className={Style.jobrole}>{element.jobRole}

                                        </Typography>
                                    </TimelineContent>
                                </div>
                            </TimelineItem>)


                )}
            </Timeline>
        </>
    )
}

export default Experience

