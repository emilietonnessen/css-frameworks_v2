import { Container, Row, Col } from 'react-bootstrap';

import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';


const Contact: React.FC = () => (
    <Container>
        <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span:12, order: 1}}>
                <h1>Submit your details</h1>
            </Col>

            <Col className="container--contactInfo" xs={{ span: 12, order: 1 }} md={{ span:6, order: 3}}>
                <ContactInfo />
            </Col>

            <Col xs={{ span: 12, order: 3 }} md={{span:6, order: 2}}>
                <ContactForm />
            </Col>
        </Row>
    </Container>
);

export default Contact;