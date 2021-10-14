import types from '@data/types.json';
import subtypes from '@data/subtypes.json';
import supertypes from '@data/supertypes.json';
import FireIcon from '@components/icons/Fire';
import SkullIcon from '@components/icons/Skull';
import SunIcon from '@components/icons/Sun';
import TreeIcon from '@components/icons/Tree';
import WaterIcon from '@components/icons/Water';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const MagicForm = ({ values, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Divider sx={{ mb: 2 }}>Card Generator</Divider>
      <TextField
        size="small"
        id="name"
        name="name"
        label="Name"
        fullWidth
        value={values.name}
        onChange={handleChange}
      />

      <Stack spacing={1} direction="row" sx={{ my: 2 }}>
        <TextField
          size="small"
          id="red"
          label="Red"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FireIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          id="blue"
          label="Blue"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WaterIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          id="green"
          label="Green"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TreeIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack spacing={1} direction="row" sx={{ my: 2 }}>
        <TextField
          size="small"
          id="black"
          label="Black"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SkullIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          id="white"
          label="White"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SunIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          size="small"
          id="colorless"
          label="Colorless"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography variant="h5">&#9826;</Typography>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <TextField
        size="small"
        id="image"
        name="image"
        label="Artwork"
        fullWidth
        value={values.image}
        onChange={handleChange}
      />

      <Divider sx={{ my: 2 }} />
      <Stack spacing={2} direction="row" sx={{ my: 2 }}>
        <Autocomplete
          fullWidth
          freeSolo
          disableClearable
          size="small"
          id="supertype"
          name="supertype"
          options={supertypes}
          renderInput={(params) => <TextField {...params} label="Supertype" />}
          inputValue={values.supertype}
          onInputChange={handleChange}
          value={values.supertype}
          onChange={handleChange}
        />
        <Autocomplete
          fullWidth
          freeSolo
          disableClearable
          size="small"
          id="type"
          name="type"
          options={types}
          renderInput={(params) => <TextField {...params} label="Type" />}
          inputValue={values.type}
          value={values.type}
          onChange={handleChange}
        />
        <Autocomplete
          fullWidth
          freeSolo
          disableClearable
          size="small"
          id="subtype"
          name="subtype"
          options={subtypes}
          renderInput={(params) => <TextField {...params} label="Subtype" />}
          inputValue={values.subtype}
          value={values.subtype}
          onChange={handleChange}
        />
      </Stack>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="select-label">Rarity</InputLabel>
        <Select
          size="small"
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

      <Divider sx={{ mb: 2 }} />
      <Stack spacing={2}>
        <TextField
          size="small"
          id="rules"
          name="rules"
          label="Rules"
          value={values.rules}
          onChange={handleChange}
          multiline
        />
        <TextField
          size="small"
          id="flavor-text"
          name="flavor"
          label="Flavor Text"
          value={values.flavor}
          onChange={handleChange}
          multiline
        />
        {/* <TextField
          size="small"
          id="image"
          name="image"
          label="Artwork"
          type="file"
          value={values.image}
          onChange={handleChange}
        /> */}
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={1} direction="row" sx={{ my: 2 }}>
        <TextField
          size="small"
          id="power"
          label="Power"
          name="power"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={values.power}
          onChange={handleChange}
        />
        <TextField
          size="small"
          id="toughness"
          name="toughness"
          label="Toughness"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={values.toughness}
          onChange={handleChange}
        />
      </Stack>
      <TextField
        fullWidth
        size="small"
        id="artist"
        name="artist"
        label="Artist"
        value={values.artist}
        onChange={handleChange}
      />
    </Box>
  );
};

export default MagicForm;
