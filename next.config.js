const path = require('path');

module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['ft.com'],
	},
	webpack: (config) => {
		config.resolve.alias['~'] = path.resolve(__dirname);
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
