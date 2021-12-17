import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ItemCard from 'src/Components/Card';
import { Tabs } from 'src/types/tabs';

const useStyles = makeStyles(() => createStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 25,
  },
  container: {
    marginTop: '25px',
  },
}));

function GridWithCards({ cards }: { cards: Tabs[] }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid className={classes.grid}>
        {cards.map((card: Tabs) => (
          <ItemCard data={card} />
        ))}
      </Grid>
    </Container>
  );
}

export default GridWithCards;
