import styled from 'styled-components';
import { device } from '~/config/utils';
import PageWrapper from '../includes/PageWrapper';

const Container = styled.div`
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const Events = () => {
    return (
        <Container>
            <PageWrapper>
                <h3>Look out for these upcoming tech events in Singapore:</h3>
                <ul>
                    <li>
                        <a href="https://www.singaporetechnologyweek.com/">
                            Tech Week Singapore
                        </a>{' '}
                        &ndash; 9 to 10 October 2024
                    </li>
                    <li>
                        <a href="https://www.switchsg.org/">
                            Singapore Week of Innovation &amp; Technology
                        </a>{' '}
                        (Switch) &ndash; 28 to 30 October 2024
                    </li>
                    <li>
                        <a href="https://asiatechxsg.com/">
                            Asia Tech x Singapore
                        </a>{' '}
                        &ndash; 27 to 29 May 2025
                    </li>
                </ul>
            </PageWrapper>
        </Container>
    );
};

export default Events;
