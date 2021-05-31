import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';

const ContactForm: React.FC = () => {
    return (
        <Form className="form">
            <Form.Group className="form__name">
                <Form.Label className="form__label">Name</Form.Label>
                <Form.Control placeholder="First name" />
            </Form.Group>
            <Form.Group className="form__mail" controlId="exampleForm.ControlInput1">
                <Form.Label className="form__label">Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="form__website">
                <Form.Label className="form__label">Website</Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>https://</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="www.example.com" />
                </InputGroup>
            </Form.Group>
            <Form.Group className="form__msg" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form__label">Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="form__checkbox" controlId="formBasicCheckbox">
                <Form.Check label="Allow us to sell your personal details to whomever we want" />
            </Form.Group>
            <Button className="form__btn" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;