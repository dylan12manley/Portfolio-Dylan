import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import taproom from '../../../../assets/images/taproom.png'
import taproom2 from '../../../../assets/images/taproom2.png'

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 425,
    backgroundColor: 'grey',
  },
  media: {
    height: 300,
  },
});

export default function FuturoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={taproom}
          title="Taproom D"
        />
        <CardContent>
          <h2>Taproom D</h2>
          <p>This is Independent review project from my React course at Epicodus. It uses basic React functions to manage state, no use state management</p>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={taproom2}
          title="New Keg Form"
        />
        <CardContent>
          <p>This a fictional keg shop supposed to be in Portland Oregon. Users can create kegs and add them to the hard coded Keg list using the new keg form.</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
} 