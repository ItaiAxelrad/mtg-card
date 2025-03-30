import Tilt from 'react-parallax-tilt';
import {
  Badge,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import {
  IconBrush,
  IconDroplet,
  IconFlame,
  IconSkull,
  IconSun,
  IconTree,
  IconWand,
} from '@tabler/icons-react';
import { makeArray } from '@/lib/makeArray';
import type { MagicCardValues } from '@/app/page';

export default function MagicCard({ values }: { values: MagicCardValues }) {
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
    trademark,
    mana,
  } = values;

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.5}
      glareColor={`var(--mantine-color-${color}-0)`}
    >
      <Card
        id='magic'
        withBorder
        shadow='xl'
        color={color}
        w={380}
        h={580}
        style={{
          background: `var(--mantine-color-white)`,
          borderColor: `var(--mantine-color-${color}-6)`,
          color: 'black',
        }}
      >
        <Card.Section
          withBorder
          style={{
            borderColor: `var(--mantine-color-${color}-6)`,
          }}
        >
          <Group p='xs' justify='space-between' align='center'>
            <Text fw='bold'>{name}</Text>
            <Flex gap={1} align='center'>
              {mana.colorless > 0 && (
                <ThemeIcon color='dark' radius='xl' size='sm' variant='light'>
                  {mana.colorless}
                </ThemeIcon>
              )}
              {makeArray(mana.white).map((i) => (
                <ThemeIcon
                  key={i}
                  color='yellow'
                  radius='xl'
                  size='sm'
                  variant='light'
                >
                  <IconSun color='var(--mantine-color-yellow-8)' />
                </ThemeIcon>
              ))}
              {makeArray(mana.red).map((e) => (
                <ThemeIcon
                  key={e}
                  color='red'
                  radius='xl'
                  size='sm'
                  variant='light'
                >
                  <IconFlame color='var(--mantine-color-red-8)' />
                </ThemeIcon>
              ))}
              {makeArray(mana.black).map((e) => (
                <ThemeIcon
                  key={e}
                  color='black'
                  radius='xl'
                  size='sm'
                  variant='light'
                >
                  <IconSkull color='var(--mantine-color-black)' />
                </ThemeIcon>
              ))}
              {makeArray(mana.green).map((e) => (
                <ThemeIcon
                  key={e}
                  color='green'
                  radius='xl'
                  size='sm'
                  variant='light'
                >
                  <IconTree color='var(--mantine-color-green-8)' />
                </ThemeIcon>
              ))}
              {makeArray(mana.blue).map((e) => (
                <ThemeIcon
                  key={e}
                  color='blue'
                  radius='xl'
                  size='sm'
                  variant='light'
                >
                  <IconDroplet color='var(--mantine-color-blue-8)' />
                </ThemeIcon>
              ))}
            </Flex>
          </Group>
        </Card.Section>

        <Card.Section
          withBorder
          style={{
            borderColor: `var(--mantine-color-${color}-6)`,
          }}
        >
          <Image
            height={275}
            width={340}
            alt={name}
            src={image && URL.createObjectURL(image)}
            fallbackSrc='https://placehold.co/340x275?text=Your Card'
          />
        </Card.Section>

        <Card.Section
          withBorder
          style={{
            borderColor: `var(--mantine-color-${color}-6)`,
          }}
        >
          <Group p='xs' py={4} justify='space-between' align='center'>
            <Text fw={500}>
              {supertype} {type} - {subtype}
            </Text>
            <ThemeIcon
              aria-label='set'
              color={color}
              radius='xl'
              variant='subtle'
            >
              {rarity == 'common' && (
                <IconWand size={20} color='var(--mantine-color-dimmed)' />
              )}
              {rarity == 'uncommon' && <IconWand size={20} color='silver' />}
              {rarity == 'rare' && <IconWand size={20} color='gold' />}
            </ThemeIcon>
          </Group>
        </Card.Section>

        <Card.Section
          withBorder
          style={{
            height: '100%',
            borderColor: `var(--mantine-color-${color}-6)`,
          }}
        >
          <Flex direction='column' gap='xs' p='sm'>
            <Text>{rules}</Text>
            <Text c='dimmed' fs='italic' fz='sm'>
              &quot;{flavor}&quot;
            </Text>
          </Flex>
        </Card.Section>

        <Card.Section bg={`var(--mantine-color-${color}-light)`}>
          <Group p='xs' justify='space-between' align='center'>
            <Stack gap={0}>
              <Group gap='xs' align='center'>
                <IconBrush size={14} stroke={1.5} />
                <Text fz='sm' lh={1}>
                  {artist}
                </Text>
              </Group>
              <Text fz='xs' c='dimmed'>
                {trademark}
              </Text>
            </Stack>
            {power + toughness > 0 && (
              <Badge
                bg='white'
                size='xl'
                variant='outline'
                color={color}
                style={{
                  color: 'black',
                }}
              >{`${power || 0}/${toughness || 0}`}</Badge>
            )}
          </Group>
        </Card.Section>
      </Card>
    </Tilt>
  );
}
