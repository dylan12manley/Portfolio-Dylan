import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import goalden from '../../../../assets/images/goalden-logo.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function FuturoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={goalden}
          title="Goalden Hour"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Goalden Hour
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Made with a team using React, Mobx, Typescript, Ant Design Library, AWS Serverless, and more. It’s a life coaching app that helps you achieve goals by setting and completing routines and tasks. <a href='https://goaldenhour.com/'>Goalden Hour</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}