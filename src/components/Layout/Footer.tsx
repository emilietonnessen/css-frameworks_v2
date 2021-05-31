import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer: React.FC = () => (
    <footer className="footer">
        <Card.Footer>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div className="footer__icons">
                            <i className="fab fa-vimeo-v"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </Col>
                    <Col>
                        <a href="mailto:hello@yay.com" className="footer__email">hello@yay.com</a>
                    </Col>
                    <Col>
                        <p className="footer__copyright">Copyright 2021</p>
                    </Col>
                </Row>
            </Container>
        </Card.Footer>
    </footer>
);

export default Footer;