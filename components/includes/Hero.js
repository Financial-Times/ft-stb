import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    position: relative;
    margin-bottom: 100px;

    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    max-width: 1220px;
    padding: 10px;
    margin: 0 auto;

    @media ${device.tablet} {
    }
`;

const Content = styled.div`
    padding: 30px;
    @media ${device.tablet} {
    }
`;

const Title = styled.div`
    font-family: 'Prompt', sans-serif;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
    font-size: 36px;

    @media ${device.tablet} {
        font-size: 48px;
    }
`;

const StandFirst = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    text-align: center;
    line-height: 1.3;
    max-width: 850px;
    margin: 0 auto;
    font-size: 18px;
    @media ${device.tablet} {
        font-size: 20px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    aspect-ratio: 1;
    @media ${device.tablet} {
        aspect-ratio: 2;
    }

    img {
        object-fit: cover;
        object-position: center center;
        border-radius: 20px;
    }
`;

const Hero = ({ image, title, subtitle }) => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>Determined, not deterred</Title>
                    <StandFirst>
                        Companies can cut costs and drive growth at the same
                        time. Despite a backdrop of macro uncertainty, leading
                        organisations are doubling down on their digital
                        transformation efforts in order to prioritise both
                        goals.
                    </StandFirst>
                </Content>
                <ImageWrapper>
                    <Image
                        src="https://ft.com/partnercontent/servicenow/images/snHero.jpg"
                        alt=""
                        layout="fill"
                    />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
};

export default Hero;
