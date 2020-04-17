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
  conversion: [{ id: 'yes', name: 'Tak', price: 250 }],
  wheel: [
    { id: '24', name: '24"', price: 123.60 },
    { id: '26', name: '26"', price: 123.60 },
    { id: '27.5', name: '27.5"', price: 123.60 },
    { id: '29', name: '29"', price: 123.60 },
  ],
  power: [
    { id: '2000W', name: '2000W / 48V', price: 125.14 },
    { id: '3000W', name: '3000W / 60V', price: 325.12 },
  ],
  capacity: {
    '2000W': [
      { id: '18000', name: '18000mAh', price: 325.12 },
      { id: '21000', name: '21000mAh', price: 325.12 },
      { id: '24000', name: '24000mAh', price: 325.12 },
    ],
    '3000W': [
      { id: '24000', name: '24000mAh', price: 325.12 },
      { id: '27000', name: '27000mAh', price: 325.12 },
    ],
  },
  batteryPack: [
    { id: 'bag', name: 'torba (darmowa)', price: 0 },
    { id: 'box', name: 'skrzynka', price: 350 },
    { id: 'bidon', name: 'bidon', price: 200 },
  ],
  charger: [
    { id: '2A', name: '2A (darmowa)', price: 0 },
    { id: '4A', name: '4A', price: 200 },
  ],
  gallery: [{
    img: "https://a.allegroimg.com/s512/039788/b48bb08f4403bb2de1268c5880db/Giant-Trance-E-0-Pro-ebike-rower-elektryczny",
    title: "battery1",
    cols: 2,
  }, {
    img: "https://ae01.alicdn.com/kf/HTB1AOTxNFXXXXbuXpXXq6xXFXXX1/Siedzisko-Enduroebike-siedzisko-motocyklowe-siod-o-Dirt-ebike-na-sprzeda.jpg",
    title: "battery2",
    cols: 1,
  }, {
    img: "https://images.immediate.co.uk/production/volatile/sites/21/2019/10/GT-ebike-news-Force-Hero-6299af0.jpg?quality=90&resize=620,413",
    title: "battery3",
    cols: 1,
  }, {
    img: "https://www.shimano-steps.com/content/steps/e-bikes/poland/pl/news/testy-ebike-2019-kellys/jcr:content/article/article-par/image.img.1024.low.jpg/1557822085243.jpg",
    title: "battery4",
    cols: 2,
  }],
};

export default () => {
  const [conversion, setConversion] = React.useState('yes');
  const [wheel, setWheel] = React.useState('');
  const [power, setPower] = React.useState('');
  const [capacity, setCapacity] = React.useState('none');
  const [batteryPack, setBatteryPack] = React.useState('bag');
  const [charger, setCharger] = React.useState('2A');
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [description, setDescription] = React.useState();

  const calcSum = () => (
    ((data.conversion.find(({ id }) => id === conversion) || {}).price || 0)
    +
    ((data.wheel.find(({ id }) => id === wheel) || {}).price || 0)
    +
    ((data.power.find(({ id }) => id === power) || {}).price || 0)
    +
    (((data.capacity[power] || []).find(({ id }) => id === capacity) || {}).price || 0)
    +
    ((data.batteryPack.find(({ id }) => id === batteryPack) || {}).price || 0)
    +
    ((data.charger.find(({ id }) => id === charger) || {}).price || 0)
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
            Konwersja roweru
          </Typography>
          <Typography component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Box my={3}>
            <GridList cellHeight={260} cols={3}>
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
                <Grid item xs={12} md={6} lg={4}>
                    <Select
                      id="conversion"
                      value={conversion}
                      onChange={setConversion}
                      label="Zlecenie konwersji"
                      options={data.conversion}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Select
                      id="wheel"
                      value={wheel}
                      onChange={setWheel}
                      label="Wielkość koła"
                      options={data.wheel}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Select
                      id="power"
                      value={power}
                      onChange={(v) => { setPower(v); setCapacity(''); }}
                      label="Moc"
                      options={data.power}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Select
                      id="capacity"
                      value={capacity}
                      onChange={setCapacity}
                      label="Pojemność bateri"
                      options={data.capacity[power] || [{ id: 'none', name: 'Brak', price: 0 }]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Select
                      id="batteryPack"
                      value={batteryPack}
                      onChange={setBatteryPack}
                      label="Opakowanie bateri"
                      options={data.batteryPack}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Select
                      id="charger"
                      value={charger}
                      onChange={setCharger}
                      label="Ładowarka"
                      options={data.charger}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Typography style={{ fontWeight: 'bold' }}>
                      Suma: {calcSum()}zł
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
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
                  <Grid item xs={12} md={6} lg={4}>
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
                  <Grid item xs={12} md={6} lg={4}>
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
