import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import moment from 'moment/moment';
import VideoControl from './VideoControl';

gsap.registerPlugin(ScrollTrigger);

const VideoContainer = styled.div`
    overflow: hidden;
    position: relative;
    @media ${device.laptop} {
    }
`;

const VideoWrapper = styled.div`
    max-width: 2560px;
    padding: 0 20px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 0.7;
    @media ${device.tablet} {
        aspect-ratio: 2;
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        &::-webkit-media-controls-overlay-play-button {
            display: none;
        }
    }
`;

const VideoEl = ({ data }) => {
    const videoRef = useRef('');
    const container = useRef('');
    const intervalRef = useRef();

    const [progress, setProgress] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [finalArr, setFinalArr] = useState([]);
    const [muted, setMuted] = useState(true);

    const [duration, setDuration] = useState(0);
    const [finalDuration, setFinalDuration] = useState(0);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: '-20% center',
                end: 'bottom center',
                scrub: false,
                markers: false,
                onEnter: () => {
                    videoRef.current.play();
                },
                onLeave: () => {
                    videoRef.current.pause();
                },
                onEnterBack: () => {
                    videoRef.current.play();
                },
                onLeaveBack: () => {
                    videoRef.current.pause();
                },
            },
        });

        return () => {
            tl.kill();
        };
    }, []);

    function inRange(x, min, max) {
        return (x - min) * (x - max) <= 0;
    }

    const ranges = [
        {
            value: 1,
            min: 0.5,
            max: 1.5,
        },
        {
            value: 25,
            min: 24,
            max: 25.5,
        },
        {
            value: 50,
            min: 49,
            max: 50.5,
        },
        {
            value: 75,
            min: 74,
            max: 75.5,
        },
    ];

    const loadedMetaData = (e) => {
        videoRef.current && setDuration(videoRef.current.duration);
        setFinalDuration(renderTime(videoRef.current.duration));
    };

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        videoRef.current.currentTime = 0;

        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            setFinalDuration(renderTime(videoRef.current.duration));

            videoRef.current.addEventListener('loadedmetadata', loadedMetaData);

            videoRef.current.addEventListener('play', playingVideo);
            videoRef.current.addEventListener('pause', pausingVideo);
        }
        return () => {
            videoRef.current?.removeEventListener(
                'loadedmetadata',
                loadedMetaData
            );

            videoRef.current?.removeEventListener('play', playingVideo);
            videoRef.current?.removeEventListener('pause', pausingVideo);
        };
    }, [videoRef.current]);

    useEffect(() => {
        const currentTime = Math.round((progress / duration) * 100);
        setPercentage(currentTime);
        ranges.map((item) => {
            if (inRange(currentTime, item.min, item.max)) {
                if (!finalArr.includes(item.value)) {
                    setFinalArr([...finalArr, item.value]);
                    dataLayer.push({
                        event: 'Playing',
                        mediaTitle:
                            document.title +
                            ' - ' +
                            videoRef.current.dataset.name,
                        mediaType: 'Video',
                        mediaProgress: `${item.value}%`,
                    });
                }
            }
        });
    }, [progress]);

    function renderTime(sec) {
        return moment.utc(sec * 1000).format('m:ss');
    }

    function rewindVideo() {
        videoRef.current.currentTime = 0;
    }

    let playingVideo = (e) => {
        setIsPlaying(true);
        dataLayer.push({
            event: 'Play',
            mediaTitle: document.title + ' - ' + videoRef.current.dataset.name,
            mediaState: 'play',
            mediaType: 'Video',
        });
        startTimer();
    };

    let pausingVideo = (e) => {
        if (videoRef.current && videoRef.current.readyState === 4) {
            dataLayer.push({
                event: 'Pause',
                mediaTitle:
                    document.title + ' - ' + videoRef.current.dataset.name,
                mediaState: 'pause',
                mediaType: 'Video',
            });
        }
    };

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (videoRef.current?.ended) {
                setFinalArr([]);
                setIsPlaying(false);

                dataLayer.push({
                    event: 'Playing',
                    mediaTitle:
                        document.title + ' - ' + videoRef.current.dataset.name,
                    mediaType: 'Video',
                    mediaProgress: `100%`,
                });

                videoRef.current.currentTime = 0;
            } else {
                setProgress(videoRef.current?.currentTime);
            }
        }, [800]);
    };

    return (
        <VideoContainer ref={container}>
            <VideoWrapper className="wrapper">
                <video
                    ref={videoRef}
                    data-name={data.title}
                    key={data.title}
                    playsInline
                    muted={muted}
                    autoPlay
                    preload="metadata"
                >
                    <source src={data.webm} type="video/webm" />
                    <source src={data.mp4} type="video/mp4" />
                </video>
                <VideoControl
                    progress={renderTime(progress)}
                    duration={finalDuration}
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    rewind={rewindVideo}
                    setMuted={setMuted}
                    muted={muted}
                    percentage={percentage}
                />
            </VideoWrapper>
        </VideoContainer>
    );
};

export default VideoEl;
