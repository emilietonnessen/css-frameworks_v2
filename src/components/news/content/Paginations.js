import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Paginations() {
    return (
        <>
            <Pagination className="pagination">
                <Pagination.Item active className="pagination__link">{1}</Pagination.Item>
                <Pagination.Item className="pagination__link">{2}</Pagination.Item>
                <Pagination.Item className="pagination__link">{3}</Pagination.Item>
                <Pagination.Item className="pagination__link">{4}</Pagination.Item>
            </Pagination>
        </>
    )
}

export default Paginations