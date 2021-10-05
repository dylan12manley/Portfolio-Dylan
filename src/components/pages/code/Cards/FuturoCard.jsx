import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Card.scss'
import futuro from '../../../../assets/images/futuro.jpg'
import futuro2 from '../../../../assets/images/futuro-2.png'
import futuro3 from '../../../../assets/images/futuro-3.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    backgroundColor: 'black',
  },
  media: {
    height: 160,
  },
  img2: {
    height: 240,
  },
});

export default function FuturoCard() {
  const classes = useStyles();

  return (
    <Link 
        to='//futuromagazine-be1ee.web.app'
        target="_blank"
        rel='noopener noreferrer'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={futuro}
            title="Futuro Magazine"
          />
          <CardContent>
            <h2>
              Futuro Magazine
            </h2>
            <p className='card-p'>
              Made independently, using React, Redux, Javascript, and Firebase. Futuro Magazine is a digital platform, promoting culture, art, and fashion.  
            </p>
          </CardContent>
          <CardMedia
            className={classes.img2}
            image={futuro2}
            title="Futuro Article"
          />
          <CardContent>
            <p className='card-p'>This was my final independent project for Epicodus. I made it for an old friend, Joseph Hoover, based out of Melbourne, Australia. </p>
          </CardContent>  
            <CardMedia
            className={classes.img2}
            image={futuro3}
            title="Futuro Article Bottom"
            />
          <CardContent>
            <p className='card-p'> I have also created a second site for the writers portal. There is a login/<span style={{whiteSpace: 'nowrap'}}>sign-up</span> option, I created using firebase's authentication. The portal mirrors the main site but has extra features for users with special privileges, like access to custom forms used to create the articles and advertisements on the site.</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}