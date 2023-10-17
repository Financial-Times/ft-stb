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
    opacity: 0;
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
    transform: translateY(-150px);
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
        flex-direction: row;
        gap: 32px;
        transform: translateY(-150px);
    }
`;

const HubHero = styled.div`
    position: relative;
    aspect-ratio: 1;

    img {
        object-fit: cover;
        object-position: center center;
    }
    @media ${device.tablet} {
        aspect-ratio: 2;
    }
`;

const HubHeroTitle = styled.div`
    position: absolute;
    max-width: 800px;
    width: 100%;
    top: 30%;
    right: 50%;
    transform: translateX(50%);
    z-index: 3;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    padding: 0 20px;
    @media ${device.tablet} {
        font-size: 54px;
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
                        Conversations of our time: Singapore&apos;s place in defining the zeitgeist
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
                {/* <Pixel src="https://collector.brandmetrics.com/Info?pixel=59bce001375b4b4098bafa219d383803" />
                <Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
                <div id="brandmetrics-survey" className="brandmetrics-survey">
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `             window._brandmetrics = window._brandmetrics || [];
                    setTimeout(function() {
                      window._brandmetrics.push({cmd: "_forcesurvey", val: {mid:"59bce001375b4b4098bafa219d383803", style:
                      "ft_flyin_default"}});
                    }, 10000);`,
                        }}
                    ></script>
                </div> */}
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
