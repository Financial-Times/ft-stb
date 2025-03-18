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

const EventsThree = () => {
    return (
        <Container>
            <PageWrapper>
                <h3>Discover the finer things in life at these upcoming tradeshows in Singapore in 2025:</h3>
                <ul>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/609101612;416980935;g;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            Singapore Yachting Festival
                        </a>{' '}
                        &ndash; 10 to 13 April
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/609101615;416980938;m;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            Vinexpo Asia
                        </a>{' '}
                        &ndash; 27 to 29 May
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/609101618;416980941;j;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            Singapore International Jewelry Expo
                        </a>{' '}
                        &ndash; 10 to 13 July
                    </li>
                    <li>
                        <a href="https://ad.doubleclick.net/ddm/clk/609101609;416980932;j;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755}">
                            International Luxury Travel Market (ILTM) Asia Pacific
                        </a>{' '}
                        &ndash; 30 June to 3 July
                    </li>
                </ul>
            </PageWrapper>
        </Container>
    );
};

export default EventsThree;
