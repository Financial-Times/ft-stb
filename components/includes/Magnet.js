import styled from 'styled-components';
import { device } from '~/config/utils';
import Cursor from './cursor/cursor';
import ButtonCtrl from './cursor/buttonCtrl';
import { useEffect } from 'react';

const Container = styled.div`
    @media ${device.tablet} {
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    :root {
        font-size: 12px;
    }

    body {
        margin: 0;
        --color-text: #111;
        --color-bg: #e5e3df;
        --color-link: #000;
        --color-link-hover: #000;
        color: var(--color-text);
        background-color: var(--color-bg);
        font-family: tenon, -apple-system, BlinkMacSystemFont, Segoe UI,
            Helvetica, Arial, sans-serif;
    }

    .button {
        position: relative;
    }

    .active {
        cursor: pointer;
    }

    /* Fade effect */
    .js body {
        opacity: 0;
        transition: opacity 0.3s;
    }

    .js body.render {
        opacity: 1;
    }

    /* Page Loader */
    .js .loading::before,
    .js .loading::after {
        content: '';
        position: fixed;
        z-index: 1000;
    }

    .js .loading::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-bg);
    }

    .js .loading::after {
        top: 50%;
        left: 50%;
        width: 60px;
        height: 60px;
        margin: -30px 0 0 -30px;
        border-radius: 50%;
        opacity: 0.4;
        background: var(--color-link);
        animation: loaderAnim 0.7s linear infinite alternate forwards;
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

    main {
        background-color: inherit;
        display: grid;
        height: 100vh;
        width: 100%;
        padding: 3rem;
        align-content: space-between;
        grid-column-gap: 5vw;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        grid-template-areas:
            'header'
            'content'
            'demos';
    }

    .header {
        grid-area: header;
        display: flex;
        flex-wrap: wrap;
        text-transform: uppercase;
    }

    .header__title {
        font-size: 1rem;
        margin: 0 7vw 1rem 0;
        font-weight: normal;
        text-transform: uppercase;
    }

    .header__links a:not(:last-child) {
        margin-right: 1rem;
    }

    .demos {
        grid-area: demos;
        justify-self: center;
        position: relative;
        text-align: center;
        display: flex;
    }

    .demo {
        display: block;
        width: 14px;
        height: 14px;
        margin: 0 4px;
        border-radius: 50%;
        border: 2px solid var(--color-link);
        background: var(--color-link);
    }

    .demo--current {
        border-color: var(--color-link-hover);
        background: none;
        pointer-events: none;
    }

    .demo:hover,
    .demo:focus {
        opacity: 0.5;
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
            fill: var(--cursor-fill);
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
        border-color: var(--button-stroke);
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
        transition: border-color 0.2s ease;
    }

    .button:focus,
    .button--hover {
        outline: none;
        border-width: var(--button-stroke-width-hover);
        border-color: var(--button-stroke-hover);
        color: var(--button-text-hover);
        background: var(--button-bg-hover);
    }

    .button__text,
    .button__text-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 15px 30px;
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const Magnet = ({ data }) => {
    useEffect(() => {
        const cursor = new Cursor(document.querySelector('.cursor'));
        const button = new ButtonCtrl(document.querySelector('.button'));

        button.on('enter', () => cursor.enter());
        button.on('leave', () => cursor.leave());
    }, []);

    return (
        <Container>
            <div>Why is Singapore a leading hub for events?</div>

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
            <svg className="cursor" width="25" height="25" viewBox="0 0 25 25">
                <circle
                    className="cursor__inner"
                    cx="12.5"
                    cy="12.5"
                    r="6.25"
                />
            </svg>
        </Container>
    );
};

export default Magnet;
