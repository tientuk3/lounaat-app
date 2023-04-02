import { useState, useEffect } from 'react' 
import axios from 'axios'
import { Card, CardContent, Divider, Typography, Box, Grid, CardHeader, List, ListItem, ListSubheader, ListItemText } from '@mui/material';
import { Container } from '@mui/material'

const API_URL = 'https://api.tuk3diagnostics.com/lounaat/'

const App = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    console.log('fetching data')
    axios.get(API_URL)
      .then(response => {
        console.log('got data')
        console.log(response.data)
        setRestaurants(response.data)
      })
  }, [])

  return (
    <>
    <Container maxWidth='false'>
      <Grid container spacing={2}>
        {restaurants.map((r, i) => (
          <Grid item>
            <Card variant="elevation" sx={{ maxWidth: 400, borderRadius: 3 }}>
              <CardContent>
                <CardHeader align='center' title={r.name} />
                <Typography align='center' sx={{ fontStyle: 'italic' }}>{r.address}</Typography>
                <Typography align='center' sx={{ fontStyle: 'italic' }}>Etäisyys {r.distance}</Typography>
                  <List sx = {{listStyleType: 'disc', pl: 2, }}>
                    {r.dishes.map((d, i) => (
                      <>
                        <Divider />
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                          <ListItemText primary={d} />
                        </ListItem>
                      </>
                      
                    ))}
                  </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    </Container>
    
    </>
  );
}

export default App;
