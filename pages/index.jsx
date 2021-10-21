// @flow
import React from "react";
import dynamic from "next/dynamic";
const HomeComp = dynamic(import("../client/components/Home"), { ssr: false });

// const HomeComp = dynamic(import("../client/components/ComingSoon"), { ssr: false });
export default function Home() {
  return (
    <div>
      <HomeComp />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
                        new WOW().init();
                  `,
        }}
      ></script>
      <script
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
      {/* <span className="pages__BGCard-sc-109t5hg-0 lpuNcM">
        <span className="utils__CardBGImage-jpzfl5-0 hfInar"></span>
      </span> */}
      {/* <div className="box-sta"></div> */}
    </div>
  );
}
