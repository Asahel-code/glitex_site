import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/css/base.css/"/>
                    <link rel="stylesheet" href="/css/vendor.css"/>
                    <link rel="stylesheet" href="/css/main.css"/>
                    <link rel="stylesheet" href="/css/custom.css"/>

                    <script src="/js/modernizr.js"/>
                    <script src="/js/pace.min.js"/>
                    <link rel="shortcut icon" href="logo.png" type="image/x-icon"/>
                    <link rel="icon" href="logo.png" type="image/x-icon"/>
                </Head>
                <body id="top">
                <Main/>
                <NextScript/>
                <script src="/js/jquery-3.2.1.min.js"/>
                <script src="/js/plugins.js"/>
                <script src="/js/main.js"/>
                {/*Scripts etc.*/}
                <div aria-hidden="true" className="pswp" role="dialog" tabIndex="-1">
                    <div className="pswp__bg"/>
                    <div className="pswp__scroll-wrap">
                        <div className="pswp__container">
                            <div className="pswp__item"/>
                            <div className="pswp__item"/>
                            <div className="pswp__item"/>
                        </div>
                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter"/>
                                <button className="pswp__button pswp__button--close" title="Close (Esc)"/>
                                <button className="pswp__button pswp__button--share" title="Share"/>
                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"/>
                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"/>
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip"/>
                            </div>
                            <button className="pswp__button pswp__button--arrow--left"
                                    title="Previous (arrow left)"/>
                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"/>
                            <div className="pswp__caption">
                                <div className="pswp__caption__center"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="preloader">
                    <div id="loader">
                        <div className="line-scale-pulse-out">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </div>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6L8MC15QF8"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-6L8MC15QF8');
          `,
                    }}
                />
                <script>

                </script>
                </body>
            </Html>
        )
    }
}

export default MyDocument