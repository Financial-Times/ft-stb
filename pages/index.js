import { useEffect, useContext, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/includes/Metadata';
import { ARTICLE_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';

import { AppContext } from './_app';
import ArticleCard from '~/components/article/ArticleCard';
import Image from 'next/image';

const Container = styled.div`
    background-color: #fef6e9;
`;

const Pixel = styled.img`
	position: absolute;
	@media ${device.tablet} {
	}
`;

const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1220px;
    padding: 0 20px;
    margin: 0 auto;
    padding: 0 20px;
    transform: translateY(-100px);
    justify-content: center;
    align-items: center;
    @media ${device.tablet} {
        flex-direction: row;
        gap: 32px;
        transform: translateY(-150px);
        flex-wrap: wrap;
    }
`;

const HubHero = styled.div`
    position: relative;
    aspect-ratio: 1;
    img {
        object-fit: cover;
        object-position: center center;
        mask-image: linear-gradient(#fef6e9, transparent);
        -webkit-mask-image: linear-gradient(#fef6e9, transparent);
    }
    @media ${device.tablet} {
        aspect-ratio: 1.3;
    }
    @media ${device.laptop} {
        aspect-ratio: 2;
    }
`;

const HubHeroTitle = styled.div`
    position: absolute;
    width: 100%;
    top: 10%;
    right: 50%;
    transform: translateX(50%);
    z-index: 3;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    line-height: 1.2;
    padding: 0 20px;
    h1 {
        font-size: 26px;
        font-weight: 500;
        max-width: 1100px;
        margin: 0 auto;
        br {
            display: none;
        }
    }
    h3 {
        font-size: 16px;
        font-weight: 400;
        max-width: 900px;
        margin: 0 auto;
        padding-top: 20px;
    }
    @media ${device.tablet} {
        top: 15%;
        h1 {
            font-size: 54px;
            br {
                display: block;
            }
        }
        h3 {
            font-size: 24px;
            padding-top: 40px;
        }
    }
    @media ${device.laptop} {
        top: 20%;
    }
`;

const metaData = {
    title: "Conversations of our time: Singapore's place in defining the zeitgeist",
    desc: 'Singapore has firmly established itself as a fulcrum in world trade and innovation. This series showcases the city’s thriving calendar of trade conferences and exhibitions across sectors including financial services and agrifood.',
    contentType: 'hub',
    publicationDate: '2023-10-13',
    campaignName: 'STB',
    advertiserName: 'STB',
    primaryIndustryAdvertiser: 'Tourist Boards',
    contentAuthor: 'External',
    brandedContent: true,
    contentStyle: 'Thought_leadership',
    primaryTopic: 'Economy',
    secondaryTopic: 'Asia-pacific_economy',
    adbookId: 444226,
    hasVideo: false,
    videoStyle: null,
    type: 'Immersive_article',
    wordCount: 1006,
    commercialProduct: 'ft',
    productType: 'ft',
    pageDesignType: 'bespoke',
    articleImage: 'https://ft.com/partnercontent/stb/images/hubHero.jpg',
    articleUrl: 'https://stb.ft.com/article/singapore-shaping-future-finance',
};

export default function Home({ data }) {
    const { cookieConsent } = useContext(AppContext);

    useEffect(() => {
        FtEvents();
        FtAnalytics();
    }, []);

    useEffect(() => {
        if (cookieConsent) {
            window.permutive.addon('web', {
                page: {
                    type: 'Partner Content Hub',
                },
            });
        }
    }, [cookieConsent]);

    return (
        <>
            <Head>
                <title>
                Conversations of our time: Singapore&apos;s place in defining the zeitgeist - Financial Times - Partner Content by SINGAPORE
                    TOURISM BOARD
                </title>
                <Metadata title={true} data={metaData} />
            </Head>
            <Container>
                <main>
                    <HubHero>
                        <HubHeroTitle>
                            <h1>Conversations of our time:<br/> Singapore&apos;s place in defining the zeitgeist</h1>
                            <h3>Singapore has firmly established itself as a fulcrum in world trade and innovation. This series showcases the city’s thriving calendar of trade conferences and exhibitions across sectors including financial services and agrifood.</h3>
                        </HubHeroTitle>
                        <Image
                            src={metaData.articleImage}
                            layout="fill"
                            alt="hub hero image"
                        />
                    </HubHero>
                    <ArticleContainer>
                        {data.map((item, i) => {
                            return <ArticleCard key={i} data={item} />;
                        })}
                    </ArticleContainer>
                </main>
                <Pixel src="https://collector.brandmetrics.com/Info?pixel=2e7f61900eab46a7b37b9d210003fda0" />
            </Container>
        </>
    );
}
export async function getStaticProps(context) {
    const res = await fetch(ARTICLE_URL);

    const data = await res.json();
    return {
        props: { data },
    };
}
