



track request for personal feed of a person. and sore body .

we just need to add user id pass to body with recent request for feed . need to msintain a iframe with a person profile url and reload and scroll for getting new request body.


``fetch("https://www.facebook.com/api/graphql/", {
"headers": {
"accept": "*/*",
"cache-control": "no-cache",
"content-type": "application/x-www-form-urlencoded",
"pragma": "no-cache",
"priority": "u=1, i",
"sec-ch-prefers-color-scheme": "light",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"x-asbd-id": "129477",
"x-fb-friendly-name": "ProfileCometTimelineFeedRefetchQuery",
"x-fb-lsd": "2jZ2yVXZx35gXwZG43ReDs"
},
"referrerPolicy": "strict-origin-when-cross-origin",
"body": "av=100006663155213&__aaid=0&__user=100006663155213&__a=1&__req=1s&__hs=20091.HYP%3Acomet_pkg.2.1.0.2.1&dpr=2&__ccg=EXCELLENT&__rev=1019126774&__s=emp6o7%3A8f8acl%3Azb49bu&__hsi=7455671396127669896&__dyn=7xeXxaU9k9Uvxt0koC8G6Ejh941twWwIxu13wFG3OubyQdwSAx-bwNwnof8boG4E762S1DwUx60xU8E5O0BU2_CxS320qa2OU7m2210wEwgo9oO0wE7u12wOx62G5Usw9m1cwLwBgK7o8o4u0Mo4G1hx-3m1mzXw8W58jwGzEjzFU5e7oqBwJK14xm3y3aexfxmu3W3rwxwhFVovUaU3qxW2-VEbUGdG0HE88cA0z8c84p1e4UK2K364UrwFg2fwxyo566k1FwgUjwOwWzUfHDzUiwRK6E4-mEbUaUaE2Txq&__csr=gaIbgjh2bd5MnhIsxcv4_6ii8ruyhuB7EhnhvJELRQyiYZkBQDicOnEJi4i-AnGHAQ9PRRW-RmQWVXFGld5-KrDjiIEyq8CF6y9qUFa8mBnCKmmgDxB2ahaHjCFGmJqAJ4AGJDBGHDCKUOJCDzELhcHWzeEGvVqo-4oW8LK8VU-hAK6oK9WxiA8AK5ucrxet7AG5E-ql28hxN9p-5pbG2i8ho8ohCxm6V8PF1vzFKBG8AAwzy8NbCyoW4oG9wYGEmxh4BypV8gglzUSbyojCy8SUswyx-m5F8jxe-1BgC9xOum3avyEHy8KU9UaoW58C4ElyQu8whUcUK2u5awERxe3u5Emzofo5G3a2KHwJwro3OQbwTwh8jK0Gp4Dzmawn82gwDwCwno6y22fixW0V8eqw9m0jy1VwywrU5m2W1Pze2q37wEU420To3Wg10u04Mplc1hhupjIE0vyG0pa0KE0Gu0oK1szA0oy1Rg1DE0sJw3Xqx9Dw0uJi4LwQw0KAw0B3868lwHyN02XU0wq0s66WxS2e4U1qe2m6A0CbDyo25weLa1Ly81e86udwho1Jo1qUbi0bS0lqu0qC220m-0zUWlN0owklw4MJ9o7O480BK08Uw13Gp2oG0M8tiBwQ4N2xdpYhsP4AKvxm4o882kyTg2Rw8i7o1JEgwYUpBwfut1a2yewCw1iq02kuGw5Gyo1Jojey0da0_7Ww3wmm8g1yo5y0lK0DE0NW0e-66k9G2eh0Hzsw3ew3580KC3-1Ew&__comet_req=15&fb_dtsg=NAcMiRsa0c8As3MbjxEerEz47UCRjeUMkdrILl6bj0rJfk5I07Smubg%3A14%3A1734616148&jazoest=25496&lsd=2jZ2yVXZx35gXwZG43ReDs&__spin_r=1019126774&__spin_b=trunk&__spin_t=1735908770&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometTimelineFeedRefetchQuery&variables=%7B%22afterTime%22%3Anull%2C%22beforeTime%22%3Anull%2C%22count%22%3A10%2C%22cursor%22%3A%22Cg8Ob3JnYW5pY19jdXJzb3IJAAABr0FRSFJJTnVFZm1oTWpIM3p1YjhCSlZGTTFCLWtNNDBLMS1FSzVST3h3WTFvcEFfWV9lUXRQQ3VUY3JGdnNmc3c4S3ZackoyYzRuRDJySnY1dldHNTVWT05QelFXaWM1bER6bktUeWNvUFRxX3lPUzZSMC1OaDh3MlJFTTJ2dWNIZUFwd3lUdFk1MVNrU0ZPbW93eDlpVG96bDFreWR2ZWNGMHB1VjlTdFhSUTNGb0JnX1B4RDBRQ2xzNE84bDNYbldFS1FONDZvLXd4Ti1FNU80WE5aV05UYVB4VUlmcElGcUdUcTgwd2MzUHluLVdrS0RYWGI4M3p3YTA1WmVwSVdscVBxc3NXQXpGblRUbVNPVnpBX1UxaXNveW13N1lWa1dEQkd5bGExU3ZEODhHX2g3aWlGMjBSWVNqbWZLOG5xQ1E0b0xTZzFQRUdScFFhZE9KR0dIc2VHcHRQZjNidG1ZM0I3eFpES0VOZHVwam9TU0UtNUU2QlA1YTJjS0hBQ2FkbFVDRVJEZFhqWkhXNTY4OUxGcUhuT0pFSzJrVXpQMU9UYlBqTmVNOFN1UHVBDwlhZF9jdXJzb3IODw9nbG9iYWxfcG9zaXRpb24CAA8Gb2Zmc2V0AgAPEGxhc3RfYWRfcG9zaXRpb24C%2FwE%3D%22%2C%22feedLocation%22%3A%22TIMELINE%22%2C%22feedbackSource%22%3A0%2C%22focusCommentID%22%3Anull%2C%22memorializedSplitTimeFilter%22%3Anull%2C%22omitPinnedPost%22%3Atrue%2C%22postedBy%22%3A%7B%22group%22%3A%22OWNER%22%7D%2C%22privacy%22%3Anull%2C%22privacySelectorRenderLocation%22%3A%22COMET_STREAM%22%2C%22renderLocation%22%3A%22timeline%22%2C%22scale%22%3A2%2C%22stream_count%22%3A1%2C%22taggedInOnly%22%3Anull%2C%22trackingCode%22%3Anull%2C%22useDefaultActor%22%3Afalse%2C%22id%22%3A%22100044569563534%22%2C%22__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider%22%3Afalse%2C%22__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider%22%3Afalse%2C%22__relay_internal__pv__IsWorkUserrelayprovider%22%3Afalse%2C%22__relay_internal__pv__CometFeedStoryDynamicResolutionPhotoAttachmentRenderer_experimentWidthrelayprovider%22%3A500%2C%22__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider%22%3Afalse%2C%22__relay_internal__pv__IsMergQAPollsrelayprovider%22%3Afalse%2C%22__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider%22%3Afalse%2C%22__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider%22%3Afalse%2C%22__relay_internal__pv__CometUFIShareActionMigrationrelayprovider%22%3Atrue%2C%22__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider%22%3Atrue%2C%22__relay_internal__pv__EventCometCardImage_prefetchEventImagerelayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=8964809010247354",
"method": "POST",
"mode": "cors",
"credentials": "include"
});``


1. need to generate feed data of a person in good format.
2. Need to reaction api/fetch data 
3. when click on comment of share then will open a winndow rightside with iframe of single post then user can comment or share.
