import BootstrapCarousel from 'react-bootstrap/Carousel';
import carouselOne from '../../assets/carousel-1.jpg';
import carouselTwo from '../../assets/carousel-2.jpg';
import carouselThree from '../../assets/carousel-3.jpg';


const Carousel: React.FC = () => {
    return (
        <BootstrapCarousel>
            <BootstrapCarousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselOne}
                    alt="First slide"
                />
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselTwo}
                    alt="Second slide"
                />
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselThree}
                    alt="Third slide"
                />
            </BootstrapCarousel.Item>
        </BootstrapCarousel>
    );
}

export default Carousel;