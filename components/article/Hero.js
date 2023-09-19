import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';
import Link from 'next/link';
import PageWrapper from '../includes/PageWrapper';

const Container = styled.div`
    background: rgb(243 176 61 / 56%);
    font-family: 'Roboto', sans-serif;
    padding-bottom: 54px;

    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    aspect-ratio: 2.5;
    margin-bottom: 20px;

    img {
        object-fit: cover;
        object-position: center center;
    }
    @media ${device.tablet} {
    }
`;

const Nav = styled.div`
    margin-bottom: 70px;
    @media ${device.tablet} {
    }
`;

const NavTitle = styled.div`
    color: #3d464d;
    @media ${device.tablet} {
    }
`;

const Content = styled.div`
    @media ${device.tablet} {
    }
`;

const Title = styled.div`
    font-size: 54px;
    font-style: normal;
    font-weight: 500;
    line-height: 70.2px;
    margin-bottom: 24px;
    @media ${device.tablet} {
        font-size: 54px;
    }
`;

const GoBack = styled.div`
    display: flex;
    color: #ff6e3d;

    font-size: 14.6px;
    a {
        text-decoration: none;
        margin-right: 5px;
        text-transform: uppercase;
    }

    @media ${device.tablet} {
    }
`;

const StandFirst = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    @media ${device.tablet} {
    }
`;

const Hero = ({ data }) => {
    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <Image
                        src={data.articleImage}
                        alt="article hero image"
                        layout="fill"
                    />
                </ImageWrapper>
                <PageWrapper>
                    <Nav>
                        <GoBack>
                            <Link href={`/`} passHref scroll>
                                Home
                            </Link>
                            <NavTitle>/ {data.title}</NavTitle>
                        </GoBack>
                    </Nav>
                    <Content>
                        <Title>{data.title}</Title>
                        <StandFirst>{data.desc}</StandFirst>
                    </Content>
                </PageWrapper>
            </Wrapper>
        </Container>
    );
};

export default Hero;
