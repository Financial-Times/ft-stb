import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    margin-bottom: 100px;
    overflow: hidden;
    @media ${device.laptopS} {
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 90%;
    padding: 30px;

    @media ${device.laptopS} {
        flex-direction: row;
        padding: 60px;
    }
`;

const Counter = styled.div`
    color: #dbef89;
    background-color: black;
    border-radius: 20px;
    line-height: 1;
    display: grid;
    place-items: center;
    padding: 10px 20px;
    font-family: 'Prompt', sans-serif;
    font-weight: 500;
    position: absolute;
    font-size: 20px;
    top: 15px;
    left: 30px;

    @media ${device.laptopS} {
        padding: 15px 25px;
        top: 30px;
        left: 40px;
    }
`;

const Content = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-bottom: 8%;

    @media ${device.laptopS} {
        flex-basis: 50%;
        max-width: 50%;
        padding: 0 20px 5% 0px;
    }
`;

const ImageWrapper = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    aspect-ratio: 1.5;
    position: relative;

    img {
        object-fit: cover;
        object-position: top center;
        border-radius: 20px;
        margin: initial !important;
        height: 90% !important;
        min-height: initial !important;
        color: initial !important;
    }

    @media ${device.laptopS} {
        flex-basis: 50%;
        max-width: 50%;
    }
`;

const Title = styled.div`
    p {
        font-family: 'Prompt', sans-serif;
        font-weight: 500;
        font-size: 22px;
        max-width: 600px;
        line-height: 1.3;
        margin-bottom: 10px;
        @media ${device.laptopS} {
            font-size: 28px;
        }
    }

    span {
        position: relative;
        background-size: 110%;
        background-repeat: no-repeat;
        background-position: center center;
        [data-hl='true'] & {
            background-image: url('/highlight.png');
        }
        [data-hl='false'] & {
            background-image: url('/highlight2.png');
            background-size: 110%;
        }
    }
`;

const Desc = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    max-width: 500px;
    margin-bottom: 40px;

    @media ${device.laptopS} {
        font-size: 22px;
        margin-bottom: 60px;
    }
`;

const Cta = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 20px 21px;
    position: relative;
    cursor: pointer;
    font-family: 'Prompt', sans-serif;
    font-weight: 500;
    font-size: 19px;
    line-height: 1;

    svg {
        position: relative;
        z-index: 2;
    }

    &:hover {
        &:after {
            width: 100%;
            transition: width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 49px;
        height: 100%;
        z-index: 1;
        border-radius: 12px;
        transition: width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        [data-hl='true'] & {
            background-color: #62d84e;
        }
        [data-hl='false'] & {
            background-color: #dbef89;
        }
    }
    @media ${device.laptopS} {
    }
`;

const CtaContent = styled.div`
    position: relative;
    z-index: 2;
    @media ${device.laptopS} {
    }
`;

const TitleContainer = styled.div`
    @media ${device.laptopS} {
    }
`;

const ArticleCard = ({ data, aId, total }) => {
    const id = aId + 1;
    return (
        <Container
            className={`custom-card card${aId}`}
            style={{ zIndex: aId }}
            data-hl={data.highlight}
            data-anchor={data.anchorTop}
        >
            <Counter>
                {id} of {total}
            </Counter>
            <Wrapper>
                <>
                    <Link href={`/article/${data.id}`}>
                        <Content>
                            <TitleContainer>
                                <Title
                                    dangerouslySetInnerHTML={{
                                        __html: data.metaData.cardTitle,
                                    }}
                                />
                            </TitleContainer>
                            <Desc>{data.metaData.desc}</Desc>
                            <Cta>
                                <svg
                                    width="37"
                                    height="8"
                                    viewBox="0 0 37 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M36.3536 4.35355C36.5488 4.15829 36.5488 3.84171 36.3536 3.64645L33.1716 0.464466C32.9763 0.269204 32.6597 0.269204 32.4645 0.464466C32.2692 0.659728 32.2692 0.976311 32.4645 1.17157L35.2929 4L32.4645 6.82843C32.2692 7.02369 32.2692 7.34027 32.4645 7.53553C32.6597 7.7308 32.9763 7.7308 33.1716 7.53553L36.3536 4.35355ZM0 4.5H36V3.5H0V4.5Z"
                                        fill="black"
                                    />
                                </svg>
                                <CtaContent>
                                    Explore immersive article
                                </CtaContent>
                            </Cta>
                        </Content>
                    </Link>
                </>
                <ImageWrapper>
                    <Image
                        src={data.metaData.articleImage}
                        layout="fill"
                        alt=""
                    />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
};

export default ArticleCard;
