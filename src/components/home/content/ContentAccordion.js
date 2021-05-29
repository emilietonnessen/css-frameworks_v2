import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TabImage from '../images/tab-image.png';

function ContentAccordion() {
    return (
        <>
            <Accordion defaultActiveKey="0" className="container--accordion">
                <Card className="accordion">
                    <Card.Header className="accordion__header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            First
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <>
                        <Card.Body className="accordion__body">
                            <Card.Text className="accordion__text">
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                            </Card.Text>
                            <Card.Img className="accordion__img" variant="top" src={TabImage} />
                            <Card.Link href="#" className="accordion__icons">
                                <p>SHARE</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </Card.Link>
                        </Card.Body>
                        </>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion">
                    <Card.Header className="accordion__header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Second
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <>
                        <Card.Body className="accordion__body">
                            <Card.Text className="accordion__text">
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                            </Card.Text>
                            <Card.Img className="accordion__img" variant="top" src={TabImage} />
                            <Card.Link href="#" className="accordion__icons">
                                <p>SHARE</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </Card.Link>
                        </Card.Body>
                        </>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion">
                    <Card.Header className="accordion__header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Third
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <>
                        <Card.Body className="accordion__body">
                            <Card.Text className="accordion__text">
                                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                            </Card.Text>
                            <Card.Img className="accordion__img" variant="top" src={TabImage} />
                            <Card.Link href="#" className="accordion__icons">
                                <p>SHARE</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                            </Card.Link>
                        </Card.Body>
                        </>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

export default ContentAccordion