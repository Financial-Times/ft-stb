import { useEffect, useContext, useState, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import styled from 'styled-components';

import Metadata from '~/components/includes/Metadata';
import { ARTICLE_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';

import { AppContext } from './_app';
import AnimationOne from '~/components/animation/AnimationOne';
import Quote from '../components/article/Quote';

const Container = styled.div``;

const Pixel = styled.img`
    position: absolute;
    opacity: 0;
    @media ${device.tablet} {
    }
`;

const metaData = {
    title: 'Determined, not deterred',
    desc: 'Companies can cut costs and drive growth at the same time. Despite a backdrop of macro uncertainty, leading organisations are doubling down on their digital transformation efforts in order to prioritise both goals.',
    contentType: 'article',
    publicationDate: '2023-08-29',
    campaignName: 'ServiceNow',
    advertiserName: 'ServiceNow',
    primaryIndustryAdvertiser: 'Technology',
    contentAuthor: 'Alpha_Grid',
    brandedContent: true,
    contentStyle: 'Research',
    primaryTopic: 'Companies',
    secondaryTopic: 'Corporate_governance',
    adbookId: 433103,
    hasVideo: false,
    videoStyle: null,
    wordCount: 50,
    commercialProduct: 'ft',
    type: 'Immersive_article',
    productType: 'ft',
    pageDesignType: 'bespoke',
    articleImage: 'https://ft.com/partnercontent/servicenow/images/A2.jpg',
    articleUrl: 'https://servicenow.ft.com/article/doing-well-by-doing-good',
};

export default function Home({ data }) {
    const { cookieConsent } = useContext(AppContext);
    const cardRef = useRef(null);

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
                    Determined, not deterred - Financial Times - Partner Content
                    by ServiceNow
                </title>
                <Metadata title={true} data={metaData} />
            </Head>
            <Container>
                <main>
                    <AnimationOne />
                    <Quote
                        data={
                            'Singapore has a clear framework on food regulations, a strong network of food ingredient players with local operations, and a pool of R&D talent that make it an attractive place for food and beverage innovations'
                        }
                    />
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
