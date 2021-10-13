import LogoIcon from '@components/Logo';
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
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { orange } from '@mui/material/colors';
import VanillaTilt from 'vanilla-tilt';

export default function MagicCard({ values }) {
  const { name, type, rarity, rules, flavor, power, toughness } = values;
  return (
    <Card
      data-tilt
      data-tilt-max="2"
      data-tilt-speed="500"
      sx={{
        bgcolor: 'divider',
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
          bgcolor: 'background.paper',
          borderRadius: 1,
          py: 0,
          mb: 0.5,
          transform: 'translateZ(100px)',
        }}
        title={<Typography fontWeight={800}>{name}</Typography>}
        action={
          <IconButton aria-label="mana" disabled>
            <Typography variant="body1" sx={{ color: 'text.primary', mr: 0.5 }}>
              5
            </Typography>
            <Brightness7Icon color="warning" fontSize="small" />
            <Brightness7Icon color="warning" fontSize="small" />
            <Brightness7Icon color="warning" fontSize="small" />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="275"
        image="Akroma.jpg"
        alt="magic"
        sx={{
          borderRadius: 1,
          mb: 0.5,
          transform: 'translateZ(20px)',
        }}
      />
      <CardHeader
        sx={{ bgcolor: 'background.paper', borderRadius: 1, py: 0, mb: 0.5 }}
        title={<Typography fontWeight={800}>{type}</Typography>}
        action={
          <IconButton aria-label="set" disabled>
            <LogoIcon color="default" sx={{ color: orange[500] }} />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          bgcolor: 'background.default',
          borderRadius: 1,
          height: 175,
        }}
      >
        <Typography variant="body1" paragraph>
          {rules}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{ fontStyle: 'oblique' }}
        >
          &quot;{flavor}&quot;
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          justifyContent: 'space-between',
          pt: 0.5,
          pb: 0,
          px: 0,
        }}
      >
        <Stack direction="row" spacing={1}>
          <BrushIcon fontSize="small" color="text.secondary" />
          <Typography variant="body2" color="text.secondary" noWrap>
            Itai Axelrad
          </Typography>
        </Stack>
        <Chip
          label={`${power}/${toughness}`}
          sx={{ fontSize: '1rem', bgcolor: 'background.paper' }}
          color="default"
        />
      </CardActions>
    </Card>
  );
}
