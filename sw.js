importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"00c33d96807150aea0622584ab0f3571","url":"contributors.html"},{"revision":"d585fd63d091336ab69bab2acf7e9495","url":"feedback.html"},{"revision":"a637dfce4b46f9b9b00e63069c78c7f2","url":"images/1.jpg"},{"revision":"ac6461ee0fb173123ceb43aa7d9f8fcc","url":"images/2.jpg"},{"revision":"eff3f2e55b5f0e680bdb4ceeff21845c","url":"images/3.jpg"},{"revision":"d1d25e272346869075ecd82c1ab2760d","url":"images/4.jpg"},{"revision":"3369915bfd38f6398c34432257a9385e","url":"images/5.jpg"},{"revision":"792fb2151acf69313ed3ccf4b32b60de","url":"images/6.jpg"},{"revision":"398b87c6c9722e5bc75df411cba1835d","url":"images/7.jpg"},{"revision":"b6ef7f439109ce69d85724779f082dea","url":"images/p1.jpg"},{"revision":"f2878afec5781cce5c52692b8f317c2c","url":"images/theory1.png"},{"revision":"f310b157d25dd62531a54dfc2cff7a2f","url":"images/theory2.png"},{"revision":"b2049bcdf50487fbc81d38e65553fb65","url":"images/theory3.png"},{"revision":"703d61329bee4bc9e0b409b162276ae0","url":"index.html"},{"revision":"32d86beeee2279201b4b6e0ced7b3de5","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"c1c7bbd0fa6ab94bba1558ad46935cca","url":"posttest.html"},{"revision":"c910315716e465e56f2cfe3c02f79cb9","url":"posttest.json"},{"revision":"d5e39e15193bd57a19e0ba3db2378f14","url":"pretest.html"},{"revision":"bb0d0620718e2a6667983627978ace1d","url":"pretest.json"},{"revision":"133359c3e2e790757420889c238b0882","url":"procedure.html"},{"revision":"744ef8e44298a2e9087fd03358b67bb0","url":"references.html"},{"revision":"904e925463e2d592951852f92b74463c","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"2cad1b933b9fea0019443f7b472824d9","url":"simulation/index.html"},{"revision":"79a260c5629c1e54be5013bb80356403","url":"simulation/js/activity1_p1.js"},{"revision":"5bc5111e3caa5488803d2d31ceefabf1","url":"simulation/js/activity1_p2.js"},{"revision":"c9ee89da0e04426b25d7e8b41f3cce9f","url":"simulation/js/activity1_p3.js"},{"revision":"2dcedb248aff1ef54e2c3398579fc118","url":"simulation/js/activity1.js"},{"revision":"1286fb29cc7a639556f0f52773641f65","url":"simulation/js/activity2_p1.js"},{"revision":"19d5bf7636f189f8ecf426e65019880a","url":"simulation/js/activity2_p2.js"},{"revision":"daa2e00ccacce3e70a27224e28e9d100","url":"simulation/js/activity2_p3.js"},{"revision":"9827cf30988a9f01744b341afda35fd0","url":"simulation/js/activity2.js"},{"revision":"065b37a14ee5e4df206061af26ba6df0","url":"simulation/js/activity3_p1.js"},{"revision":"70ef08a88bad35281d417fcac8c7fe15","url":"simulation/js/activity3_p2.js"},{"revision":"001e7cc7985912eca4be141e96272cbe","url":"simulation/js/activity3_p3.js"},{"revision":"054325dccfc3ca5654c82178e8d3c1bc","url":"simulation/js/activity3.js"},{"revision":"12840a06d4184a3cf3a65d45d92dfefd","url":"simulation/js/activity4.js"},{"revision":"58ad9db79a446d171be8ac6d424d77d9","url":"simulation/js/data.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"5e7b772236c89fa3869adc42cf76f075","url":"simulation/js/screen_size.js"},{"revision":"d6c1a8cc5d09b91ae075f8d10f34d597","url":"simulation/js/z_table.js"},{"revision":"0f32d2203edde82f6085592fbf586190","url":"theory.html"},{"revision":"3f92b0c9262d41fdd60cf6f9b7afcd52","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );