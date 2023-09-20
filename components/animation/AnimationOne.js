import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';
import { Player } from '@lottiefiles/react-lottie-player';
import gsap from 'gsap';
import { Sine } from '~/gsap/dist/gsap';

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
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
        flex-direction: row;
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
    }
`;
const Content = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    padding: 20px;
    text-align: center;

    p {
        font-family: 'Inter', sans-serif;
        font-size: 28px;
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

const FloatingWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    @media ${device.tablet} {
    }
`;

const Floating = styled.div`
    background-color: #f8d392;
    z-index: 2;
    padding: 10px 15px;
    line-height: 1;
    border-radius: 10.7px;
    box-shadow: 0px 8px 24px -4px rgba(24, 39, 75, 0.08),
        0px 6px 12px -6px rgba(24, 39, 75, 0.12);
    font-size: 12px;

    &[data-pos='1'] {
        position: absolute;

        top: 20%;
        left: 5%;

        @media ${device.tablet} {
            top: 30%;
            left: 8%;
        }
    }

    &[data-pos='2'] {
        position: absolute;
        top: 25%;
        right: 8%;
    }

    &[data-pos='3'] {
        position: absolute;
        bottom: 25%;
        left: 10%;
    }

    &[data-pos='4'] {
        position: absolute;
        bottom: 15%;
        right: 5%;

        @media ${device.tablet} {
            bottom: 35%;
            right: 10%;
        }
    }

    @media ${device.tablet} {
        font-size: 20px;
    }
`;

const AnimationOne = ({ data }) => {
    const floatingRef = useRef();

    useEffect(() => {
        const randomX = random(10, 20);
        const randomY = random(20, 30);
        const randomDelay = random(0, 1);
        const randomTime = random(3, 5);
        const randomTime2 = random(5, 10);
        const randomAngle = random(8, 12);

        const floats = floatingRef.current.querySelectorAll('.floating');

        floats.forEach((item, i) => {
            gsap.set(item, {
                x: randomX(-0.5 * i),
                y: randomX(0.5 * 2),
                rotation: randomAngle(-0.5),
            });

            moveX(item, 0.5);
            moveY(item, -0.5);
            rotate(item, 0.5);
        });

        function rotate(target, direction) {
            gsap.to(target, randomTime2(), {
                rotation: randomAngle(direction),
                ease: Sine.easeInOut,
                onComplete: rotate,
                onCompleteParams: [target, direction * -1],
            });
        }

        function moveX(target, direction) {
            gsap.to(target, randomTime(), {
                x: randomX(direction),
                ease: Sine.easeInOut,
                onComplete: moveX,
                onCompleteParams: [target, direction * -1],
            });
        }

        function moveY(target, direction) {
            gsap.to(target, randomTime(), {
                y: randomY(direction),
                ease: Sine.easeInOut,
                onComplete: moveY,
                onCompleteParams: [target, direction * -1],
            });
        }

        function random(min, max) {
            const delta = max - min;
            return (direction = 1) => (min + delta * Math.random()) * direction;
        }
    }, []);
    return (
        <Container>
            <MaxWrapper>
                <Wrapper>
                    <FloatingWrapper ref={floatingRef}>
                        <Floating className="floating" data-pos="1">
                            Urban food system
                        </Floating>
                        <Floating className="floating" data-pos="2">
                            Affordable nutrition
                        </Floating>
                        <Floating className="floating" data-pos="3">
                            Supply chain resilience
                        </Floating>
                        <Floating className="floating" data-pos="4">
                            Sustainable proteins
                        </Floating>
                    </FloatingWrapper>
                    <Player
                        autoplay
                        loop
                        src="/animation/article1.json"
                    ></Player>
                </Wrapper>
                <Content>
                    <p>
                        Singapore International Agri-Food Week - the world’s
                        most important conversations around
                    </p>
                </Content>
            </MaxWrapper>
        </Container>
    );
};

export default AnimationOne;
