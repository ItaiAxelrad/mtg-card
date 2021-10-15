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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import BrushIcon from '@mui/icons-material/Brush';
import { grey } from '@mui/material/colors';
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
  const { colorless, white, red, black, green, blue } = mana;
  const cardColors = getCardColors(color);

  return (
    <Card
      data-tilt
      data-tilt-max="2"
      data-tilt-speed="500"
      sx={{
        color: grey[900],
        bgcolor: cardColors.bg2,
        maxWidth: 400,
        p: 1.5,
        border: '1rem solid',
        borderColor: grey[900],
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
          py: 0,
          px: 1,
          transform: 'translateZ(100px)',
        }}
        title={<Typography fontWeight={800}>{name}</Typography>}
        action={
          <IconButton aria-label="mana" disabled>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: grey[300],
                borderRadius: 100,
                color: grey[900],
                mr: 0.5,
                width: '20px',
                height: '20px',
              }}
            >
              {colorless}
            </Typography>
            {[...Array(parseInt(white)).keys()].map((e) => (
              <SunIcon fontSize="small" key={e} />
            ))}
            {[...Array(parseInt(red)).keys()].map((e) => (
              <FireIcon fontSize="small" key={e} />
            ))}
            {[...Array(parseInt(black)).keys()].map((e) => (
              <SkullIcon fontSize="small" key={e} />
            ))}
            {[...Array(parseInt(green)).keys()].map((e) => (
              <TreeIcon fontSize="small" key={e} />
            ))}
            {[...Array(parseInt(blue)).keys()].map((e) => (
              <WaterIcon fontSize="small" key={e} />
            ))}
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="275"
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
          <Typography fontWeight={800}>
            {supertype} {type} - {subtype}
          </Typography>
        }
        action={
          <IconButton aria-label="set" disabled>
            {rarity == 'common' && <LogoIcon sx={{ color: grey[900] }} />}
            {rarity == 'uncommon' && (
              <LogoIcon color="default" sx={{ color: 'silver' }} />
            )}
            {rarity == 'rare' && (
              <LogoIcon color="default" sx={{ color: 'gold' }} />
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
        <Typography variant="body1" paragraph>
          {rules}
        </Typography>
        <Typography
          variant="body2"
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
        <Stack direction="row" spacing={1}>
          <BrushIcon fontSize="small" color="text.secondary" />
          <Typography variant="body2" noWrap sx={{ color: grey[700] }}>
            {artist}
          </Typography>
        </Stack>
        <Chip
          label={`${power}/${toughness}`}
          sx={{
            color: grey[900],
            fontSize: '1rem',
            bgcolor: cardColors.bg,
            borderRadius: 1,
            border: '2px solid',
            borderColor: cardColors.border,
            borderStyle: 'outset',
          }}
          color="default"
        />
      </CardActions>
    </Card>
  );
}
