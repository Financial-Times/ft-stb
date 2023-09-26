import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Play from '~/assets/video/play.svg';

import { device } from '~/config/utils';

const Container = styled.div`
    position: relative;
    text-align: left;
    @media ${device.tablet} {
    }
`;
const ComponentWrapper = styled.div`
    margin-bottom: 25px;
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
    aspect-ratio: 1.5;

    &:hover {
        img {
            transform: scale(1.4);
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    }

    .swiper-slide & {
        transition: transform 0.6s ease-in-out;
    }

    .swiper-slide-active & {
        transition: transform 0.6s ease-in-out;
    }

    img {
        object-fit: cover;
        object-position: center center;
        transform: scale(1);
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;

const Content = styled.div`
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 2;
    color: #0c305c;
    text-align: center;
    padding: 20px;
    @media ${device.laptop} {
    }
`;

const Title = styled.div`
    font-size: 24px;
    line-height: 1.2;
    font-weight: 500;
    color: black;
    @media ${device.tablet} {
    }
`;

const RelatedItem = ({ data }) => {
    return (
        <Link href={`/article/${data.id}`}>
            <Container data-color={data.color}>
                <ComponentWrapper>
                    <>
                        <Wrapper>
                            <Image
                                src={data.metaData.articleImage}
                                layout="fill"
                                alt={data.metaData.title}
                            />
                        </Wrapper>
                        <Content>
                            <Title>{data.metaData.title} </Title>
                        </Content>
                    </>
                </ComponentWrapper>
            </Container>
        </Link>
    );
};

export default RelatedItem;
