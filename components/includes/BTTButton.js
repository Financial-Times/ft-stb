import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    display: flex;
    justify-content: 🇨enter;
    align-items: center;
    position: relative;
    padding: 120px 0 78px 0;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: -50px;
    background-color: white;
    border: 1px solid black;
`;

const BttImg = styled.img`
    width: 70px;
    transform: rotate(180deg);
`;
const Wrapper = styled.button`
    display: inline-flex;
    position: relative;
    margin: 0 auto;
    background-color: #dbef89;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 170px;
    height: 170px;
    border-radius: 100%;

    &:hover {
        svg {
            transform: translate(50%, -100%);
            transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
    }

    svg {
        position: absolute;
        right: 50%;
        top: 20px;
        transform: translate(50%, 0%);
        transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
`;

const Content = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 28px;
    position: absolute;
    color: black;
    width: 150%;
    text-transform: uppercase;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    @media ${device.tablet} {
    }
`;

const Arrow = styled.div`
    @media ${device.tablet} {
    }
`;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

const BTTButton = () => {
    return (
        <Container>
            <Wrapper onClick={scrollToTop}>
                <svg
                    width="24"
                    height="38"
                    viewBox="0 0 24 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.80761 11.0711 0.80761 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 38L13.5 2L10.5 2L10.5 38L13.5 38Z"
                        fill="black"
                    />
                </svg>
                <Content>Take me back up</Content>
            </Wrapper>
        </Container>
    );
};

export default BTTButton;
