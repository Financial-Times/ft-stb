import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1920px;
    margin: 0 auto;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const Wrapper = styled.div`
    text-align: center;
    line-height: 1.2;
    margin: 50px 0;

    a {
        text-transform: uppercase;
        border: 2px solid #0c305c;
        display: inline-block;
        padding: 15px 25px;
        text-decoration: none;
        color: #0c305c;
        transition: 0.6s ease-in-out;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        &:hover {
            background-color: #004990;
            border: 2px solid #004990;
            color: #fff;
        }
    }

    @media ${device.tablet} {
    }
`;
const Cta = ({ data }) => {
    return (
        <Container>
            <Wrapper>
                <Link href={data.link}>Discover Singapore here</Link>
            </Wrapper>
        </Container>
    );
};

export default Cta;
