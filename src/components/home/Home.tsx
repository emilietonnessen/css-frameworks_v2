import { Carousel, Container, Row, Col } from 'react-bootstrap';
import ContentAccordion from "./content/ContentAccordion";
import ContentTabs from "./content/ContentTabs";
import carouselOne from '../../assets/carousel-1.jpg';
import carouselTwo from '../../assets/carousel-2.jpg';
import carouselThree from '../../assets/carousel-3.jpg';

const Home: React.FC = () => (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselOne}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselTwo}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselThree}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <Container>
            <h1>We do YAY things</h1>
            <p>
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
            </p>
        </Container>
        <Container>
            <Row>  
                <Col>
                    <div className="d-block d-md-none">
                        <ContentAccordion />
                    </div>
                        <div className="d-none d-md-block">
                        <ContentTabs />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
);

export default Home;