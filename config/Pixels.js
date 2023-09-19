import Script from 'next/script';

const Pixels = () => {
	return (
		<>
			<script
				id="twitter-pixel"
				dangerouslySetInnerHTML={{
					__html: `
        !(function (e, t, n, s, u, a) {
            e.twq ||
              ((s = e.twq =
                function () {
                  s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                }),
              (s.version = '1.1'),
              (s.queue = []),
              (u = t.createElement(n)),
              (u.async = !0),
              (u.src = '//static.ads-twitter.com/uwt.js'),
              (a = t.getElementsByTagName(n)[0]),
              a.parentNode.insertBefore(u, a));
          })(window, document, 'script');
          twq('init', 'nxgf1');
          twq('track', 'PageView')
        `,
				}}
			></script>
			<script
				id="cuts-the-mustard"
				dangerouslySetInnerHTML={{
					__html: `
            var cutsTheMustard =
            'querySelector' in document &&
            'localStorage' in window &&
            'addEventListener' in window;
            if (cutsTheMustard) { 
            document.documentElement.className =
            document.documentElement.className.replace(/core/g, 'enhanced');
            }
      `,
				}}
			></script>
			<Script
				id="polyfill"
				src="https://cdn.polyfill.io/v2/polyfill.min.js"
			></Script>
			<script
				id="permutiveScript"
				dangerouslySetInnerHTML={{
					__html: `
          !function (n, e, o, r, i) { if (!e) { e = e || {}, window.permutive = e, e.q = [], e.config = i || {}, e.config.projectId = o, e.config.apiKey = r, e.config.environment = e.config.environment || "production"; for (var t = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], c = 0; c < t.length; c++) { var f = t[c]; e[f] = function (n) { return function () { var o = Array.prototype.slice.call(arguments, 0); e.q.push({ functionName: n, arguments: o }) } }(f) } } }(document, window.permutive, "e1c3fd73-dd41-4abd-b80b-4278d52bf7aa", "b2b3b748-e1f6-4bd5-b2f2-26debc8075a3", { "consentRequired": true });
          window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () { if (0 === window.googletag.pubads().getTargeting("permutive").length) { var g = window.localStorage.getItem("_pdfps"); window.googletag.pubads().setTargeting("permutive", g ? JSON.parse(g) : []) } });`,
				}}
			></script>
			<script
				async
				src="https://e1c3fd73-dd41-4abd-b80b-4278d52bf7aa.edge.permutive.app/e1c3fd73-dd41-4abd-b80b-4278d52bf7aa-web.js"
			></script>
			<Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
		</>
	);
};

export default Pixels;
