import { useState } from 'react';
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

const MagicForm = ({ values, handleChange, mana, handleMana }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Box component="form" noValidate autoComplete="off">
      <Divider sx={{ mb: 2 }}>Card Generator</Divider>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="select-label">Card Color</InputLabel>
        <Select
          size="small"
          labelId="select-label"
          id="select"
          name="color"
          label="Card Color"
          value={values.color}
          onChange={handleChange}
        >
          <MenuItem value="grey">Colorless</MenuItem>
          <MenuItem value="white">White</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="black">Black</MenuItem>
        </Select>
      </FormControl>
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
          min="0"
          size="small"
          id="red"
          label="Red"
          name="red"
          type="number"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 10,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FireIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={mana.red}
          onChange={handleMana}
        />
        <TextField
          size="small"
          id="blue"
          name="blue"
          label="Blue"
          type="number"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 10,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WaterIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={mana.blue}
          onChange={handleMana}
        />
        <TextField
          size="small"
          id="green"
          name="green"
          label="Green"
          type="number"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 10,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TreeIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={mana.green}
          onChange={handleMana}
        />
      </Stack>
      <Stack spacing={1} direction="row" sx={{ my: 2 }}>
        <TextField
          size="small"
          id="black"
          name="black"
          label="Black"
          type="number"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 10,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SkullIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={mana.black}
          onChange={handleMana}
        />
        <TextField
          size="small"
          id="white"
          name="white"
          label="White"
          type="number"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 10,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SunIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={mana.white}
          onChange={handleMana}
        />
        <TextField
          size="small"
          id="colorless"
          name="colorless"
          label="Colorless"
          type="number"
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            max: 10,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography variant="h5">&#9826;</Typography>
              </InputAdornment>
            ),
          }}
          value={mana.colorless}
          onChange={handleMana}
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
          autoSelect
          fullWidth
          freeSolo
          size="small"
          id="supertype"
          options={supertypes}
          renderInput={(params) => (
            <TextField {...params} label="Supertype" name="supertype" />
          )}
          value={values.supertype}
          onChange={handleChange}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
        <Autocomplete
          fullWidth
          autoSelect
          freeSolo
          size="small"
          id="type"
          options={types}
          renderInput={(params) => (
            <TextField {...params} label="Type" name="type" />
          )}
          value={values.type}
          onChange={handleChange}
        />
        <Autocomplete
          fullWidth
          autoSelect
          freeSolo
          size="small"
          id="subtype"
          options={subtypes}
          renderInput={(params) => (
            <TextField {...params} label="Subtype" name="subtype" />
          )}
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
