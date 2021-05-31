import { Container, Row, Col } from 'react-bootstrap';
import Accordion from "../components/UI/Accordion";
import Tabs from "../components/UI/Tabs";
import Carousel from '../components/UI/Carousel';
import Hero from '../components/Hero';

const Home: React.FC = () => (
    <>
        
        <Container className="u-padding-top-bottom-md">
            <Carousel />
            <Hero />
        </Container>
        <Container>
            <Row>  
                <Col>
                    <div className="d-block d-md-none">
                        <Accordion />
                    </div>
                        <div className="d-none d-md-block">
                        <Tabs />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
);

export default Home;