import LogoIcon from '@components/icons/Logo';
import FireIcon from '@components/icons/Fire';
import SkullIcon from '@components/icons/Skull';
import SunIcon from '@components/icons/Sun';
import TreeIcon from '@components/icons/Tree';
import WaterIcon from '@components/icons/Water';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import BrushIcon from '@mui/icons-material/Brush';
import { red, blue, green, amber, grey } from '@mui/material/colors';
import VanillaTilt from 'vanilla-tilt';
import getCardColors from '@lib/cardColors';

export default function MagicCard({ values, mana }) {
  const {
    color,
    name,
    image,
    supertype,
    type,
    subtype,
    rarity,
    rules,
    flavor,
    power,
    toughness,
    artist,
  } = values;
  const { c, w, r, b, g, u } = mana;
  const cardColors = getCardColors(color);

  return (
    <Card
      data-tilt
      data-tilt-max='2'
      data-tilt-speed='500'
      sx={{
        color: grey[900],
        bgcolor: cardColors.bg2,
        backgroundImage: 'url(/texture.png)',
        maxWidth: 400,
        p: 1.5,
        border: '1rem solid',
        borderColor: 'black',
        transform: 'perspective(500px)',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
      }}
      elevation={24}
    >
      <CardHeader
        sx={{
          bgcolor: cardColors.bg,
          borderRadius: 1,
          border: '2px solid',
          borderColor: cardColors.border,
          borderStyle: 'outset',
          py: 0.25,
          px: 1,
          transform: 'translateZ(100px)',
        }}
        title={
          <Typography fontWeight={800} noWrap>
            {name}
          </Typography>
        }
        action={
          <IconButton aria-label='mana' disabled>
            {c > 0 && (
              <Avatar sx={{ bgcolor: grey[300], width: 20, height: 20 }}>
                {c}
              </Avatar>
            )}
            {[...Array(parseInt(w || 0)).keys()].map((e) => (
              <Avatar
                key={e}
                sx={{ bgcolor: amber[100], width: 20, height: 20 }}
              >
                <SunIcon fontSize='small' />
              </Avatar>
            ))}
            {[...Array(parseInt(r || 0)).keys()].map((e) => (
              <Avatar key={e} sx={{ bgcolor: red[100], width: 20, height: 20 }}>
                <FireIcon fontSize='small' />
              </Avatar>
            ))}
            {[...Array(parseInt(b || 0)).keys()].map((e) => (
              <Avatar
                key={e}
                sx={{ bgcolor: grey[300], width: 20, height: 20 }}
              >
                <SkullIcon fontSize='small' />
              </Avatar>
            ))}
            {[...Array(parseInt(g || 0)).keys()].map((e) => (
              <Avatar
                key={e}
                sx={{ bgcolor: green[100], width: 20, height: 20 }}
              >
                <TreeIcon fontSize='small' />
              </Avatar>
            ))}
            {[...Array(parseInt(u || 0)).keys()].map((e) => (
              <Avatar
                key={e}
                sx={{ bgcolor: blue[100], width: 20, height: 20 }}
              >
                <WaterIcon fontSize='small' />
              </Avatar>
            ))}
          </IconButton>
        }
      />
      <CardMedia
        component='img'
        height='275'
        alt={name}
        image={image}
        sx={{
          borderRadius: 0,
          px: 0.5,
          transform: 'translateZ(20px)',
        }}
      />
      <CardHeader
        sx={{
          bgcolor: cardColors.bg,
          borderRadius: 1,
          border: '2px solid',
          borderColor: cardColors.border,
          borderStyle: 'outset',
          py: 0,
          px: 1,
        }}
        title={
          <Typography fontWeight={800} noWrap>
            {supertype} {type} - {subtype}
          </Typography>
        }
        action={
          <IconButton aria-label='set' disabled>
            {rarity == 'common' && <LogoIcon sx={{ color: grey[900] }} />}
            {rarity == 'uncommon' && (
              <LogoIcon color='default' sx={{ color: 'silver' }} />
            )}
            {rarity == 'rare' && (
              <LogoIcon color='default' sx={{ color: 'gold' }} />
            )}
          </IconButton>
        }
      />
      <CardContent
        sx={{
          bgcolor: cardColors.bg,
          height: 175,
          px: 1,
          mx: 0.5,
        }}
      >
        <Typography variant='body1' paragraph>
          {rules}
        </Typography>
        <Typography
          variant='body2'
          paragraph
          sx={{ fontStyle: 'oblique', color: grey[700] }}
        >
          &quot;{flavor}&quot;
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          justifyContent: 'space-between',
          pt: 0,
          pb: 0,
          px: 0,
        }}
      >
        <Stack direction='row' spacing={1}>
          <BrushIcon fontSize='small' color='text.secondary' />
          <Typography variant='body2' noWrap sx={{ color: grey[900] }}>
            {artist}
          </Typography>
        </Stack>
        {power + toughness > 0 && (
          <Chip
            label={`${power || 0}/${toughness || 0}`}
            sx={{
              color: grey[900],
              fontSize: '1rem',
              bgcolor: cardColors.bg,
              borderRadius: 1,
              border: '2px solid',
              borderColor: cardColors.border,
              borderStyle: 'outset',
            }}
            color='default'
          />
        )}
      </CardActions>
    </Card>
  );
}
