import styled from 'styled-components';
import { device } from '~/config/utils';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/src/SplitText';
import PageWrapper from '../includes/PageWrapper';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Container = styled.div`
    font-family: 'Inter', sans-serif;
    background-color: rgb(248 211 146 / 20%);
    position: relative;
    padding: 48px 0;
    margin: 44px 0;

    @media ${device.tablet} {
        padding: 96px 0;
        margin: 88px 0;
    }
`;

const Wrapper = styled.div`
    max-width: 780px;
    margin: 0 auto;
    position: relative;

    &:after {
        content: '"';
        position: absolute;
        top: 40%;
        right: 0%;
        z-index: -1;
        font-family: 'Passion One', cursive;
        line-height: 1;
        font-size: 640px;
        color: #f8d392;
        opacity: 0.5;
    }
    @media ${device.tablet} {
    }
`;

const ScrollingWords = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;

    .text > p > div {
        background: linear-gradient(to right, #ff6e3d 50%, #d9d9d9 50%);
        background-size: 200% 100%;
        background-position-x: 100%;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1.2;
        font-size: 22px;
        @media ${device.tablet} {
            font-size: 40px;
        }
    }

    @media ${device.tablet} {
    }
`;

const AuthorSection = styled.div`
    font-weight: bold;
    font-size: 18px;
    @media ${device.tablet} {
    }
`;

const Author = styled.div`
    @media ${device.tablet} {
    }
`;

const Job = styled.div`
    @media ${device.tablet} {
    }
`;

const Quote = ({ data }) => {
    const container = useRef(null);

    useEffect(() => {
        const split = new SplitText(
            container.current.querySelectorAll('.text p'),
            { type: 'lines' }
        );

        split.lines.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: target,
                    markers: false,
                    scrub: 1,
                    start: '-30% center',
                    end: 'bottom center',
                },
            });
        });

        container.current.querySelector('.text').style.whiteSpace = 'nowrap';
    }, []);

    return (
        <Container ref={container}>
            <Wrapper>
                <PageWrapper>
                    <ScrollingWords>
                        <div className="text">
                            <p>{data.quote}</p>
                        </div>{' '}
                    </ScrollingWords>
                    <AuthorSection>
                        <Author>{data.author}</Author>
                        <Job>{data.job}</Job>
                    </AuthorSection>
                </PageWrapper>
            </Wrapper>
        </Container>
    );
};

export default Quote;
