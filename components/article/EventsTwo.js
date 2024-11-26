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

const EventsTwo = () => {
    return (
        <Container>
            <PageWrapper>
                <h3>Look out for these upcoming healthcare events in Singapore in 2025:</h3>
                <ul>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/601157766;409013234;a;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            HealthTechX Asia
                        </a>{' '}
                        &ndash; 21 to 22 May
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/601157769;409013237;g;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            LSI Asia
                        </a>{' '}
                        &ndash; 10 to 13 June
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/601157772;409013240;u;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            Asia Bio Partnering Forum
                        </a>{' '}
                        &ndash; 9 to 10 September
                    </li>
                </ul>
            </PageWrapper>
        </Container>
    );
};

export default EventsTwo;
