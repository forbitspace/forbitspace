(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"1Yj4":function(n,t,e){"use strict";function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}var o,r=e("q1tI"),a=e.n(r),c=e("17x9"),l=e.n(c),s=e("TSYQ"),u=e.n(s);var f="object"===typeof window&&window.Element||function(){};l.a.oneOfType([l.a.string,l.a.func,function(n,t,e){if(!(n[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+e+"`. Expected prop to be an instance of Element. Validation failed.")},l.a.shape({current:l.a.any})]);var p=l.a.oneOfType([l.a.func,l.a.string,l.a.shape({$$typeof:l.a.symbol,render:l.a.func}),l.a.arrayOf(l.a.oneOfType([l.a.func,l.a.string,l.a.shape({$$typeof:l.a.symbol,render:l.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var d={tag:p,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},g=function(n){var t=n.className,e=n.cssModule,r=n.fluid,c=n.tag,l=function(n,t){if(null==n)return{};var e,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,["className","cssModule","fluid","tag"]),s="container";!0===r?s="container-fluid":r&&(s="container-"+r);var f=function(n,t){return void 0===n&&(n=""),void 0===t&&(t=o),t?n.split(" ").map((function(n){return t[n]||n})).join(" "):n}(u()(t,s),e);return a.a.createElement(c,i({},l,{className:f}))};g.propTypes=d,g.defaultProps={tag:"div"};t.a=g},TSYQ:function(n,t,e){var i;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var n=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)n.push(i);else if(Array.isArray(i)&&i.length){var a=o.apply(null,i);a&&n.push(a)}else if("object"===r)for(var c in i)e.call(i,c)&&i[c]&&n.push(c)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(n.exports=i)}()},yZXQ:function(n,t,e){"use strict";var i=e("h4VS"),o=e("q1tI"),r=e.n(o),a=e("vOnD"),c=e("1Yj4"),l=[{link:"https://medium.com/@forbitspace",url:"./images/icon-social-footer/1.svg"},{link:"https://www.reddit.com/r/forbitspace/",url:"./images/icon-social-footer/2.svg"},{link:"https://discord.gg/8tBuBPeZ",url:"./images/icon-social-footer/3.svg"},{link:"https://github.com/forbitspace",url:"./images/icon-social-footer/4.svg"},{link:"https://t.me/forbitspace",url:"./images/icon-social-footer/5.svg"},{link:"https://twitter.com/forbitspace",url:"./images/icon-social-footer/6.svg"}],s=[{nav:"Space Trade",contents:[{link:"/aggregation",content:"Aggregation Protocol"},{link:"/liquidity",content:"Liquidity Protocol"},{link:"/limit",content:"Limit Order Protocol"},{link:"/derivative",content:"Derivative Protocol"}]},{nav:"Governance",contents:[{link:"/token",content:"FBS Token"},{link:"/dao",content:"Space Dao"},{link:"",content:"Pools",disable:!0},{link:"",content:"Farming",disable:!0},{link:"",content:"Stacking",disable:!0}]},{nav:"Developers",contents:[{link:"",content:"Documentation"},{link:"",content:"Whitepaper",disable:!0},{link:"",content:"Github"},{link:"",content:"Audits",disable:!0},{link:"",content:"Bug bounty",disable:!0}]},{nav:"Self-custody",link:"/selfcustody",contents:[{link:"/bridge",content:"Bridge Space"},{link:"/mobile-wallet",content:"Mobile wallet"},{link:"/smart-contract",content:"Smart contract wallet"},{link:"/assets",content:"Asset management"}]},{nav:"Support",link:"",contents:[{link:"https://help.forbitspace.com/",content:"Help Center",outLink:!0},{link:"../images/pdf/terms-of-service.pdf",content:"Term of Service",outLink:!0},{link:"../images/pdf/privacy-policy.pdf",content:"Privacy Policy",outLink:!0}]}],u=r.a.createElement;function f(){var n=Object(i.a)(["\n  position: relative;\n  border-radius: 10px;\n  margin-right: 5px;\n"]);return f=function(){return n},n}function p(){var n=Object(i.a)(['\n  width: 100%;\n  height: 30px;\n  margin-right: 5px;\n  font-family: "Averta";\n  font-size: 14px;\n  padding: 10px 15px;\n  line-height: 20px;\n  outline: 0;\n  transition: all 0.3s ease-in-out;\n  background: transparent;\n  border-radius: 10px;\n  position: relative;\n  border: none;\n  background: #cff3f4;\n  border: 1px solid #0047b2;\n']);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 300;\n"]);return d=function(){return n},n}function g(){var n=Object(i.a)(["\n  font-size: 16px;\n  font-size: ",";\n  margin-bottom: 10px;\n  color: #182239;\n  font-weight: bold;\n"]);return g=function(){return n},n}function b(){var n=Object(i.a)(["\n  font-size: 12px;\n"]);return b=function(){return n},n}function m(){var n=Object(i.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  padding-top: 25px;\n\n  ul {\n    padding-left: 0;\n    width: calc(100% / 7);\n    // text-align:right;\n\n    form {\n      display: flex;\n      align-items: center;\n      margin-bottom: 25px;\n\n      input {\n      }\n\n      button {\n        width: 60px;\n        height: 30px;\n        border: none;\n        outline: none;\n        background-image: linear-gradient(\n          17deg,\n          #00ff36 -68%,\n          #00ee57 -43%,\n          #00c5ad 14%,\n          #00a4f1 57%,\n          #0b18fc 154%,\n          #0d00ff 171%\n        );\n        border-radius: 8px;\n        transition: all 0.5s ease-in-out;\n        background-size: 200%;\n        background-position: 99%;\n\n        i {\n          color: #fff;\n          font-size: 12px;\n        }\n\n        &:hover {\n          background-size: 200%;\n          background-position: right;\n        }\n      }\n    }\n\n    li {\n      font-size: 12px;\n      font-weight: 300;\n      font-family: sans-serif;\n      a {\n        text-decoration: none;\n        color: #4e4f50;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    @media (max-width: 1024px) {\n      width: calc(100% / 5);\n      margin-right: 0;\n      text-align: left;\n      form {\n        justify-content: center;\n      }\n      :last-child {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    @media (max-width: 768px) {\n      /* width: calc(100% / 6); */\n      margin-right: 0;\n      text-align: left;\n      form {\n        justify-content: center;\n      }\n      :last-child {\n        width: 100%;\n        text-align: center;\n      }\n    }\n    @media (max-width: 576px) {\n      width: 50%;\n    }\n  }\n"]);return m=function(){return n},n}function v(){var n=Object(i.a)(["\n  position: relative;\n  padding: 30px 0 0;\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    padding: 40px 0;\n\n    &:after {\n      content: none;\n    }\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(i.a)([""]);return h=function(){return n},n}function x(){var n=Object(i.a)(["\n  max-width: 20px;\n  width: 100%;\n  transition: all ease-in-out 0.2s;\n  :hover {\n    transform: scale(1.2);\n  }\n"]);return x=function(){return n},n}function k(){var n=Object(i.a)(["\n  margin-right: 10px;\n  :hover {\n    cursor: pointer;\n  }\n"]);return k=function(){return n},n}function w(){var n=Object(i.a)(["\n  background-size: 100%;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  z-index: -1;\n"]);return w=function(){return n},n}var y=a.b.div(w()),O=a.b.a(k()),j=a.b.img(x()),z=a.b.div(h()),S=a.b.section(v()),N=a.b.div(m()),P=a.b.div(b()),T=a.b.h3(g(),(function(n){return n.size})),E=a.b.p(d()),_=a.b.input(p()),A=a.b.div(f());t.a=function(){return u("footer",{className:"footer"},u(S,null,u(c.a,null,u(N,null,s.map((function(n,t){return u("ul",{className:"text-visi"},u(T,null,n.nav),n.contents.map((function(n,t){return u("li",null,n.disable?u(P,{href:"/"},n.content):u("a",{href:n.link,target:n.outLink?"_blank":""},n.content))})))})),u("ul",{className:"text-visi"},u(T,{size:"16px"},"Subscribe to our newsletter for updates"),u("form",{action:""},u(A,null,u(_,{type:"text",className:"text bg-input-dark",placeholder:"your@email.com",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0})),u("button",{type:"submit"},u("i",{className:"fa fa-arrow-right"}))),u(E,{className:"text-dark"},"\xa9 2021 forbitspace"),u(z,null,l.map((function(n,t){return u(O,{href:n.link,target:"_blank",key:t},u(j,{src:n.url,alt:"icon social media"}))}))))))),u(y,null))}}}]);