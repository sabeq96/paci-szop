import React from 'react';
import NextLink from 'next/link';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Link from '../src/Link';
import Copyright from '../src/Copyright';

const data = {
  categories: [{
    slug: 'conversion',
    title: 'Zestawy do konwersji',
    image: 'https://willride.com/media/2018/07/36679868_10155812935803721_1530546569848291328_n.jpg'
  }, {
    slug: 'bicycle',
    title: 'Konwersja roweru',
    image: 'https://www.efficiencyvermont.com/Media/Default/images/white-papers/ebike-standing-field.jpg'
  }, {
    slug: 'battery',
    title: 'Baterie',
    image: 'https://cdn.wallpaper.com/main/styles/fp_922x565/s3/electricbikes_g_1_test.jpg'
  }]
};

export default () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={2} alignItems="baseline">
          <Grid item>
            <Typography variant="h1" component="h1" gutterBottom>
              Pacipl shop
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/contact" color="secondary">
              Przejdź do kontaktu
            </Link>
          </Grid>
        </Grid>
        <Box my={6}>
          <Grid container spacing={6}>
            {data.categories.map(({slug, title, image}, i) => (
              <NextLink href={`/${slug}`}>
                <Grid item xs={12} key={slug}>
                  <Card raised style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} lg={8}>
                        <CardMedia
                          style={{ height: 260, backgroundSize: 'cover' }}
                          image={image}
                          title={title}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={4}>
                        <CardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                          <Typography variant="h4" component="h2">
                            {title}
                          </Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </NextLink>
            ))}
          </Grid>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
