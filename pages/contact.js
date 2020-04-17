import React from 'react';
import NextLink from 'next/link';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={2} alignItems="baseline">
          <Grid item>
            <NextLink href="/">
              <Typography variant="h1" component="h1" gutterBottom>
                Pacipl shop
              </Typography>
            </NextLink>
          </Grid>
          <Grid item>
            <Link href="/index" color="secondary">
              Przejdź do strony głównej
            </Link>
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}
