import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MagicForm = ({ values, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Stack spacing={2}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          id="type"
          name="type"
          label="Type"
          variant="outlined"
          value={values.type}
          onChange={handleChange}
        />
        <TextField
          id="rules"
          name="rules"
          label="Rules"
          variant="outlined"
          value={values.rules}
          onChange={handleChange}
          multiline
        />
        <TextField
          id="flavor-text"
          name="flavor"
          label="Flavor Text"
          variant="outlined"
          value={values.flavor}
          onChange={handleChange}
          multiline
        />
        <FormControl fullWidth>
          <InputLabel id="select-label">Rarity</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            name="rarity"
            label="Rarity"
            value={values.rarity}
            onChange={handleChange}
          >
            <MenuItem value="common">Common</MenuItem>
            <MenuItem value="uncommon">Uncommon</MenuItem>
            <MenuItem value="rare">Rare</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={1} direction="row">
        <TextField
          id="power"
          label="Power"
          name="power"
          variant="outlined"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={values.power}
          onChange={handleChange}
        />
        <TextField
          id="toughness"
          name="toughness"
          label="Toughness"
          variant="outlined"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={values.toughness}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default MagicForm;
