import styled from 'styled-components';
import { device } from '~/config/utils';
import Fb from '~/assets/fb.svg';
import Li from '~/assets/li.svg';
import Tw from '~/assets/tw.svg';
import Yt from '~/assets/yt.svg';

const Container = styled.div`
	&[data-bg='true'] {
		background-color: #fff5d9;
	}
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	padding: 50px 15px;

	@media ${device.tablet} {
		padding: 86px 15px;
	}
`;

const Title = styled.div`
	font-family: 'Playfair Display', serif;
	color: #2b2b2b;
	font-weight: 700;
	text-align: center;
	font-size: 22px;
	margin-bottom: 25px;

	@media ${device.tablet} {
		font-size: 40px;
		margin-bottom: 47px;
	}
`;

const IconContainer = styled.div`
	display: grid;
	place-content: center;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(4, 83px);
	max-width: 450px;
	margin: 0 auto;
	column-gap: 10px;

	@media ${device.tablet} {
		grid-template-columns: repeat(4, 83px);
		column-gap: 50px;
		row-gap: 0;
	}
`;

const IconLink = styled.a`
	@media ${device.tablet} {
	}
`;

const Icon = styled.div`
	background-color: #c75523;
	height: 60px;
	width: 60px;
	display: grid;
	place-items: center;
	border-radius: 100%;
	border: 1px solid #c75523;
	transition: background-color 0.5s ease-in;

	svg {
		transform: scale(0.7);

		path {
			transition: all 0.5s ease-in;
		}
	}
	@media ${device.tablet} {
		height: 83px;
		width: 83px;

		svg {
			transform: scale(1);
		}
	}

	&:hover {
		background-color: white;
		border-color: #c75523;
		transition: all 0.5s ease-in;
		path {
			fill: #c75523;
			transition: all 0.5s ease-in;
		}
	}
`;

const links = [
	{
		comp: <Tw />,
		link: 'https://www.twitter.com/qualcomm',
	},
	{
		comp: <Fb />,
		link: 'https://www.instagram.com/qualcomm',
	},
	{
		comp: <Li />,
		link: 'https://www.linkedin.com/company/qualcomm',
	},
	{
		comp: <Yt />,
		link: 'https://www.youtube.com/qualcomm',
	},
];

const Connect = ({ bg }) => {
	return (
		<Container data-bg={bg}>
			<Wrapper>
				<Title>Connect with us</Title>

				<IconContainer>
					{links.map((item, i) => {
						return (
							<IconLink href={item.link} key={i}>
								<Icon>{item.comp}</Icon>
							</IconLink>
						);
					})}
				</IconContainer>
			</Wrapper>
		</Container>
	);
};

export default Connect;
