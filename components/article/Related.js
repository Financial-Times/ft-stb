import styled from 'styled-components';
import { device } from '~/config/utils';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import RelatedItem from './RelatedItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.div`
    position: relative;
    z-index: 5;
    padding: 50px 0 0 0;

    @media ${device.tablet} {
    }
`;

const Wrapper = styled.div`
    position: relative;
    padding: 0 10px;
    @media ${device.tablet} {
        padding: 0;
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

const SwiperWrapper = styled.div`
    max-width: 1450px;
    margin: 0 auto;
    padding: 0 20px;
    @media ${device.tablet} {
        .swiper-wrapper {
            align-items: center;
            justify-content: center;
        }
    }
`;

const RelatedSwiper = styled.div`
    @media ${device.tablet} {
    }
`;

const SwiperPagination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .swiper-pagination-bullets {
        bottom: -5%;
    }
    .button-next {
        cursor: pointer;
        &[aria-disabled='true'] {
            opacity: 0.5;
        }

        top: initial;
        bottom: -5%;
        svg {
            transform: rotate(180deg);
        }
    }
    .button-prev {
        cursor: pointer;
        &[aria-disabled='true'] {
            opacity: 0.5;
        }
        top: initial;
        bottom: -5%;
    }

    .swiper-pagination-bullet {
        &.swiper-pagination-bullet-active {
            background-color: #0f9199;
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
                <RelatedSwiper>
                    <SwiperWrapper>
                        <Swiper
                            spaceBetween={10}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.button-next',
                                prevEl: '.button-prev',
                            }}
                            breakpoints={{
                                1023: {
                                    slidesPerView: 3,
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
                    </SwiperWrapper>
                    <SwiperPagination>
                        <div className="button-prev">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="72"
                                height="72"
                                viewBox="0 0 72 72"
                            >
                                <g
                                    id="btn_b2t_80x80px_on_hover"
                                    data-name="btn_b2t 80x80px on_hover"
                                    transform="translate(-0.017 72.017) rotate(-90)"
                                >
                                    <circle
                                        id="Ellipse_33"
                                        data-name="Ellipse 33"
                                        cx="36"
                                        cy="36"
                                        r="36"
                                        transform="translate(0.017 0.017)"
                                        fill="#0F9199"
                                    />
                                    <path
                                        id="Path_542"
                                        data-name="Path 542"
                                        d="M0,13.473l2.369,2.369L11.847,6.3V33.714H15.3V6.228l9.411,9.546,2.3-2.3L13.54,0Z"
                                        transform="translate(22.51 18.06)"
                                        fill="#fff"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="button-next">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="72"
                                height="72"
                                viewBox="0 0 72 72"
                            >
                                <g
                                    id="btn_b2t_80x80px_on_hover"
                                    data-name="btn_b2t 80x80px on_hover"
                                    transform="translate(-0.017 72.017) rotate(-90)"
                                >
                                    <circle
                                        id="Ellipse_33"
                                        data-name="Ellipse 33"
                                        cx="36"
                                        cy="36"
                                        r="36"
                                        transform="translate(0.017 0.017)"
                                        fill="#0F9199"
                                    />
                                    <path
                                        id="Path_542"
                                        data-name="Path 542"
                                        d="M0,13.473l2.369,2.369L11.847,6.3V33.714H15.3V6.228l9.411,9.546,2.3-2.3L13.54,0Z"
                                        transform="translate(22.51 18.06)"
                                        fill="#fff"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="swiper-pagination"></div>
                    </SwiperPagination>
                </RelatedSwiper>
            </Wrapper>
        </Container>
    );
};

export default Related;
