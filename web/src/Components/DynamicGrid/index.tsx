import React from 'react';
import { Container, Grid } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import ItemCard from 'src/Components/Card';
import { Tabs } from 'src/types/tabs';

const useStyles = makeStyles(() => createStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 25,
  },
  container: {
    marginTop: '50px',
  },
}));

function GridWithCards({ cards }: { cards: any[] }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid className={classes.grid}>
        {cards.map((card: any) => (
          <ItemCard data={card} />
        ))}
      </Grid>
    </Container>
  );
}

export default GridWithCards;
