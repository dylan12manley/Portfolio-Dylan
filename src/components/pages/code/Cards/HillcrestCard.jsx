import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import hillcrest from '../../../../assets/images/hillcrest.png'
import hillcrest2 from '../../../../assets/images/hillcrest2.png'
import hillcrest3 from '../../../../assets/images/hillcrest3.png'

const useStyles = makeStyles({
  root: {
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
          image={hillcrest}
          title="Hillcrest Ski and Sports"
        />
        <CardContent>
          <h2>Hillcrest Sports</h2>
          <p>Made with a Robbie Cunningham, using a BigCommerce template with Javascript, Handlebars, React, jQuery,and more.</p>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={hillcrest2}
          title="Hillcrest Homepage"
        />
        <CardContent>
          <p>This is an E-commerce site for an outdoor sports shop in Gresham Oregon. This project also included a custom script, made in Python. The script runs automatically every 15 minutes and syncs the physical store's inventory, using Retail-Pro, with our website as well as the store's postings on third-party sites such as eBay and Sideline Swap.</p>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={hillcrest3}
          title="Futuro Products"
        />
        <CardContent>
          <p><a className='card-link' href='https://hillcrestsports.com/'>Visit Hillcrest Sports</a></p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
} 