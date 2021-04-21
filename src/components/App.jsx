import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Image from './Image';
import Content from './Content'
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10%',
  },
  card: {
    backgroundColor: 'hsl(244, 38%, 16%)',
    color: 'hsl(0, 0%, 100%)',
  },
  item1: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
  },
  footer: {
    color: 'hsl(0, 0%, 100%)',
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.item1}>
          <Image />
        </Grid>
        <Grid item xs={12} md={6} className={classes.item2}>
          <Content />
        </Grid>
      </Grid>
      <Container className={classes.footer}>
        <Footer />
      </Container>
    </Container>
  );
}

export default App;
