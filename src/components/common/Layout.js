import React from 'react';
import styled from '@emotion/styled';
import Navbar from './Navbar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 8rem;
    margin-top: 2rem;
    @media (max-width: 412px) {
        margin: 0;
    }
    @media (max-width: 768px) {
        margin: 2rem;
    }
`


const Layout = ({children, setSection}) => {
    return (
        <Container>
            <Navbar setSection={setSection}/>
            <Main>
                {children}
            </Main>

        </Container>
    );
};

export default Layout;