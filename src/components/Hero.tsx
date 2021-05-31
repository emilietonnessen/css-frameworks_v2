import { Button } from "react-bootstrap"

const Hero: React.FC = () => {
    return (
        <header className="hero">
            <h1 className="hero__headline">We do YAY things</h1>
            <p className="hero__text">
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
            </p>
            <Button variant="primary" className="hero__button">Read More..</Button>
        </header>
    );
}

export default Hero;