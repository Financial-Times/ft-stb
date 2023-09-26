import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';
import PageWrapper from './PageWrapper';
import { useState } from 'react';

const Container = styled.div`
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    padding: 40px 20px;
    @media ${device.tablet} {
    }
`;

const FootNotesTitle = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    color: #ff7442;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    @media ${device.tablet} {
    }
`;

const FootNotesContainer = styled.div`
    background-color: rgb(248 211 146 / 20%);
    padding: 10px;
    width: 100%;
    @media ${device.tablet} {
    }
`;

const FootNote = styled.div`
    sup {
        font-size: 10px;
        margin-right: 5px;
    }
    a {
        font-size: 10px;
    }

    @media ${device.tablet} {
    }
`;

const Footnotes = ({ data }) => {
    const [toggle, setToggle] = useState(true);

    return (
        <Container>
            <PageWrapper>
                <Wrapper>
                    <FootNotesTitle onClick={() => setToggle(!toggle)}>
                        View Footnotes {toggle}
                    </FootNotesTitle>
                    <FootNotesContainer
                        style={{ display: toggle ? 'block' : 'none' }}
                    >
                        {data.map((el, i) => {
                            return (
                                <FootNote key={i}>
                                    <sup>{el.id}</sup>
                                    <Link href={el.link}>{el.link}</Link>
                                </FootNote>
                            );
                        })}
                    </FootNotesContainer>
                </Wrapper>
            </PageWrapper>
        </Container>
    );
};

export default Footnotes;
