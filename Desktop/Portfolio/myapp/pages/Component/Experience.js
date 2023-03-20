
import NavBar from './NavBar'
import Style from "/Users/abhijeetkumar/Desktop/Portfolio/myapp/styles/About.module.css"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import expItem from '../Json/Expirence.json'


function Experience() {
  return (
    <>
    <NavBar/>
   <h1 style={{marginTop:"10%"}} className={Style.test}>k</h1>
   <Timeline position="alternate">
  {expItem.map((element,index)=>


    
        index%2===0?(<TimelineItem key={index}>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
          <HotelIcon />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          {element.desginstion}
        </Typography>
        <Typography>{element.jobtype}</Typography>
      </TimelineContent>
    </TimelineItem>)
    :(
    
     <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        <TimelineDot color="secondary">
          <RepeatIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
        {element.desginstion}
        </Typography>
        <Typography>{element.jobtype}</Typography>
        <Typography>{element.jobRole}</Typography>
      </TimelineContent>
    </TimelineItem>)
        

   
 
  )}
    </Timeline>
   </>
  )
}

export default Experience


{/* <>

<Timeline position="alternate">
  {licenses.map((element, index) =>
    index % 2 === 0 ? (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {element.tittle}
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
    ) : (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    )
  )}
</Timeline> 
 </> */}