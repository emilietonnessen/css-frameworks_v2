import BootPagination from 'react-bootstrap/Pagination';

const Pagination: React.FC = () => (
    <BootPagination className="BootPagination">
        <BootPagination.Item active className="pagination__link">{1}</BootPagination.Item>
        <BootPagination.Item className="pagination__link">{2}</BootPagination.Item>
        <BootPagination.Item className="pagination__link">{3}</BootPagination.Item>
        <BootPagination.Item className="pagination__link">{4}</BootPagination.Item>
    </BootPagination>
);

export default Pagination;