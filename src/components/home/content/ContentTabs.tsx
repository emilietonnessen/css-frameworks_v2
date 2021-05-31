import { Tab, Tabs, Card } from 'react-bootstrap';
import TabImage from '../../../assets/tab-image.png';

const ContentTabs: React.FC = () => (
    <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="First">
            <Card>
                <Card.Body className="tab">
                    <Card.Img variant="top" src={TabImage} className="tab__img"/>
                    <div className="tab__content">
                        <Card.Text className="tab__text">
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </Card.Text>
                        <Card.Link href="#" className="tab__icons">
                                <p>SHARE</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Tab>
        <Tab eventKey="second" title="Second">
            <Card>
                <Card.Body className="tab">
                    <Card.Img variant="top" src={TabImage} className="tab__img" />
                    <div className="tab__content">
                        <Card.Text className="tab__text">
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </Card.Text>
                        <Card.Link href="#" className="tab__icons">
                            <p>SHARE</p>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Tab>
        <Tab eventKey="third" title="Third">
            <Card>
                <Card.Body className="tab">
                    <Card.Img variant="top" src={TabImage} className="tab__img"/>
                    <div className="tab__content">
                        <Card.Text className="tab__text">
                            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </Card.Text>
                        <Card.Link href="#" className="tab__icons">
                                <p>SHARE</p>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Tab>
    </Tabs>
);

export default ContentTabs;