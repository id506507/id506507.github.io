(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{358:function(e,n,t){var content=t(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(123).default)("cdf2c480",content,!0,{sourceMap:!1})},363:function(e,n,t){"use strict";t(358)},364:function(e,n,t){var o=t(122)(!1);o.push([e.i,'.menu{position:fixed;right:3%;font-size:3em;cursor:pointer;z-index:100}.sideMenu{background:rgba(6,17,27,.54);position:fixed;right:0;top:0;height:100%;width:0;padding-top:10%;transition:.5s;-webkit-transition:.5s}.sideMenu div{line-height:3em!important;cursor:pointer}.top{padding-left:1%}.top h3{text-align:left;letter-spacing:11px}.top span{background:hsla(0,0%,100%,.22);padding:5px 0 5px 10px;color:#21639e;text-transform:capitalize;letter-spacing:13px}.title{margin-top:11%}@media screen and (max-width:414px){.title{margin-top:62%}}@media screen and (max-width:680px) and (min-width:415px){.title{margin-top:30%}}@media screen and (max-width:1098px) and (min-width:681px){.title{margin-top:22%}}@media screen and (max-width:1111px) and (min-width:1099px){.title{margin-top:18%}}@media screen and (min-width:1112px){.title{margin-top:13%}}@media screen and (max-width:1024px) and (max-height:600px){.title{margin-top:13%}}.title h3{font-size:3em;text-shadow:1px 1px 2px #000;margin-bottom:4%}@media screen and (max-width:280px){.title h3{font-size:2em}}.banner{height:100vh}.banner,.bannerMobile{background-color:#0086fe;color:#fff;margin-bottom:3%;padding-top:2%;width:100%;position:relative}.bannerMobile{height:90vh}.banner>div>div,.bannerMobile>div>div{font-family:"Josefin Sans",sans-serif;margin:1% auto;text-align:center;line-height:200%}.bannerBtn{display:block;background:transparent;border:0;border-radius:5px;letter-spacing:1px;padding:.5%;margin:1% auto 0;position:absolute;bottom:0;left:50%;transform:translate(-50%,-50%)}.bannerBtnWord{background:linear-gradient(#042f59,#1a4c80 33.3%,#3a70a6 66.6%,#042f59);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:2em;background-size:100% 300%;-webkit-animation:text-animation 2s linear infinite;animation:text-animation 2s linear infinite;cursor:pointer}.bannerBtnArrow{transition:1s linear}.bannerName,.bannerText{text-shadow:1px 1px 2px #000;font-size:2.2em}.bannerName{color:#ecb731}.bannerText{color:#171717}.bannerSen{margin-top:2%;text-shadow:1px 1px 2px #000;letter-spacing:3px}.burger{color:#000}@media screen and (max-width:280px){.bannerName,.bannerText{font-size:2em}.bannerSen{font-size:small}}@-webkit-keyframes text-animation{0%{background-position:0 0}to{background-position:0 -150%}}@keyframes text-animation{0%{background-position:0 0}to{background-position:0 -150%}}@-webkit-keyframes sideMenu-animation{0%{opacity:0}to{opacity:1%}}@keyframes sideMenu-animation{0%{opacity:0}to{opacity:1%}}@media screen and (max-width:375px){.menu{right:9%}.sideMenu{padding-top:37%}.top span{font-size:.7em}}',""]),e.exports=o},376:function(e,n,t){"use strict";t.r(n);t(27);var o=t(0).default.extend({data:function(){return{moreBtn:!1,sideBtn:!1,showBurger:!1,showBurgerLength:0,isMobileDevice:!1,menu:[{chi:"主頁",eng:"Home"},{chi:"關於我",eng:"About"},{chi:"能力",eng:"Skills"},{chi:"經驗",eng:"Experience"},{chi:"聯絡我",eng:"Contact"},{chi:"中/ENG",eng:"中/ENG"}]}},mounted:function(){var e,n,t=this.$route.query.lang;!t||"en"!=t&&"chi"!=t?(this.$router.push({path:this.$route.path,query:{lang:"en"}}),this.$store.commit("changeLang","en")):this.$store.commit("changeLang",t),window.addEventListener("scroll",this.onWindowScroll),this.showBurgerLength=null!==(n=null===(e=document.getElementById("aboutMeSection"))||void 0===e?void 0:e.offsetTop)&&void 0!==n?n:0,this.isMobile()},destroyed:function(){window.removeEventListener("scroll",this.onWindowScroll)},computed:{lang:function(){return this.$store.state.lang}},watch:{lang:function(e){}},methods:{anchor:function(section){var e="";switch(section.toLowerCase()){default:e="banner";break;case"about":e="aboutMeSection";break;case"skills":e="skill";break;case"experience":e="expNEdu";break;case"services":e="services";break;case"contact":e="contact";break;case"中/eng":"en"==this.lang?this.$store.commit("changeLang","chi"):this.$store.commit("changeLang","en")}if("中/eng"!=section.toLowerCase()){var n=document.getElementById(e);window.scrollTo({top:null==n?void 0:n.offsetTop,behavior:"smooth"})}else"en"==this.lang?this.$router.push({path:this.$route.path,query:{lang:"en"}}):this.$router.push({path:this.$route.path,query:{lang:"chi"}})},changeMenu:function(){this.sideBtn=!this.sideBtn;var e=document.getElementById("sideMenu");e&&(this.sideBtn?e.style.width="40vh":e.style.width="0")},onWindowScroll:function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=this.showBurgerLength-55?this.showBurger=!0:(this.showBurger=!1,this.sideBtn=!1)},isMobile:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.isMobileDevice=!0:this.isMobileDevice=!1}}}),r=(t(363),t(51)),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.isMobileDevice?"bannerMobile":"banner",attrs:{id:"banner"}},[t("div",{staticClass:"menu"},[!e.sideBtn&&e.showBurger?t("span",{staticClass:"burger",on:{click:function(n){return e.changeMenu()}}},[e._v("≡")]):e._e(),e._v(" "),e.sideBtn&&e.showBurger?t("span",{staticClass:"burger",on:{click:function(n){return e.changeMenu()}}},[e._v("×")]):e._e()]),e._v(" "),t("div",{staticClass:"title"},[t("h3",[e._v(e._s(e.$translate("我是誰？","Who I am ?")))]),e._v(" "),t("div",[t("div",[t("span",{staticClass:"bannerText"},[e._v(e._s(e.$translate("我是 ","I am ")))]),e._v(" "),t("span",{staticClass:"bannerName"},[e._v("Angus Chan ")]),e._v(" "),t("span",{staticClass:"bannerText"},[e._v(".")])]),e._v(" "),t("div",{staticClass:"bannerSen"},[e._v("\n        "+e._s(e.$translate("這是我的個人網頁，希望各位可以透過這個網頁對我有基本的認識。","This is my personal website. I hope you can get to know me more through this page."))+"\n        \n      ")]),e._v(" "),t("button",{staticClass:"bannerBtn",on:{click:function(n){return e.anchor("About")},mouseover:function(n){e.moreBtn=!0},mouseleave:function(n){e.moreBtn=!1}}},[e._m(0)])])]),e._v(" "),e.showBurger?t("div",{staticClass:"sideMenu",attrs:{id:"sideMenu"}},e._l(e.menu,(function(n,o){return t("div",{key:o,on:{click:function(t){return e.anchor(n.eng)}}},[e._v(e._s(e.$translate(n.chi,n.eng)))])})),0):e._e()])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"bannerBtnWord"},[t("div",{staticClass:"bannerBtnArrow"},[e._v("⬇")])])}],!1,null,null,null);n.default=component.exports}}]);