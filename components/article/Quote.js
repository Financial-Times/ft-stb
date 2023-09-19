import styled from 'styled-components';
import { device } from '~/config/utils';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/src/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Container = styled.div`
    font-family: 'Inter', sans-serif;
    background-color: rgb(248 211 146 / 20%);

    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    @media ${device.tablet} {
    }
`;

const Word = styled.div`
    margin-right: 5px;
    font-weight: 500;
    color: #d9d9d9;
    @media ${device.tablet} {
        font-size: 30px;
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
        margin-left: 50px;
        line-height: 1.2;
        font-size: 50px;
    }

    @media ${device.tablet} {
        padding: 96px 20px;
    }
`;

const Quote = ({ data }) => {
    const container = useRef(null);

    useEffect(() => {
        const split = new SplitText('p', { type: 'lines' });

        split.lines.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: target,
                    markers: true,
                    scrub: 1,
                    start: 'top center',
                    end: 'bottom center',
                },
            });
        });
    }, []);

    return (
        <Container ref={container}>
            <Wrapper>
                <ScrollingWords>
                    <div className="text">
                        <p>{data}</p>
                    </div>
                </ScrollingWords>
            </Wrapper>
        </Container>
    );
};

export default Quote;
