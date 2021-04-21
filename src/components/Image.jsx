import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'hsl(0, 0%, 100%)',
    borderTopRightRadius: '15px',
    borderBottomRightRadius: 0,
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: 0,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      borderBottomRightRadius: '15px',
      borderTopLeftRadius: 0,
      height: 446,
    },
  },
  background: {
    backgroundColor: 'hsl(277, 64%, 61%)',
  },
  image: {
    opacity: 0.7,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      borderBottomRightRadius: '15px',
      borderTopLeftRadius: 0,
      height: 446,
    },
  },
}));

function Image() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.background}>
        <CardMedia
          className={classes.image}
          src='images/image-header-desktop.jpg'
          component='img'
        />
      </div>
    </Card>
  );
}

export default Image;
