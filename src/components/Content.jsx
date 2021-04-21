import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Stats from './Stats';
import stats from '../stats';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(244, 38%, 16%)',
    color: 'hsl(0, 0%, 100%)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: '15px',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: '15px',
    height: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      borderBottomRightRadius: 0,
      borderTopLeftRadius: '15px',
      textAlign: 'left',
      height: 446,
    },
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 40,
    fontWeight: 700,
  },
  description: {
    color: 'hsla(0, 0%, 100%, 0.75)',
    fontFamily: 'Inter',
    fontWeight: 400,
  },
  highlightText: {
    color: 'hsl(277, 64%, 61%)',
  },
  spacing: {
    padding: '35px 15px 35px 15px',
  }
}));

function Content() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Container className={classes.spacing}>
        <CardHeader
          title=<div className={classes.title}>Get <span className={classes.highlightText}>insights</span> that help your business grow.</div>
          subheader=<div className={classes.description}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</div>
        />
      </Container>
      <CardContent className={classes.spacing}>
        <Grid container spacing={3}>
          {stats.map((item) => {
            return (
              <Grid item xs={12} md={4}>
                <Stats
                  title={item.title}
                  content={item.content}
                />
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Content;
