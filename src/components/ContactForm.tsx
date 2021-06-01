import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("* Please enter your name"),
    email: yup.string().required("* Please enter an email address").email("* Please enter a valid email address"),
    website: yup.string().required("* Please enter your website"),
    message: yup.string().required("* Please enter your message").min(10, "* The message must be at least 10 characters"),
});

const ContactForm: React.FC = () => {

    // react-hook-form + yup resolver
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });



    // Submitting Data
    const onSubmit = (data: any) => {
        console.log("[data]", data);
    }


    // console logs
    //console.error("[errors]", errors);

    return (
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>

            {/* Name */}
            <Form.Group className="form__group">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="First name" {...register("name")} className="form__input" />
                {errors.name && <span className="form__group--error">{errors.name.message}</span>}
            </Form.Group>


            {/* Email */}
            <Form.Group className="form__group"  controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" {...register("email")} className="form__input"/>
                {errors.email && <span className="form__group--error">{errors.email.message}</span>}
            </Form.Group>


            {/* Website */}
            <Form.Group className="form__group">
                <Form.Label>Website</Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="form__icon">https://</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="www.example.com" {...register("website")} className="form__input"/>
                </InputGroup>
                {errors.website && <span className="form__group--error">{errors.website.message}</span>}
            </Form.Group>


            {/* Message */}
            <Form.Group className="form__group"  controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("message")} className="form__textarea"/>
                {errors.message && <span className="form__group--error">{errors.message.message}</span>}
            </Form.Group>


            {/* Checkbox */}
            <Form.Group className="form__group mb-3" controlId="checkbox">
                <Form.Check id="checkbox" type="checkbox" label="Allow us to sell your personal details to whomever we want" />
            </Form.Group>


            {/* Submit Button */}
            <Button variant="secondary" type="submit" className="form__button">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;