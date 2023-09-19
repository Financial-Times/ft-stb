import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import { ARTICLE_URL, device } from '~/config/utils';
import { AppContext } from '../_app';

// Components
import Content from '~/components/article/Content';
import Metadata from '~/components/includes/Metadata';
import Related from '~/components/article/Related';
import Quote from '~/components/article/Quote';
import Hero from '~/components/article/Hero';
import Script from 'next/script';
import AnimationOne from '~/components/animation/AnimationOne';

const Wrapper = styled.div`
    @media ${device.tablet} {
    }

    .main {
        position: relative;
        overflow-x: hidden;
    }
`;

const Pixel = styled.img`
    position: absolute;
`;

const ArticleContainer = styled.div`
    padding-top: 50px;
`;

export default function ArticlePage({ post, related }) {
    const { cookieConsent, site } = useContext(AppContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const isCurrentUrl = () => {
            if (site === document.location.href || site === '') {
                return true;
            } else {
                return false;
            }
        };

        setLoaded(true);

        if (loaded) {
            FtEvents();
            FtAnalytics();
        }

        if (cookieConsent && isCurrentUrl() && loaded) {
            window.permutive.addon('web', {
                page: {
                    type: `Partner Content ${
                        post.metaData.hasVideo ? 'Video' : 'Article'
                    }`,
                },
            });
        }
    }, [cookieConsent, site, loaded]);

    function renderAnimation(id) {
        switch (id) {
            case 1:
                return <AnimationOne />;

            default:
                return null;
        }
    }

    return (
        <>
            <Head>
                <title>{post.metaData.title}</title>
                <Metadata data={post.metaData} />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Wrapper>
                <Hero data={post.metaData} />
                <main className="main" id="content">
                    <ArticleContainer>
                        {post.content.map((el) => {
                            switch (el.type) {
                                case 'content':
                                    return (
                                        <Content
                                            key={el.id}
                                            id={el.id}
                                            data={el.data}
                                        />
                                    );
                                case 'quote':
                                    return <Quote key={el.id} data={el.data} />;
                                case 'animation':
                                    return renderAnimation(el.data);
                            }
                        })}
                    </ArticleContainer>
                </main>
            </Wrapper>
            <Related data={related} />
            {/* <Pixel src="https://collector.brandmetrics.com/Info?pixel=e547afbc309d40bb8703bbc4fbd865f4" />
            <Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
            <div id="brandmetrics-survey" className="brandmetrics-survey">
                <script
                    dangerouslySetInnerHTML={{
                        __html: `             window._brandmetrics = window._brandmetrics || [];
                    setTimeout(function() {
                      window._brandmetrics.push({cmd: "_forcesurvey", val: {mid:"e547afbc309d40bb8703bbc4fbd865f4", style:
                      "ft_flyin_default"}});
                    }, 10000);`,
                    }}
                ></script>
            </div> */}
        </>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

export async function getStaticProps({ params }) {
    const results = await fetch(ARTICLE_URL);
    const articles = await results.json();

    const post = articles.find((article) => article.id === params.slug);
    const related = articles.filter((article) => {
        return article.id != params.slug;
    });

    return {
        props: { post, related },
    };
}
