import React from 'react';
import Paginations from './content/Paginations';
import Articles from './content/Articles';
import Container from 'react-bootstrap/Container';

function News() {
    return (
        <>
            <Container className="container--paginations">
                <h1>News</h1>
            </Container>
            <Container>
                <Paginations />
            </Container>
            <Container className="container--articles">
                <Articles />
            </Container>
            <Container className="container--paginations">
                <Paginations />
            </Container>
        </>
    )
}

export default News