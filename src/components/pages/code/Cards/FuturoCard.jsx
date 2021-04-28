import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Card.scss'

import futuro from '../../../../assets/images/futuro.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
          <Typography variant="body2" color="textSecondary" component="p">
          Made independently, using React, Redux, Javascript, and Firebase. Futuro Magazine is a digital platform, promoting culture, art and fashion. Made for a Joey Paradox, based out of Melborn Austrailia. <a href='https://futuromagazine-be1ee.firebaseapp.com/'>Futuro Magazine</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}