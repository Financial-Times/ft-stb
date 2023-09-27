import styled from 'styled-components';
import { device } from '~/config/utils';
import Link from 'next/link';

const Container = styled.div`
    text-align: center;
    padding: 50px 20px;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;

    @media ${device.tablet} {
    }

    .button {
        position: relative;
    }

    .active {
        cursor: pointer;
    }

    @keyframes loaderAnim {
        to {
            opacity: 1;
            transform: scale3d(0.5, 0.5, 1);
        }
    }

    a {
        text-decoration: underline;
        color: var(--color-link);
        outline: none;
    }

    a:hover,
    a:focus {
        color: var(--color-link-hover);
        outline: none;
        text-decoration: none;
    }

    .content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        align-items: center;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .cursor {
        display: none;
    }

    @media (any-pointer: fine) {
        .cursor {
            position: fixed;
            top: 0;
            left: 0;
            display: block;
            pointer-events: none;
        }
        .cursor__inner {
            fill: #f8d392;
            stroke: var(--cursor-stroke);
            stroke-width: var(--cursor-stroke-width);
        }
        .credits {
            padding-left: 25vw;
        }
    }

    .button {
        cursor: pointer;
        -moz-appearance: none;
        -webkit-appearance: none;
        border-width: var(--button-stroke-width);
        border-color: #ff6e3d;
        border-style: solid;
        color: var(--button-text);
        background: var(--button-bg);
        border-radius: var(--button-border-radius);
        min-width: 12rem;
        height: 5rem;
        padding: 0;
        margin: 1rem;
        font-family: inherit;
        font-size: 1.5rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.2s ease background-color 0.2s ease;
        &:hover {
            background-color: #ff6e3d;
            color: white;
            transition: background-color 0.2s ease;
        }
    }

    .button:focus,
    .button--hover {
        outline: none;
        border-width: var(--button-stroke-width-hover);
        border-color: var(--button-stroke-hover);
        color: white;
        background: #ff6e3d;
    }

    .button__text,
    .button__text-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 15px 30px;
        font-family: 'Inter', sans-serif;
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const Magnet = ({ data }) => {
    return (
        <Container>
            <div>Why is Singapore a leading hub for events?</div>

            <Link href={data.link}>
                <Wrapper>
                    <div className="content">
                        <button className="button">
                            <span className="button__text">
                                <span className="button__text-inner">
                                    Discover Singapore here
                                </span>
                            </span>
                        </button>
                    </div>
                </Wrapper>
            </Link>
        </Container>
    );
};

export default Magnet;
