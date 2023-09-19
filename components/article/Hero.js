import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';
import Home from '../../pages/index';
import { Link } from 'next/link';

const Container = styled.div`
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const ImageWrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const Nav = styled.div`
    @media ${device.tablet} {
    }
`;

const NavTitle = styled.div`
    @media ${device.tablet} {
    }
`;

const Content = styled.div`
    @media ${device.tablet} {
    }
`;

const Title = styled.div`
    @media ${device.tablet} {
    }
`;

const StandFirst = styled.div`
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
                <Nav>
                    <Home>
                        <Link href="/">Home</Link>
                        <NavTitle>/ {data.title}</NavTitle>
                    </Home>
                </Nav>
                <Content>
                    <Title>{data.title}</Title>
                    <StandFirst>{data.title}</StandFirst>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default Hero;
