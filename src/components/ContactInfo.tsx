import { Container, Row } from 'react-bootstrap';

const ContactInfo: React.FC = () => (
    <Container className="contact-info">
        <Row className="contact-info__item">
            <div className="contact-info__icon">
                <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info__text">
                <p>hello@yay.com</p>
            </div>
        </Row>
        <Row className="contact-info__item">
            <div className="contact-info__icon">
                <i className="fas fa-phone"></i>
            </div>
            <div className="contact-info__text">
                <p>123 456 7890</p>
            </div>
        </Row>
        <Row className="contact-info__item">
            <div className="contact-info__icon">
                <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-info__text">
                <p>123 Some street</p>
                <p>Somewhere</p>
                <p>Some City</p>
                <p>10000</p>
            </div>
        </Row>
    </Container>    
);


export default ContactInfo;