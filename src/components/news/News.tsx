import { Container } from 'react-bootstrap';
import Pagination from './content/Pagination';
import Articles from './content/Articles';

const News: React.FC = () => (
    <>
        <Container className="container--pagination">
            <h1>News</h1>
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
    </>
);

export default News;