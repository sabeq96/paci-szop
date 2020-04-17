import React from 'react';
import NextLink from 'next/link';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import TextField from '@material-ui/core/TextField';
import Select from '../src/Select';
import Button from '@material-ui/core/Button';

import Link from '../src/Link';
import Copyright from '../src/Copyright';

const data = {
  voltage: [
    { id: '36V/18Ah', name: '36V / 18Ah', price: 123.60 },
    { id: '48V/18Ah', name: '48V / 18Ah', price: 123.60 },
    { id: '60V/24Ah', name: '60V / 24Ah', price: 123.60 },
  ],
  capacity: [
    { id: 'none', name: 'Brak', price: 0 },
    { id: '3100', name: '3100mAh', price: 325.12 },
    { id: '6200', name: '6200mAh', price: 325.12 },
    { id: '9300', name: '9300mAh', price: 325.12 },
    { id: '12400', name: '12400mAh', price: 123.15 },
  ],
  gallery: [{
    img: "https://components101.com/sites/default/files/components/How-to-choose-a-Battery.jpg",
    title: "battery1",
    cols: 2,
  }, {
    img: "https://images-na.ssl-images-amazon.com/images/I/71P28O72LPL._AC_SX425_.jpg",
    title: "battery2",
    cols: 1,
  }, {
    img: "https://images-na.ssl-images-amazon.com/images/I/71P28O72LPL._AC_SX425_.jpg",
    title: "battery3",
    cols: 1,
  }, {
    img: "https://components101.com/sites/default/files/components/How-to-choose-a-Battery.jpg",
    title: "battery4",
    cols: 2,
  }],
};

export default () => {
  const [voltage, setVoltage] = React.useState('');
  const [capacity, setCapacity] = React.useState('none');
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [description, setDescription] = React.useState();

  const calcSum = () => (
    ((data.voltage.find(({ id }) => id === voltage) || {}).price || 0)
    +
    ((data.capacity.find(({ id }) => id === capacity) || {}).price || 0)
  );

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
            <Link href="/" color="secondary">
              Przejdź do strony głównej
            </Link>
          </Grid>
          <Grid item>
            <Link href="/contact" color="secondary">
              Przejdź do kontaktu
            </Link>
          </Grid>
        </Grid>
        <Box my={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            Baterie
          </Typography>
          <Typography component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Box my={3}>
            <GridList cellHeight={220} cols={3}>
              {data.gallery.map((tile, key) => (
                <GridListTile key={key} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </Box>
          <Box my={12}>
            <Typography variant="h4" component="h3" gutterBottom>
              Złóż zamówienie
            </Typography>
            <Box my={3}>
              <form action="https://mailthis.to/sdawid96@gmail.com" method="POST">
                <input type="hidden" name="_after" value="http://localhost:3000" />
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12} md={6} lg={3}>
                    <Select
                      id="voltage"
                      value={voltage}
                      onChange={setVoltage}
                      label="Napięcie"
                      options={data.voltage}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Select
                      id="capacity"
                      value={capacity}
                      onChange={setCapacity}
                      label="Dodatkowa pojemność"
                      options={data.capacity}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography style={{ fontWeight: 'bold' }}>
                      Suma: {calcSum()}zł
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <TextField
                      id="fullname"
                      name="fullname"
                      label="Imię i nazwisko"
                      variant="outlined"
                      onChange={(e) => { setFullName(e.target.value) }}
                      value={fullName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onChange={(e) => { setEmail(e.target.value) }}
                      value={email}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <TextField
                      id="phone"
                      name="phone"
                      label="Telefon"
                      variant="outlined"
                      onChange={(e) => { setPhone(e.target.value) }}
                      value={phone}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      id="description"
                      name="description"
                      label="Szczegóły"
                      variant="outlined"
                      onChange={(e) => { setDescription(e.target.value) }}
                      value={description}
                      fullWidth
                      multiline
                      rows={6}
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Button type="submit" variant="contained" color="primary">
                      Wyślij
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
