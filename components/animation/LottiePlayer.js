import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef, useState } from 'react';
import { device } from '~/config/utils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import OneMobile from '~/components/animation/data/mobileOne.json';

import OneDesktop from '~/components/animation/data/desktopOne.json';

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
    }, []);

    useEffect(() => {
        if (loadState) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top center',
                    end: 'bottom center',
                    markers: false,
                    scrub: true,
                    markers: false,
                    onEnter: () => {
                        player.current?.play();
                    },
                    onEnterBack: () => {
                        player.current?.play();
                    },
                    onLeave: () => {
                        player.current?.pause();
                    },
                    onLeaveBack: () => {
                        player.current?.pause();
                    },
                },
            });
        }
    }, [loadState]);

    function setLottie(data) {
        switch (data) {
            case 1:
                setCurrent({
                    mobile: OneMobile,
                    desktop: OneDesktop,
                });
                break;
            default:
                setCurrent({
                    mobile: '',
                    desktop: '',
                });
                break;
        }
    }

    return (
        <Container ref={container}>
            <Wrapper>
                <Player
                    onEvent={(event) => {
                        if (event === 'load') {
                            setLoadstate(true);
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
