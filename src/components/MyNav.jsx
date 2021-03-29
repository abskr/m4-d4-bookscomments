import  {Col, Form, FormControl, Button, Navbar, Nav,Row} from 'react-bootstrap'

const Navigator = () => (
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="#home">Buku</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
    </Nav>
    <Form>
      <Row>
        <Col xs={8}>
        <FormControl type="text" placeholder="Browse..."/>
        </Col>
        <Col xs={2}>
        <Button variant="outline-light">Search</Button>
        </Col>
      </Row>
      </Form>
      
    </Navbar.Collapse>
  </Navbar>
)

export default Navigator
