import { useState, useEffect } from 'react' 
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
    <Container fluid>
      <Row>
      {restaurants.map((r, i) => (
          <Col xs="3">
            <Card text='light'
                className="dark-card"
                key={i}
            >
              <Card.Body>
                <Card.Title>{r.name}</Card.Title>
                <ListGroup variant="flush">
                  {r.dishes.map((d) => (
                    <ListGroup.Item className="dark-card">{d}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          ))}
      </Row>
    </Container>
    
    </>
  );
}

export default App;
