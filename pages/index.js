import { useInput } from '@hooks/forms';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MagicCard from '@components/Card';
import MagicForm from '@components/Form';

export default function Magic() {
  const [values, handleChange] = useInput({
    name: 'Akroma, Angel of Wrath',
    type: 'Legendary Creature - Angel',
    mana: { c: 5, w: 3 },
    rules:
      'Flying first strike, vigilance, trample, haste, protection from black, protection from red',
    flavor: 'No rest. No mercy. No matter what.',
    rarity: 'rare',
    power: 6,
    toughness: 6,
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Container maxWidth="xs">
          <MagicForm values={values} handleChange={handleChange} />
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Container maxWidth="xs">
          <MagicCard values={values} handleChange={handleChange} />
        </Container>
      </Grid>
    </Grid>
  );
}
