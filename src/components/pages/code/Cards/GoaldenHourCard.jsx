import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Card.scss'
import goalden from '../../../../assets/images/goalden-logo.png'
import goalden2 from '../../../../assets/images/goalden2.png'
import goalden3 from '../../../../assets/images/goalden3.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    backgroundColor: '#f18e7e',
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
          <h2>Goalden Hour</h2>
          <p>Made with a team using React, Mobx, Typescript, Ant Design Library, AWS Serverless, and more. It’s a life coaching app that helps you achieve goals by setting and completing routines and tasks.</p>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={goalden2}
          title="Goalden Hour"
        />
        <CardContent>
          <p>I was an intern on a full dev team in this project. It was a great experience and I learned out how start-ups work and how to work in an agile workflow.</p>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={goalden3}
          title="Goalden Hour"
        />
        <CardContent>
          <p><a className='card-link' href='https://goaldenhour.com/'>Visit Goalden Hour</a></p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}