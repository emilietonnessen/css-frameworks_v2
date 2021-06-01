import { Container } from 'react-bootstrap';
import Pagination from '../components/UI/Pagination';
import Articles from '../components/UI/Articles';

const News: React.FC = () => (
    <div className="u-padding-top-bottom-lg">
        <Container className="container--pagination">
            <h1 className="headline headline--primary">News</h1>
        </Container>
        <Container>
            <Pagination />
        </Container>
        <Container className="container--articles">
            <Articles />
        </Container>
        <Container className="container--pagination">
            <Pagination />
        </Container>
    </div>
);

export default News;