import { useInput } from '@hooks/forms';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '@styles/theme';
import MagicCard from '@components/Card';
import MagicForm from '@components/Form';

export default function Magic() {
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [values, handleChange] = useInput({
    color: 'white',
    name: 'Akroma, Angel of Wrath',
    image: 'Akroma.jpg',
    supertype: 'Legendary',
    type: 'Creature',
    subtype: 'Angel',
    rarity: 'rare',
    rules:
      'Flying first strike, vigilance, trample, haste, protection from black, protection from red',
    flavor: 'No rest. No mercy. No matter what.',
    power: 6,
    toughness: 6,
    artist: 'Ron Spears',
  });

  const [mana, handleMana] = useInput({
    c: 5,
    w: 3,
    r: 0,
    b: 0,
    g: 0,
    u: 0,
  });

  return (
    <Grid container spacing={2}>
      {matches ? (
        <>
          <Grid item xs={6}>
            <Container maxWidth='sm'>
              <MagicForm
                values={values}
                handleChange={handleChange}
                mana={mana}
                handleMana={handleMana}
              />
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container maxWidth='xs'>
              <MagicCard
                values={values}
                handleChange={handleChange}
                mana={mana}
                handleMana={handleMana}
              />
            </Container>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sx={{ my: 5 }}>
            <Container maxWidth='xs'>
              <MagicForm
                values={values}
                handleChange={handleChange}
                mana={mana}
                handleMana={handleMana}
              />
            </Container>
          </Grid>
          <Grid item xs={12} sx={{ mx: 0.5 }}>
            <MagicCard
              values={values}
              handleChange={handleChange}
              mana={mana}
              handleMana={handleMana}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
