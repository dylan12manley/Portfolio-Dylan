import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import hillcrest from '../../../../assets/images/hillcrest.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
          image={hillcrest}
          title="Futuro Magazine"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hillcrest Sports
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Made with a partner, using a BigCommerce template using Javascript, Handlebars, jQuery,and more. It’s  an E-commerce site for an outdoor sports shop in Gresham Oregon. <a href='https://hillcrestsports.com/'>Hillcrest Sports</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
} 