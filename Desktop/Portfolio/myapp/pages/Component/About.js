import NavBar from './NavBar'
import Image from 'next/legacy/image'
import aboutJson from '../Json/AboutmeSkills.json'
import licenses from '../Json/AboutmeLicenses.json'
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Head from 'next/head';



function About() {

    const theme = useTheme();
    const [open, setOpen] = useState({ });
    const handleClickOpen = (tittle) => {
        setOpen({ ...open, [tittle]: true });
    };

    const handleClose = (tittle) => {
        setOpen({ ...open, [tittle]: false });
    };

    return (
        <>  
         <Head>
        <title >ABHI | About</title>
        
      </Head>
            <NavBar />
            <div style={{ marginTop: "70px" }}></div>
            <div className="clearfix my-3" >
                <img src="/Image/aboutPageImage.jpg" className="col-md-6 float-md-end mb-3 my-3 ms-md-3" style={{ maxWidth: "700px", width: "100%", borderRadius: "20px" }} alt="AboutMe" />
                <div className='my-5'></div>
                <h1 className=' textfont  text-center my-5'  >So, who am I?</h1>

                <h5 className=' content my-3 mx-3'>
                    Hello, I'm Abhijeet, a passionate tech enthusiast always eager to explore new technologies. I find joy in creating digital content that thrives on the internet. My interest in web development started with SQL back in 2020, and now building apps using React.</h5>

                <h5 className=' content my-3 mx-3'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Currently, I work for an AI startup where I am responsible for designing chatbots, integrating them, and resolving customer inquiries. My goal is to acquire knowledge about as many programming languages as possible, as I believe it will help me become a more versatile developer.
                </h5>

                <h5 className=' content my-3 mx-3'>I sometimes wonder whether I am fixing a bug or if the bug is controlling me. Additionally, I often dream about bugs and the experience is like battling King Kong while I am in the role of Godzilla, who is known as the king of monsters.</h5>

            </div>



            <h1 className='textfont  text-center my-3' style={{ fontFamily: "Copperplate" }}> Skills & Abilities</h1>
            <div className='container  my-5' style={{ width: "100%", maxWidth: "100vw" }}>
                <div className='d-flex d-flex justify-content-center flex-wrap'>
                    {aboutJson.map((element, index) => (
                        <div className='col-md-3' key={index}>
                            <div className=" mx-3 my-3" style={{ width: "18rem", justifyContent: "center", borderRadius: "20px", backgroundColor: "#FDA260", boxShadow: "3px 7px", marginLeft: "auto" }}>
                                <img src={element.logo} style={{ width: "100px", justifyContent: "center", marginLeft: "32%" }} className="-img-top " alt={element.skills} />
                                <div className="-body">
                                    <p className="content -text text-center"><strong>{element.skills}</strong></p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>



            <h1 className='textfont text-center my-5' style={{ fontFamily: "Copperplate" }}> Licenses & certifications</h1>
            <div className='container  my-5' style={{ width: "100%", maxWidth: "100vw" }}>

                <div className="container">
                    <div className="row mx-3">
                        {licenses.map((element, index) => (
                            <div className="card-wrapper col-lg-3 col-md-6 col-xs-12" key={element.tittle}>
                                <div className="card" style={{ maxWidth: "300px", width: "100%" }}>
                                    <div className="card-img-wrapper">
                                        <img className="card-img-top" src={element.logo} style={{ width: "100px" }} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="content card-title">{element.tittle}</h5>
                                        <div className="card-content">
                                            <p className="content card-text">{element.description}</p>
                                        </div>
                                        <div className='content card-text'>
                                            <Button className='btn'  style={{backgroundColor:  "#FDA260",border: "none"}} onClick={() => handleClickOpen(element.tittle)}>
                                                Certificate
                                            </Button>
                                            <Dialog
                                                disablePortal
                                                sx={{ width: "100%" }}
                                                open={open[element.tittle]||false}
                                                onClose={() => handleClose(element.tittle)}
                                                maxWidth="xl"
                                            >
                                                <DialogTitle>{element.tittle}</DialogTitle>
                                                <DialogContent>
                                                    <Image src={element.certificate}  onError={() => {element.certificate = "/Image/aboutPageImage.jpg"}}  priority  alt={element.tittle} width={950} height={550}></Image>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => handleClose(element.tittle)}>Perfect!!!</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>



            <h1 className=' textfont text-center my-5' > Reward & Recognition</h1>
            <div className='container' >
                <div className='box'>
                  <div style={{padding:"10px"}}></div>
                    <h4 className='rewards text-center my-3' style={{ Top: "10px",padding:"10px",color:"orange", fontFamily: "initial" }}>Yellow.ai Hackathon</h4>
                    <p className='text-center  my-3 mx-3 '>I have secured the third position in the yellow.ai Hackathon by proposing an innovative use case for our organization. We came up with an idea to develop a chatbot that would allow restaurants to donate their excess food to nearby non-profit organizations. The bot would collect all the necessary information about the food, owners, and other relevant details to facilitate the process. With the help of my teammates, we were able to achieve this accomplishment, and I am incredibly proud of our efforts.</p>
                  <div style={{padding:"10px"}}></div>
                </div>

            </div>



        </>
    )
}

export default About