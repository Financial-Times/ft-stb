import styled from 'styled-components';
import { device } from '~/config/utils';

import Tt from '~/assets/client/tt.svg';
import Li from '~/assets/client/li.svg';
import Tw from '~/assets/client/tw.svg';
import Yt from '~/assets/client/yt.svg';
import Fb from '~/assets/client/fb.svg';
import Web from '~/assets/client/web.svg';
import Scribble from '~/assets/scribble.svg';

const Container = styled.div`
    background-color: #edede8;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 56px 0 112px 0;
    @media ${device.tablet} {
        padding: 133px 0 234px 0;
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
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
    font-weight: 500;
    display: grid;
    place-items: center;
    position: relative;
    margin-bottom: 30px;

    @media ${device.tablet} {
        font-size: 48px;
        max-width: 50%;
        flex-basis: 50%;
    }
`;

const Social = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    @media ${device.tablet} {
        max-width: 50%;
        flex-basis: 50%;
    }
`;

const SocialContent = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    max-width: 600px;
    margin-bottom: 20px;
    line-height: 1.3;
    margin-bottom: 30px;
    text-align: center;

    @media ${device.tablet} {
        text-align: left;
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

    #tt,
    #we {
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;

        svg {
            width: 28px;
        }
    }
`;

const Icon = styled.a`
    display: grid;
    place-items: center;
    border: 1px solid black;

    svg {
    }

    @media ${device.tablet} {
    }
`;

const TitleContainer = styled.div`
    position: relative;

    span {
        position: relative;
        z-index: 2;
    }

    .scribble {
        position: absolute;
        left: 0;
        width: 70%;
        bottom: 5px;
        z-index: 1;
        @media ${device.tablet} {
        }
    }

    @media ${device.tablet} {
    }
`;

const ClientFooter = () => {
    const data = [
        {
            id: 'we',
            el: <Web />,
            url: 'https://www.servicenow.com/uk/world-works-with-servicenow.html',
            useSvg: true,
        },
        {
            id: 'li',
            el: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftsocial-v2:linkedin?source=origami-image-service-website',
            url: 'https://www.linkedin.com/company/servicenow',
        },
        {
            id: 'tw',
            el: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftsocial-v2:twitter?source=origami-image-service-website',
            url: 'https://twitter.com/ServiceNowUKI',
        },
        {
            id: 'yt',
            el: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftsocial-v2:youtube?source=origami-image-service-website',
            url: 'https://www.youtube.com/user/servicenowinc',
        },
        {
            id: 'fb',
            el: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftsocial-v2:facebook?source=origami-image-service-website',
            url: 'https://www.facebook.com/servicenow',
        },

        {
            id: 'tt',
            el: <Tt />,
            url: 'https://www.tiktok.com/@servicenow?_t=8cb3UL2wZOU&_r=1',
            useSvg: true,
        },
    ];

    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>
                        <TitleContainer>
                            <span>Connect with us</span>
                            <Scribble className="scribble" />
                        </TitleContainer>
                    </Title>
                    <Social>
                        <SocialContent>
                            Learn more about the intelligent platform for
                            digital transformation
                        </SocialContent>
                        <Icons>
                            {data.map((item, i) => {
                                return (
                                    <Icon key={i} href={item.url} id={item.id}>
                                        {item.useSvg ? (
                                            item.el
                                        ) : (
                                            <svg width="60" height="60">
                                                <image
                                                    xlinkHref={item.el}
                                                    src={item.el}
                                                    width="60"
                                                    height="60"
                                                />
                                            </svg>
                                        )}
                                    </Icon>
                                );
                            })}
                        </Icons>
                    </Social>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default ClientFooter;
