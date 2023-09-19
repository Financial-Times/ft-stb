import styled from 'styled-components';
import { device } from '~/config/utils';
import PageWrapper from '../includes/PageWrapper';

const Container = styled.div``;

const Text = styled.div``;

const Content = ({ data, id }) => {
    return (
        <Container data-pos={id}>
            <PageWrapper>
                <Text dangerouslySetInnerHTML={{ __html: data.content }} />
            </PageWrapper>
        </Container>
    );
};

export default Content;
