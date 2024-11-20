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
                        <a href="https://ad.doubleclick.net/ddm/clk/595123522;403543932;c;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank">
                            Tech Week Singapore
                        </a>{' '}
                        &ndash; 9 to 10 October 2024
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/595123525;403543938;l;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank">
                            Singapore Week of Innovation &amp; Technology
                        </a>{' '}
                        (Switch) &ndash; 28 to 30 October 2024
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/595123528;403543944;l;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank">
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
