import { Container, Row } from 'react-bootstrap';

const ContactInfo: React.FC = () => (
    <Container className="contactInfo">
        <Row className="contactInfo__item">
            <div className="contactInfo__icon">
                <i className="fas fa-envelope"></i>
            </div>
            <div className="contactInfo__text">
                <p>hello@yay.com</p>
            </div>
        </Row>
        <Row className="contactInfo__item">
            <div className="contactInfo__icon">
                <i className="fas fa-phone"></i>
            </div>
            <div className="contactInfo__text">
                <p>123 456 7890</p>
            </div>
        </Row>
        <Row className="contactInfo__item">
            <div className="contactInfo__icon">
                <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contactInfo__text">
                <p>123 Some street</p>
                <p>Somewhere</p>
                <p>Some City</p>
                <p>10000</p>
            </div>
        </Row>
    </Container>    
);


export default ContactInfo;