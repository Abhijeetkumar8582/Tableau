import NavBar from './NavBar'
import Style from 'styles/project.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import projects from '../Json/Projects.json'
import Head from 'next/head';

function Project() {
  
    const handleClick = (event) => {
        console.log(event)
        window.open(event, '_blank');
    }
    return (
        <>
      <Head>
        <title>ABHI | Project</title>
        <meta name="description"
        content="Skilled and innovative developer who's passionate about making life easier. Explore my portfolio of projects, including Omnipexel, Newsapp, and Chartext, and discover.... "
/>
      </Head>
            <NavBar />
            <h1 className={Style.heading}>Some Things I’ve Built</h1>
            <div className='d-flex justify-content-center flex-wrap'>
                {projects.map((element, index) => (
                    <div className='col-md-3 my-4 mx-5' key={index}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="210"
                                    image={element.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {element.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {element.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>{element.code}</strong>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" onClick={() => handleClick(element.button)} color="primary">
                                    View Project
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Project