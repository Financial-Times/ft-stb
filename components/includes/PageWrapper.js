import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding: 0 20px;
    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    @media ${device.tablet} {
    }
`;

const PageWrapper = ({ children }) => {
    return <Container>{children}</Container>;
};

export default PageWrapper;
