const FtAnalytics = () => {
	(function (src) {
		function throttle(func, wait) {
			let last, timer;

			return function () {
				const now = +new Date();
				const args = arguments;
				const context = this;

				if (last && now < last + wait) {
					clearTimeout(timer);
					timer = setTimeout(function () {
						last = now;
						func.apply(context, args);
					}, wait);
				} else {
					last = now;
					func.apply(context, args);
				}
			};
		}

		function oTrackingInit() {
			// oTracking
			var oTracking = Origami['o-tracking'];
			var parent = document.querySelector('meta[name="parent"]');

			var config_data = {
				server: 'https://spoor-api.ft.com/px.gif',
				context: {
					product: 'paid-post',
					content: {
						title: document.querySelector('title').textContent,
						parent: parent ? parent.getAttribute('content') : null,
					},
				},
				user: {
					ft_session: oTracking.utils.getValueFromCookie(/FTSession=([^;]+)/),
				},
			};

			// Setup
			oTracking.init(config_data);
			// Automatically track clicks
			oTracking.click.init('button');
			// Page
			oTracking.page({
				content: {
					asset_type: 'page',
				},
			});
		}

		if (cutsTheMustard) {
			var o = document.createElement('script');
			o.async = o.defer = true;
			o.src = src;
			o.id = 'origami-js';
			var s = document.getElementsByTagName('script')[0];
			if (o.hasOwnProperty('onreadystatechange')) {
				o.onreadystatechange = function () {
					if (o.readyState === 'loaded') {
						document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
						oTrackingInit();
					}
				};
			} else {
				o.onload = function () {
					document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
					oTrackingInit();
				};
			}
			if (!document.querySelector('#origami-js')) {
				s.parentNode.insertBefore(o, s);
			}
		}

		// The mustard is NOT cut
		else {
			// Add fallback if browsers don't cut the mustard -->
			var img = new Image();
			img.src =
				'https://spoor-api.ft.com/px.gif?data=%7B%22category%22:%22page%22,%20%22action%22:%22view%22,%20%22system%22:%7B%22apiKey%22:%22qUb9maKfKbtpRsdp0p2J7uWxRPGJEP%22,%22source%22:%22o-tracking%22,%22version%22:%221.0.0%22%7D,%22context%22:%7B%22product%22:%22paid-post%22,%22content%22:%7B%22asset_type%22:%22page%22%7D%7D%7D';
		}
	})('https://ft.com/partnercontent/cms/FtTracking.js');
};

export default FtAnalytics;
