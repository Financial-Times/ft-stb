import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef, useState } from 'react';
import { device } from '~/config/utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import OneMobile from '~/components/animation/data/mobileOne.json';
import OneDesktop from '~/components/animation/data/desktopOne.json';

import TwoMobile from '~/components/animation/data/mobileTwo.json';
import TwoDesktop from '~/components/animation/data/desktopTwo.json';

import ThreeMobile from '~/components/animation/data/mobileThree.json';
import ThreeDesktop from '~/components/animation/data/desktopThree.json';

const Container = styled.div`
    margin: 48px 0;
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const LottiePlayer = ({ data }) => {
    const player = useRef();
    const container = useRef();
    const hasPlayed = useRef(false); // Tracks if animation has already played

    const [current, setCurrent] = useState({
        mobile: '',
        desktop: '',
    });

    const [loadState, setLoadstate] = useState(false);

    const [isMobile, setIsMobile] = useState(true);

    let mm = gsap.matchMedia();

    useEffect(() => {
        setLottie(data);
        mm.add('(min-width: 767px)', () => {
            setIsMobile(false);
        });
    }, [data]);

    useEffect(() => {
        if (loadState) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center',
                    markers: false,
                    onEnter: () => {
                        if (!hasPlayed.current) {
                            player.current?.play(); // Play only if it hasn't played before
                        }
                    },
                },
            });
        }
    }, [loadState]);

    const handleComplete = () => {
        const animationData = isMobile ? current.mobile : current.desktop; // Get the active animation data
        const totalFrames = animationData.op; // 'op' property gives the total number of frames
        const frameToStop = totalFrames - 2; // Stop just before the last frame
        player.current?.goToAndStop(frameToStop, true); // Pause at the calculated frame
        hasPlayed.current = true; // Mark as played
    };

    const setLottie = (data) => {
        switch (data) {
            case 1:
                setCurrent({
                    mobile: OneMobile,
                    desktop: OneDesktop,
                });
                break;
            case 2:
                setCurrent({
                    mobile: TwoMobile,
                    desktop: TwoDesktop,
                });
                break;
            case 3:
                setCurrent({
                    mobile: ThreeMobile,
                    desktop: ThreeDesktop,
                });
                break;
            default:
                setCurrent({
                    mobile: '',
                    desktop: '',
                });
                break;
        }
    };

    return (
        <Container ref={container}>
            <Wrapper>
                <Player
                    onEvent={(event) => {
                        if (event === 'load') {
                            setLoadstate(true);
                        } else if (event === 'complete') {
                            handleComplete();
                        }
                    }}
                    ref={player}
                    autoplay={false}
                    loop={false}
                    controls={false}
                    src={isMobile ? current.mobile : current.desktop}
                ></Player>
            </Wrapper>
        </Container>
    );
};

export default LottiePlayer;
