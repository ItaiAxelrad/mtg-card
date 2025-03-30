'use client';

import SchemeButton from '@/components/SchemeButton';
import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Group,
  Text,
  ScrollArea,
  Flex,
  NumberInput,
  Select,
  Textarea,
  TextInput,
  Center,
  Button,
  FileInput,
  BackgroundImage,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  IconBrandGithub,
  IconDroplet,
  IconFlame,
  IconSkull,
  IconSun,
  IconTree,
} from '@tabler/icons-react';
import MagicCard from '@/components/MagicCard';
import { colors, rarity, subtypes, supertypes, types } from '@/data/index';
import { useEffect, useState } from 'react';
import { fetchImageAsBlob } from '@/lib/fetchImageAsBlob';
import exportCardAsImage from '@/lib/save';
import { notifications } from '@mantine/notifications';

export interface MagicCardValues {
  color: string;
  name: string;
  image: Blob | MediaSource | null;
  supertype: string;
  type: string;
  subtype: string;
  rarity: 'common' | 'uncommon' | 'rare';
  rules: string;
  flavor: string;
  power: number;
  toughness: number;
  artist: string;
  trademark?: string;
  collectorNumber?: number;
  collectorCount?: number;
  mana: {
    colorless: number;
    white: number;
    red: number;
    black: number;
    green: number;
    blue: number;
  };
}

export default function Page() {
  const { colorScheme } = useMantineColorScheme();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [blobUrl, setBlobUrl] = useState<Blob | null>(null);

  useEffect(() => {
    const getBlob = async () => {
      const blob = await fetchImageAsBlob('/images/Akroma.jpg');
      if (!blob) return;
      setBlobUrl(blob);
      form.setFieldValue('image', blob);
    };

    getBlob();
  }, []);

  console.log(blobUrl);

  const form = useForm<MagicCardValues>({
    mode: 'controlled',
    initialValues: {
      color: 'yellow',
      name: 'Akroma, Angel of Wrath',
      image: blobUrl,
      supertype: 'Legendary',
      type: 'Creature',
      subtype: 'Angel',
      rarity: 'rare',
      rules:
        'Flying first strike, vigilance, trample, haste, protection from black, protection from red',
      flavor: 'No rest. No mercy. No matter what.',
      artist: 'Ron Spears',
      trademark: '™ & © 1993-2025 Wizards of the Coast LLC',
      collectorNumber: 69,
      collectorCount: 420,
      power: 6,
      toughness: 6,
      mana: {
        colorless: 5,
        white: 3,
        black: 0,
        blue: 0,
        green: 0,
        red: 0,
      },
    },
  });

  const handleSave = async () => {
    notifications.show({
      title: 'Saving Your Card',
      message: 'Hang tight while we download an image of your card',
      loading: true,
    });
    await exportCardAsImage('magic', form.values.name);
  };

  return (
    <AppShell
      padding={0}
      header={{ height: 55 }}
      navbar={{
        width: 420,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header p='xs' withBorder>
        <Group
          gap='xl'
          align='center'
          justify='space-between'
          wrap='nowrap'
          px='xs'
        >
          <Group gap='lg' align='center'>
            <Group gap='xs'>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom='sm'
                size='sm'
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom='sm'
                size='sm'
              />
              <Anchor c='var(--mantine-color-text)' href='/' fw='bold' fz='lg'>
                MTG UI Card Generator
              </Anchor>
            </Group>
          </Group>
          <Group gap='xs'>
            <Button variant='default' disabled>
              Share
            </Button>
            <Button variant='default' onClick={() => handleSave()}>
              Save
            </Button>
            <ActionIcon
              component='a'
              variant='default'
              color='light'
              size='lg'
              href='https://github.com/ItaiAxelrad/mui-mtg'
              target='_blank'
            >
              <IconBrandGithub stroke={1.5} size={22} />
            </ActionIcon>
            <SchemeButton />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <AppShell.Section grow component={ScrollArea}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              name='name'
              label='Name'
              key={form.key('name')}
              {...form.getInputProps('name')}
            />
            <Flex gap='xs'>
              <Select
                name='rarity'
                label='Rarity'
                data={rarity}
                key={form.key('rarity')}
                {...form.getInputProps('rarity')}
              />
              <Select
                name='color'
                label='Card Color'
                data={colors}
                key={form.key('color')}
                {...form.getInputProps('color')}
              />
            </Flex>
            <Flex gap='xs'>
              <NumberInput
                label='Red'
                name='r'
                min={0}
                max={5}
                leftSection={
                  <IconFlame color='var(--mantine-color-red-6)' size={18} />
                }
                key={form.key('mana.red')}
                {...form.getInputProps('mana.red')}
              />
              <NumberInput
                name='u'
                label='Blue'
                min={0}
                max={5}
                leftSection={
                  <IconDroplet color='var(--mantine-color-blue-6)' size={18} />
                }
                key={form.key('mana.blue')}
                {...form.getInputProps('mana.blue')}
              />
              <NumberInput
                name='g'
                label='Green'
                min={0}
                max={5}
                leftSection={
                  <IconTree color='var(--mantine-color-green-6)' size={18} />
                }
                key={form.key('mana.green')}
                {...form.getInputProps('mana.green')}
              />
            </Flex>
            <Flex gap='xs'>
              <NumberInput
                name='b'
                label='Black'
                min={0}
                max={5}
                leftSection={
                  <IconSkull color='var(--mantine-color-black)' size={18} />
                }
                key={form.key('mana.black')}
                {...form.getInputProps('mana.black')}
              />
              <NumberInput
                name='w'
                label='White'
                min={0}
                max={5}
                leftSection={
                  <IconSun color='var(--mantine-color-yellow-6)' size={18} />
                }
                key={form.key('mana.white')}
                {...form.getInputProps('mana.white')}
              />
              <NumberInput
                name='c'
                label='Colorless'
                min={0}
                max={9}
                leftSection={<Text>&#9826;</Text>}
                key={form.key('mana.colorless')}
                {...form.getInputProps('mana.colorless')}
              />
            </Flex>

            <FileInput
              name='image'
              label='Artwork'
              accept='image/png,image/jpeg'
              placeholder='Upload file'
              clearable
              key={form.key('image')}
              {...form.getInputProps('image')}
            />

            <Group gap='xs' grow>
              <Select
                name='supertype'
                label='Supertype'
                data={supertypes}
                searchable
                clearable
                maxDropdownHeight={200}
                key={form.key('supertype')}
                {...form.getInputProps('supertype')}
              />
              <Select
                name='type'
                label='Type'
                data={types}
                searchable
                clearable
                key={form.key('type')}
                {...form.getInputProps('type')}
              />
              <Select
                name='subtype'
                label='Subtype'
                data={subtypes}
                searchable
                clearable
                key={form.key('subtype')}
                {...form.getInputProps('subtype')}
              />
            </Group>

            <Textarea
              id='rules'
              name='rules'
              label='Rules'
              key={form.key('rules')}
              {...form.getInputProps('rules')}
            />

            <Flex gap='xs'>
              <NumberInput
                id='power'
                label='Power'
                name='power'
                min={0}
                max={99}
                key={form.key('power')}
                {...form.getInputProps('power')}
              />
              <NumberInput
                id='toughness'
                name='toughness'
                label='Toughness'
                min={0}
                max={99}
                key={form.key('toughness')}
                {...form.getInputProps('toughness')}
              />
            </Flex>

            <TextInput
              id='flavor-text'
              name='flavor'
              label='Flavor Text'
              key={form.key('flavor')}
              {...form.getInputProps('flavor')}
            />
            <TextInput
              name='artist'
              label='Artist'
              key={form.key('artist')}
              {...form.getInputProps('artist')}
            />
            <TextInput
              name='trademark'
              label='Trademark'
              key={form.key('trademark')}
              {...form.getInputProps('trademark')}
            />
          </form>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          display: 'flex',
        }}
      >
        <BackgroundImage src={`/images/bg-${colorScheme}.jpg`} radius='sm'>
          <Center p='xs' style={{ flexGrow: 1, height: '100%' }}>
            <MagicCard values={form.values} />
          </Center>
        </BackgroundImage>
      </AppShell.Main>
    </AppShell>
  );
}
