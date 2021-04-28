import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Card.scss'

import futuro from '../../../../assets/images/futuro.jpg'
import futuro2 from '../../../../assets/images/futuro-2.png'
import futuro3 from '../../../../assets/images/futuro-3.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 425,
  },
  media: {
    height: 140,
  },
  img2: {
    height: 240,
  },
});

export default function FuturoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={futuro}
          title="Futuro Magazine"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Futuro Magazine
          </Typography>
          <p>
          Made independently, using React, Redux, Javascript, and Firebase. Futuro Magazine is a digital platform, promoting culture, art and fashion.  
          </p>
        </CardContent>
        <CardMedia
          className={classes.img2}
          image={futuro2}
          title="Futuro Article"
        />
        <CardContent>
          <p>This was my final independent project for Epicodus. I made it for an old friend, Joesoph Hoover, based out of Melborn, Austrailia. </p>
          <p> I have also created a seccond site for the writers portal. There is a login/sign up option, I created using firebase's authintication. The portal mirrors the main site but has extra features for users with special privilages, like access to custom forms used to create the articals and advertisements on the site.</p>
        </CardContent>
        <CardMedia
          className={classes.img2}
          image={futuro3}
          title="Futuro Article Bottom"
        />
        <CardContent>
          <a href='https://futuromagazine-be1ee.firebaseapp.com/'>Visit Futuro Magazine</a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}