const Metadata = ({ data }) => {
	return (
		<>
			{data ? (
				<>
					<meta name="sponsor" content={data.advertiserName} />
					<meta name="parent" content="Partner Content" />
					<meta name="feature" content={data.contentType} />
					<meta name="description" content={data.desc} />

					<meta name="articleName" content={data.title} />
					<meta name="adbook_campaign_id" content={data.adbookId} />
					<meta name="author" content={data.contentAuthor} />
					<meta name="articleBranded" content="true" />
					<meta name="articleContentType" content={data.contentStyle} />
					<meta name="productType" content={data.productType} />
					<meta
						name="articleAdvertiserIndustry"
						content={data.primaryIndustryAdvertiser}
					/>
					<meta name="articleParent" content={data.primaryTopic} />
					<meta name="articleChild" content={data.secondaryTopic} />
					<meta name="articleApp" content={data.type} />
					<meta name="wordCount" content={data.wordCount} />
					<meta name="productType" content={data.commercialProduct} />

					<meta name="articleDate" content={data.publicationDate} />
					<meta property="og:url" content={data.articleUrl} />
					<meta property="og:type" content="article" />
					<meta property="og:title" content={data.title} />
					<meta property="og:description" content={data.desc} />
					<meta property="og:image" content={data.articleImage} />
					<meta name="twitter:title" content={data.title} />
					<meta name="twitter:description" content={data.desc} />
					<meta name="twitter:image" content={data.articleImage} />
					<meta name="twitter:url" content={data.articleUrl} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@ft_content" />
					<meta name="twitter:creator" content="@ft_content" />
					<meta name="twitter:domain" content="https://www.ft.com/" />
					<link rel="canonical" href={data.articleUrl} />
				</>
			) : null}
		</>
	);
};

export default Metadata;
