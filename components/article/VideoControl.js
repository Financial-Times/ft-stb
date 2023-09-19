import styled from 'styled-components';
import { device } from '~/config/utils';
import Play from '~/assets/video/play.svg';
import Pause from '~/assets/video/pause.svg';
import Rewind from '~/assets/video/rewind.svg';
import Sound from '~/assets/video/sound.svg';
import Mute from '~/assets/video/mute.svg';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    @media ${device.tablet} {
    }
    button {
        padding: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        svg {
            max-width: 50px;
            max-height: 50px;

            path {
                fill: white;
            }
        }
    }
`;

const Wrapper = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    position: relative;
    padding: 10px;
    display: flex;
    @media ${device.tablet} {
    }
`;

const Duration = styled.div`
    color: white;
    font-family: interstate, sans-serif;
    font-weight: 200;
    font-size: 16px;
    line-height: 1.2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 25px;
    left: 20px;
    padding: 10px 0;

    @media ${device.tablet} {
        max-width: 33.33%;
        flex-basis: 33.33%;
        bottom: 20px;
    }
`;

const ButtonContainer = styled.div`
    @media ${device.tablet} {
    }

    svg {
        position: relative;
    }
`;

const RewindButton = styled.button`
    @media ${device.tablet} {
    }
`;

const MuteButton = styled.button`
    svg {
        width: 30px;
        max-height: 30px;

        path {
            fill: white;
        }
    }

    &[data-mute='true'] {
        #Line_1 {
            animation: pulse 1s infinite;
            animation-delay: 0.15s;
        }
        #Line_2 {
            animation: pulse 1s infinite;
            animation-delay: 0.3s;
        }
        #Line_3 {
            animation: pulse 1s infinite;
            animation-delay: 0.45s;
        }
        #Line_4 {
            animation: pulse 1s infinite;
            animation-delay: 0.65s;
        }
    }

    @keyframes pulse {
        0% {
            transform: scaleY(1);
            transform-origin: 50% 50%;
            fill: white;
        }
        50% {
            transform: scaleY(0.7);
            transform-origin: 50% 50%;

            fill: white;
        }
        100% {
            transform: scaleY(1);
            transform-origin: 50% 50%;
            fill: white;
        }
    }
    @media ${device.tablet} {
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: absolute;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    @media ${device.tablet} {
        max-width: 33.33%;
        flex-basis: 33.33%;
    }
`;

const Blank = styled.div`
    @media ${device.tablet} {
        max-width: 33.33%;
        flex-basis: 33.33%;
    }
`;

const ToggleButton = styled.div`
    display: grid;
    @media ${device.tablet} {
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 19px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 15px;
        width: 15px;
        left: 2px;
        bottom: 2px;
        background-color: black;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #ffffff;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #ffffff;
    }

    input:checked + .slider:before {
        transform: translateX(16px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

const ProgressBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    background: white;
    @media ${device.tablet} {
    }
`;

const ProgressActive = styled.div`
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 10px;
    background-color: #0c305c;
    transition: width 0.1s ease;
    @media ${device.tablet} {
    }
`;

const VideoControl = ({
    progress,
    duration,
    setIsPlaying,
    isPlaying,
    rewind,
    setMuted,
    muted,
    percentage,
}) => {
    return (
        <Container>
            <ProgressBar>
                <ProgressActive style={{ width: `${percentage}%` }} />
            </ProgressBar>
            <Wrapper>
                <Duration>
                    {progress} / {duration}
                </Duration>
                <Buttons>
                    <RewindButton onClick={rewind}>
                        <Rewind>Rewind</Rewind>
                    </RewindButton>
                    <ButtonContainer className="play">
                        {isPlaying ? (
                            <button
                                type="button"
                                className="pause"
                                onClick={() => setIsPlaying(false)}
                                aria-label="Pause"
                            >
                                <Pause />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="play"
                                onClick={() => setIsPlaying(true)}
                                aria-label="Play"
                            >
                                <Play />
                            </button>
                        )}
                    </ButtonContainer>
                    <ButtonContainer className="play">
                        {muted ? (
                            <button
                                type="button"
                                className="unmute"
                                onClick={() => setMuted(false)}
                                aria-label="unmute"
                            >
                                <Sound />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="mute"
                                onClick={() => setMuted(true)}
                                aria-label="mute"
                            >
                                <Mute />
                            </button>
                        )}
                    </ButtonContainer>
                </Buttons>
            </Wrapper>
        </Container>
    );
};

export default VideoControl;
