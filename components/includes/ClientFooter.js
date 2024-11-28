import styled from 'styled-components';
import { device } from '~/config/utils';

// https://www.ft.com/__origami/service/image/v2/docs/image-sets#FT-Social

const Container = styled.div`
    background-color: #f8d392;
    padding: 54px 0;
    position: relative;

    @media ${device.tablet} {
        padding: 64px 0;
    }
`;

const Wrapper = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    @media ${device.tablet} {
        flex-direction: row;
        padding: 0 20px;
    }
`;

const Content = styled.div`
    color: #0c305c;
    display: flex;
    flex-direction: column;
    color: black;
    padding: 0 20px;
    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const Title = styled.div`
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-size: 36px;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    text-align: center;

    @media ${device.tablet} {
    }
`;

const Social = styled.div`
    @media ${device.tablet} {
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    @media ${device.tablet} {
        justify-content: flex-start;
    }
`;

const Icon = styled.a`
    display: grid;
    place-items: center;
    border-radius: 100%;
    border: 1px solid #ff6e3d;
    background: #ff6e3d;
    svg {
        filter: invert(1);
        width: 40px;
        height: 40px;
        @media ${device.tablet} {
            width: 60px;
            height: 60px;
        }
        image {
            width: 40px;
            height: 40px;
            @media ${device.tablet} {
                width: 60px;
                height: 60px;
            }
        }
    }

    @media ${device.tablet} {
    }
`;

const TitleContainer = styled.div`
    position: relative;
    font-size: 19px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 15px;
    @media ${device.tablet} {
        margin-right: 50px;
        margin-bottom: initial;
    }
`;

const Btt = styled.button`
    position: absolute;
    border: none;
    border-radius: 100%;
    background: #ff6e3d;
    padding: 35px;
    top: -40px;
    right: 10%;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 100%;
    }

    svg {
        transform: translateY(0);
        transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:hover {
        svg {
            transform: translateY(-10px);
            transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }

    @media ${device.tablet} {
    }
`;

const ClientFooter = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const data = [
        {
            id: 'li',
            el: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftsocial-v2%3Alinkedin?source=image-url-builder',
            url: 'https://sg.linkedin.com/company/visitsingapore-business-events',
        },
        {
            id: 'yt',
            el: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftsocial-v2:youtube?source=origami-image-service-website',
            url: 'https://youtube.com/@singaporeexhibitionandconv2377?si=0Q3ICo3VMaiKkLPK',
        },
    ];

    return (
        <Container>
            <Btt onClick={scrollToTop}>
                <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.27734 0.589844C9.44661 0.589844 9.60938 0.622396 9.76562 0.6875C9.92188 0.752604 10.0651 0.850261 10.1953 0.980469L18.1641 9.14453C18.4245 9.40495 18.5547 9.71745 18.5547 10.082C18.5547 10.4466 18.4245 10.7591 18.1641 11.0195C17.9167 11.2799 17.6139 11.4102 17.2559 11.4102C16.8978 11.4102 16.5885 11.2799 16.3281 11.0195L9.27734 3.79297L2.22656 11.0195C1.96615 11.2799 1.6569 11.4102 1.29883 11.4102C0.940755 11.4102 0.638021 11.2799 0.390625 11.0195C0.130208 10.7591 0 10.4466 0 10.082C0 9.71745 0.130208 9.40495 0.390625 9.14453L8.35938 0.980469C8.48958 0.850261 8.63281 0.752604 8.78906 0.6875C8.94531 0.622396 9.10807 0.589844 9.27734 0.589844Z"
                        fill="white"
                    />
                </svg>
            </Btt>
            <Wrapper>
                <Title>
                    <TitleContainer>
                        <span>Stay Connected</span>
                    </TitleContainer>
                </Title>
                <Social>
                    <Icons>
                        {data.map((item, i) => {
                            return (
                                <Icon key={i} href={item.url} id={item.id}>
                                    <svg>
                                        <image
                                            xlinkHref={item.el}
                                            src={item.el}
                                        />
                                    </svg>
                                </Icon>
                            );
                        })}
                    </Icons>
                </Social>
            </Wrapper>
        </Container>
    );
};

export default ClientFooter;
