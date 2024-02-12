import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Scrollspy from 'react-scrollspy'

function App() {
  return (
    <div className="App">
      {/* 헤더부분 */}
      <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MYUNGJIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Scrollspy items={ ['Home', 'Organization', 'Location', 'Contact'] }>
                <table className='nav_table'>
                  <tr valign="bottom">
                    <td width="1000vw"></td>
                    <td width="180vw">
                      <Nav.Link href="#home">Home</Nav.Link>
                    </td>
                    <td width="180vw">
                      <Nav.Link href="#Organization">Organization</Nav.Link>
                    </td>
                    <td width="180vw">
                      <Nav.Link href="#Location">Location</Nav.Link>
                    </td>
                    <td width="180vw">
                      <Nav.Link href="#Contact">Contact</Nav.Link>
                    </td>
                  </tr>
                </table>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
      {/* 헤더부분 */}
      
      {/* 메인내용 */}
      <section id="home">
        
        <table className="main_table" width="80%" cellSpacing="10px">
          <tr>
            <h2><strong>Home</strong></h2>
          </tr>
          <tr className="summary" height="80px">
            <td>
              <strong>Welcomes you to <span style={{color:"#0077c7"}}>our website</span></strong>
            </td>
          </tr>
          <tr>
            <td colspan="2" valign="middle" align='right'>
              <img src='image/content_0101.jpg' width="80%"></img>
            </td>
          </tr>
          <tr height="30px"></tr>
          <tr className='main_content'>
          Myungjin Textiles a company specialized in textiles with a focus on key calues such as 
          the top quality and the customer satisfaction. We are developing new textile products 
          for Golf Wear, Snow Sports, Outdoor activities and reserve parachutes. And our 
          dedication to the quality management and interconnected production system for the 
          entire process from weaving, dyeing, processing or other textile related procedures is 
          contributing to build or reputation in and out of country.
          </tr>
          <tr height="30px"></tr>
          <tr className="main_content">
          We are producing various products, to name a few, the Protective Wear, Heavy Denier,
          Outdoor Garments & bags, Backpacks, and Golf Wears ranging from low denier products
          of 15D and 20D to higher deniered ones of 1000D or above. The textiles for flight jacket
          and motor cycle wear are also available.
          </tr>
          <tr height="30px"></tr>
          <tr className="main_content">
          Myungjin Textile will honor our promised to the customers with senses of
          responsibilities to meet the needs of our customers and be a trusted company with our
          continued dedication.
          </tr>
          <tr height="50px"></tr>
          
        </table>
      </section>

      {/* 조직도 */}
      <section id="Organization">
        <table className='org_table' width="80%">
          <tr height="100px">
            <h2><strong>Organization</strong></h2>
          </tr>
          <tr>
            <p align="center">
              <img src='image/content_0102.jpg'></img>
            </p>
          </tr>
        </table>
      </section>

      {/* 위치 */}
      <section id="Location">
        <table className='loc_table' width="80%">
          <tr height="100px">
            <h2><strong>Location</strong></h2>
          </tr>
          <tr>
            <p align="center">
              <img src='image/content_0103.jpg'></img>
            </p>
          </tr>
        </table>
      </section>

      {/* 연락 */}
      <section id="Contact">
        <table className='con_table' width="80%">
          <tr height="100px">
            <h2><strong>Contact</strong></h2>
          </tr>
          <tr>
            <p align="center">
              <img src='image/content_0103.jpg'></img>
            </p>
          </tr>
        </table>
      </section>

      <footer>
        <img src="image/copy.gif"/>
      </footer>
    </div>
  );
}


export default App;
