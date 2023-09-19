import styled from 'styled-components';
import { device } from '~/config/utils';

const ContentWrapper = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
`;

const ContentText = styled.div`
	p {
		font-family: 'Mulish', sans-serif;
		font-weight: 400;
		font-size: 20px;

	}
	&.dropCap:first-letter {
		font-weight: 700;
		float: left;
		color: #0F9199;
		font-size: 90px;
		line-height: 0.8;
		padding: 5px 10px;
		background-color: transparent;
		border-radius: 10px;
		margin-bottom: -5px;
		margin-right: 10px;
		@media ${device.tablet} {
			font-size: 90px;
			padding: 5px;
			margin-bottom: -18px;
			margin-right: 10px;
			margin-left: -10px;
		}
	}
`;

const Content = ({ data, id }) => {
	return (
		<ContentWrapper data-pos={id}>
			<ContentText
				className={data.hasDropCap ? 'dropCap' : ' '}
				dangerouslySetInnerHTML={{ __html: data.content }}
			/>
		</ContentWrapper>
	);
};

export default Content;
