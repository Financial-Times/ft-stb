const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptopS: '930px',
    laptop: '1024px',
    laptopM: '1220px',
    laptopL: '1440px',
    desktop: '2560px',
};

const ts = Date.now();

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopM: `(min-width: ${size.laptopM})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const hasConsentedToBehaviouralAds = () => {
    const consentValue = getCookieValue('FTConsent');
    return consentValue && consentValue.includes('behaviouraladsOnsite:on');
};

const getCookieValue = (cookieKey) => {
    const re = new RegExp(`${cookieKey}=([^;]+)`);
    const match = document.cookie.match(re);
    if (!match) {
        // cookie stasis or no cookie found
        return false;
    }
    return decodeURIComponent(match[1]);
};

export const ARTICLE_URL = `https://ft.com/partnercontent/stb/articles-three.json?ts=${ts}`;
