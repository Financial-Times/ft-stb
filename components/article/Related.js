import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { device } from '~/config/utils';
import RelatedItem from './RelatedItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.div`
	max-width: 1290px;
	margin: 50px auto 50px auto;
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	position: relative;
	padding: 5px;
	margin: 0 auto;
	@media ${device.tablet} {
		padding: 0 10px;
	}
`;

const Title = styled.div`
    text-transform: uppercase;
    max-width: 1220px;
    padding: 0 5px;
    margin: 0 auto;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.2;
    color: black;
    margin-bottom: 50px;
    text-align: center;
    @media ${device.tablet} {
        padding: 0 20px;
    }
`;

const RelatedSwiper = styled.div`
	@media ${device.tablet} {
		width: calc(100% - 200px);
		margin: 0 auto;
	}
`;

const SwiperPagination = styled.div`
	padding: 20px;

	.swiper-pagination-bullet {
		border-color: #f8f8f8;
		border: 1px solid;
	}
	.swiper-pagination-bullet-active {
		border: none;
		color: black;
		padding: 5px 30px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 16px;
		background-color: #ff6e3d;
	}

	.active {
	}
	@media ${device.tablet} {
		.swiper-wrapper {
			justify-content: center;
		}
	}
`;

const NavigationWrapper = styled.div`
	.swiper-button-next {
		top: 5%;
		width: initial;
		transform: rotate(180deg);
		&:after {
			content: '';
		}
	}

	.swiper-button-prev {
		top: 5%;

		width: initial;
		&:after {
			content: '';
		}
	}

	@media ${device.tablet} {
	}
`;

const Related = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Title>Related content</Title>
				{/* <NavigationWrapper>
					<div className="swiper-button-next">
						<SwiperNext />
					</div>
					<div className="swiper-button-prev">
						<SwiperPrev />
					</div>
				</NavigationWrapper> */}
				<RelatedSwiper>
					{/*data.map((slide, i) => (
						<SwiperSlide key={i}>
							<RelatedItem data={slide} />
						</SwiperSlide>
					))*/}

					<Swiper
						spaceBetween={10}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
						}}
						breakpoints={{
							1083: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							767: {
								slidesPerView: 1,
								spaceBetween: 20,
							},

							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
						}}
					>
						{data.map((slide, i) => (
							<SwiperSlide key={i}>
								<RelatedItem data={slide} />
							</SwiperSlide>
						))}
					</Swiper>
				</RelatedSwiper>
				<SwiperPagination>
					<div className="swiper-pagination"></div>
				</SwiperPagination>
			</Wrapper>
		</Container>
	);
};

export default Related;
