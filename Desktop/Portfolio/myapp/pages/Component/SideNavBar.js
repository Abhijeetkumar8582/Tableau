import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Contact() {
  return (
    <>
      <div style={{ position: "fixed" }}>


        <div className='d-flex flex-column' style={{ top: "15%" }} >

          <GitHubIcon sx={{
            width: 30,
            height: 30,
            marginTop: 50,
            marginLeft: 1,
            '&:hover': {
              fill: "#4b68fa",
              transform: "translateY(-5px)"
            },
          }} />


          <EmailIcon sx={{
            width: 30,
            height: 30,
            marginTop: 1,
            marginLeft: 1,
            '&:hover': {
              fill: "#f72500",
              transform: "translateY(-5px)"
            },
          }} />


          <LinkedInIcon sx={{
            width: 30,
            height: 30,
            marginTop: 1,
            marginLeft: 1,

            '&:hover': {
              fill: "#0021f7",
              transform: "translateY(-5px)"
            },
          }} />


          <InstagramIcon sx={{
            width: 30,
            height: 30,
            marginTop: 1,
            marginLeft: 1,
            '&:hover': {
              fill: "#ff4ab7",
              transform: "translateY(-5px)"
            },
          }} />

        </div>

        <div style={{ borderLeft: "2px solid black", marginTop: "5px", marginLeft: "20px", height: "180px" }}></div>
      </div>


    </>

  )
}

export default Contact