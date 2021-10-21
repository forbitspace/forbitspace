import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    return { ...documentProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="../images/logo-space.png" />
          <link rel="stylesheet" href="/js/WOW-master/animate.css" />
          <link rel="stylesheet" href="/js/Slick-Js/slick.css" />
          <link rel="stylesheet" href="/js/Slick-Js/slick-theme.css" />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/js/fontawesome-free-5.15.3-web/css/all.min.css"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/js/Magnific-Popup-master/magnific-popup.css"
          />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,300;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          ></link>
          <script
          // Prevent element inspect
          // dangerouslySetInnerHTML={{
          //   __html: `

          //                     document.onkeydown = function (e) {
          //                         if (event.keyCode == 123) {
          //                             return false;
          //                         }
          //                         if ((event.keyCode == 91 || event.keyCode == 93) && (event.keyCode == 18) && e.keyCode == "I".charCodeAt(0) ) {
          //                             return false;
          //                         }
          //                         if ((event.keyCode == 91 || event.keyCode == 93) && e.shiftKey && e.keyCode == "C".charCodeAt(0) ) {
          //                             return false;
          //                         }
          //                         if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
          //                             return false;
          //                         }
          //                         if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
          //                             return false;
          //                         }
          //                         if (e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
          //                             return false;
          //                         }
          //                         if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
          //                             return false;
          //                         }
          //                     };
          //                 `,
          // }}
          ></script>
        </Head>
        <body className="dark-mode">
          <Main />
          <NextScript />
          <script src="js/jquery-3.4.1.min.js"></script>
          <script src="js/Slick-Js/slick.min.js"></script>
          <script src="js/WOW-master/wow.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
          <script src="js/Magnific-Popup-master/jquery.magnific-popup.min.js"></script>
          <script src="js/main.js"></script>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                                new WOW().init();
                            `,
            }}
          ></script> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                AOS.init({
                                    duration: 1200,
                                })
                            `,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                AOS.init({
                                    duration: 1200,
                                })
                                
                            `,
            }}
          ></script>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                                $(document).ready(function() {
                                    $('.dark-mode').click(function() {
                                        $('.main-wrap').toggleClass('visible');
                                    });
                                });
                                $(document).ready(function() {
                                    $('.dark-mode').click(function() {
                                        $('.header').toggleClass('visible');
                                    });
                                });
                                $(document).ready(function() {
                                    $('.dark-mode').click(function() {
                                        $('.footer').toggleClass('visible');
                                    });
                                });
                                $(document).ready(function() {
                                    $('.dark-mode').click(function() {
                                        $('body').toggleClass('visible');
                                    });
                                });
                            `,
            }}
          ></script> */}
        </body>
      </Html>
    );
  }
}
