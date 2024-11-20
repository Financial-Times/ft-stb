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
                <h3>Look out for these upcoming tech events in Singapore:</h3>
                <ul>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/601157766;409013234;a;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank">
                            HealthTechX Asia
                        </a>{' '}
                        &ndash; 21 to 22 May 2025
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/601157769;409013237;g;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank">
                            LSI Asia ’25
                        </a>{' '}
                        (Switch) &ndash; 10 to 13 June 2025
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/601157772;409013240;u;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}" target="_blank">
                            Asia Bio Partnering Forum
                        </a>{' '}
                        &ndash; 9 to 10 September 2025
                    </li>
                </ul>
            </PageWrapper>
        </Container>
    );
};

export default EventsTwo;
