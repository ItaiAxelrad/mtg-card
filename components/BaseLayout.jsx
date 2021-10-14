import Head from 'next/head';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import BasicAppBar from '@components/BasicAppBar';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MUI❤️MTG</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <BasicAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'grid', alignItems: 'center', p: 0 }}
      >
        {children}
      </Container>
      <Container maxWidth="lg" component="footer" sx={{ p: 2 }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          justifyContent="center"
        >
          <Typography>&copy; Itai Axelrad</Typography>
          <Link href="https://mui.com/">MUI</Link>
          <Link href="https://github.com/">Source</Link>
        </Stack>
      </Container>
    </>
  );
};

export default BaseLayout;
