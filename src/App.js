import logo from './logo.svg';
import './App.css';
import { Col, Container, Row,Card ,Button} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import { blog } from './Data/blog';

function App() {
  return (
    <div>
      <Container>
        <Header></Header>
      </Container>
      <Container>
        <Row>
          {blog.map((v,i)=>{
            return(
              <ProductItem pitem = {v} key= {i}></ProductItem>
            )
          })}
        </Row>
        {/* <ProductItem></ProductItem> */}
      </Container>
      <Container>
        <Footer></Footer>
      </Container>
    </div>
  );
}


export default App;

function ProductItem({pitem}) {
  return(
    <div className="col-lg-3 mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{pitem.title}</Card.Title>
          <Card.Text>
            {pitem.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}