import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    position: relative;
    margin-bottom: 50px;
    max-width: 100%;
    flex-basis: 100%;
    cursor: pointer;
    width: 100%;
    @media ${device.tablet} {
        max-width: 80%;
        flex-basis: 100%;
    }

    @media ${device.laptop} {
        max-width: 40%;
        flex-basis: 40%;
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const Content = styled.div`
    position: absolute;
    bottom: -50px;
    background-color: white;
    box-shadow: 2px 4px 20px 7px rgba(24, 39, 75, 0.12);
    display: inline-flex;
    right: 10px;
    max-width: 492px;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    @media ${device.tablet} {
    }
`;

const ImageWrapper = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    aspect-ratio: 1.4;
    position: relative;
    box-shadow: 2px 4px 20px 7px rgba(24, 39, 75, 0.12);

    img {
        object-fit: cover;
        object-position: top center;
    }

    @media ${device.tablet} {
    }
`;

const Title = styled.div`
    padding: 24px 32px;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
    max-width: 70%;
    flex-basis: 70%;
    @media ${device.laptop} {
    }
`;

const Cta = styled.div`
    max-width: 30%;
    flex-basis: 30%;
    color: #ff7442;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    display: flex;

    svg {
        transform: translate(5px, 5px);
    }

    @media ${device.tablet} {
    }
`;

const ArticleCard = ({ data }) => {
    return (
        <Container>
            <a href={`/article/${data.id}`}>
                <Wrapper>
                    <ImageWrapper>
                        <Image
                            src={data.metaData.articleImage}
                            layout="fill"
                            alt=""
                        />
                    </ImageWrapper>
                    <Content>
                        <Title>{data.metaData.title}</Title>
                        <Cta>
                            Read More{' '}
                            <svg
                                width="27"
                                height="14"
                                viewBox="0 0 27 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 6.89043C0.13673 6.44679 0.466334 6.3608 0.867936 6.3608C8.74211 6.36421 16.6163 6.36353 24.4911 6.36353H24.8848C24.7719 6.23726 24.7058 6.15809 24.6345 6.08438C23.0763 4.4716 21.5174 2.85882 19.9586 1.24603C19.909 1.19485 19.8568 1.14502 19.8106 1.0911C19.5596 0.801035 19.5523 0.440668 19.7901 0.18609C20.024 -0.0643928 20.378 -0.0623455 20.664 0.19428C20.7235 0.247516 20.7789 0.306213 20.8351 0.364226C22.7804 2.37355 24.7263 4.38287 26.6709 6.39288C27.1068 6.84334 27.1095 7.15047 26.6801 7.5941C24.7045 9.63618 22.7282 11.6783 20.7519 13.7197C20.4348 14.0473 20.096 14.0889 19.8218 13.8384C19.592 13.6282 19.5464 13.287 19.7247 13.0283C19.8007 12.9184 19.8945 12.8201 19.987 12.7239C21.5399 11.1179 23.0934 9.51265 24.647 7.90738C24.7131 7.83912 24.7765 7.76678 24.8921 7.64051C24.7217 7.64051 24.6133 7.64051 24.505 7.64051C16.6216 7.64051 8.73881 7.63983 0.855386 7.64392C0.47426 7.64392 0.166454 7.54906 0.00066053 7.16275V6.89043H0Z"
                                    fill="#FF7442"
                                />
                            </svg>
                        </Cta>
                    </Content>
                </Wrapper>
            </a>
        </Container>
    );
};

export default ArticleCard;
