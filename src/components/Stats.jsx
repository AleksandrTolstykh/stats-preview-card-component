import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 700,
  },
  text: {
    color: 'hsla(0, 0%, 100%, 0.6)',
    fontFamily: 'Lexend Deca',
    fontWeight: 400,
  },
});

function Stats(props) {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>{props.title}</div>
      <div className={classes.text}>{props.content}</div>
    </Container>
  );
}

export default Stats;
