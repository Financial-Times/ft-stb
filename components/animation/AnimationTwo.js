import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';
import { Player } from '@lottiefiles/react-lottie-player';
import gsap from 'gsap';
import { Sine, Power1 } from '~/gsap/dist/gsap';
import MotionPathPlugin from '~/gsap/src/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const Container = styled.div`
    position: relative;
    font-family: 'Inter', sans-serif;

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: #f8d392;
        transform: translateY(-50%);
        z-index: 1;

        @media ${device.tablet} {
            height: calc(90% - 100px);
        }
    }

    @media ${device.tablet} {
    }
`;

const MaxWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
        flex-direction: row-reverse;
    }
`;

const Wrapper = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    position: relative;
    aspect-ratio: 1;
    padding-bottom: 100%;

    @media ${device.tablet} {
        max-width: 60%;
        flex-basis: 60%;
        padding-bottom: 0;
    }

    #lottie {
        position: absolute;
        height: 100%;
        width: 100%;
        top: -20%;
        z-index: 4;
    }
`;
const Content = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    padding: 20px;
    text-align: left;

    .author {
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .job {
        font-size: 14px;
        margin: 0;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 500;

        @media ${device.tablet} {
            font-size: 30px;
        }
    }

    @media ${device.tablet} {
        max-width: 40%;
        flex-basis: 40%;
    }
`;

const PlaneWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    #pathOne {
        position: absolute;
        top: 10%;
        left: 0;
        width: 100%;

        path {
            fill: none;
            stroke: #a36bff;
            opacity: 0.4;
            stroke-linecap: round;
            stroke-width: 2px;
        }
    }

    #pathTwo {
        position: absolute;
        bottom: 20%;
        left: 0;
        width: 100%;
        z-index: 3;

        path {
            fill: none;
            stroke: #a36bff;
            opacity: 0.4;
            stroke-linecap: round;
            stroke-width: 2px;
        }
    }

    @media ${device.tablet} {
    }
`;

const Singapour = styled.img`
    width: 100%;
    @media ${device.tablet} {
    }
`;

const Plane = styled.img`
    position: absolute;
    right: 95%;
    top: 50%;
    max-width: 80px;
    width: 100%;
    z-index: 4;
    @media ${device.tablet} {
    }
`;

const AnimationTwo = ({ data }) => {
    const container = useRef();
    useEffect(() => {
        const tl = gsap
            .timeline({
                defaults: {
                    ease: 'none',
                },
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                    markers: false,
                },
            })
            .to(
                '#plane',
                {
                    ease: 'none',
                    motionPath: {
                        path: '#line',
                        align: '#line',
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                    },
                    modifiers: {},
                    duration: 5,
                    ease: 'power1.inOut',
                },
                'tl'
            )
            .to(
                '#planeTwo',
                {
                    ease: 'none',
                    motionPath: {
                        path: '#lineTwo',
                        align: '#lineTwo',
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                    },
                    modifiers: {},
                    duration: 5,
                    ease: 'power1.inOut',
                },
                'tl'
            );
    }, []);
    return (
        <Container ref={container}>
            <MaxWrapper>
                <Wrapper>
                    <PlaneWrapper>
                        <svg
                            viewBox="0 0 781 208"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            id="pathOne"
                        >
                            <path
                                id="line"
                                d="M0.5 207.5C35.3333 187.5 115.3 141.9 126.5 105.5C140.5 60.0001 143.5 30 193 13.0001C234 1.0001 274.076 35.3842 285.5 43C297.5 51 339.239 64.5 359.5 64.5C381 64.5 435.88 38.9443 454.5 41.5C480 45 497.5 79 505 111C512.253 141.946 562.5 179.5 586.5 181.5C610.417 183.493 670.5 142 677 135.5C682.2 130.3 716.5 99 733 84L814 1"
                                stroke="black"
                                strokeDasharray={'6 6 6'}
                            />
                        </svg>

                        <svg
                            id="pathTwo"
                            viewBox="0 0 909 246"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id="lineTwo"
                                d="M908.5 1C844.5 28.5 737.397 199.378 694.5 109.5C663 43.5 599.5 81.5 569 179C569 179 549.5 258.5 503 243C474.178 233.393 485 89.5 395 116.5C334.5 171.5 284 95 245 116.5C201.334 140.573 212.676 243.711 161.5 227C112.5 211 131.414 130.089 87.0001 116.5C20 96 9.55808 53.3226 0.5 42"
                                stroke="black"
                                strokeDasharray={'6 6 6'}
                            />
                        </svg>

                        <Singapour src={'/animation/singapore.svg'} />
                        <Plane
                            src={'/animation/take-off.png'}
                            id="plane"
                            data-pos={'1'}
                        />
                        <Plane
                            src={'/animation/take-off-two.png'}
                            id="planeTwo"
                            data-pos={'1'}
                        />
                    </PlaneWrapper>
                    <Player
                        autoplay
                        loop
                        src="/animation/article2.json"
                    ></Player>
                </Wrapper>
                <Content>
                    <p>
                        “People are leaning towards consolidating their travel
                        plans to get as much data, meet more people and make
                        more deals in one place within a short time.”
                    </p>
                    <p className="author">Shane Chesson</p>
                    <p className="job">
                        Venture capital partner and Singapore Venture and
                        Private Capital Association (SVCA) board member.
                    </p>
                </Content>
            </MaxWrapper>
        </Container>
    );
};

export default AnimationTwo;
