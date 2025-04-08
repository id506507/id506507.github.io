<template>
  <div :class="isMobileDevice ? 'bannerMobile' : 'banner'" id="banner">
    <div class="menu">
      <span v-if="!sideBtn && showBurger" @click="changeMenu()" class="burger">≡</span>
      <span v-if="sideBtn && showBurger" @click="changeMenu()" class="burger">&times;</span>
    </div>
    <!-- <div class="top" @click="anchor('Home')">
      <h3>My Info</h3>
      <span>WHO I AM</span>
    </div> -->
    <div class="title">
      <h3>{{$translate('我是誰？','Who am I?')}}</h3>
      <div>
        <div>
          <span class="bannerText">{{$translate('我是 ', 'I am ')}}</span>
          <span class="bannerName">Angus Chan </span>
          <span class="bannerText">.</span>
        </div>
        <div class="bannerSen">
          {{$translate('這是我的個人網頁，希望各位可以透過這個網頁對我有基本的認識。', 
          'This is my personal website. I hope you can get to know me more through this page.')}}
          
        </div>
        <button
          class="bannerBtn"
          @click="anchor('About')"
          @mouseover="moreBtn = true"
          @mouseleave="moreBtn = false"
        >
          <div class="bannerBtnWord">
            <!-- <div>Know me more</div> -->
            <div class="bannerBtnArrow">&#9759;</div>
            <!-- &#11015; -->
          </div>
        </button>
      </div>
    </div>
    <div class="sideMenu" id="sideMenu" v-if="showBurger">
      <div v-for="(item, index) in menu" :key="index" @click="anchor(item.eng)">{{ $translate(item.chi, item.eng) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import translate from '~/plugins/translate'
export default Vue.extend({
  data() {
    return {
      moreBtn: false,
      sideBtn: false,
      showBurger: false,
      showBurgerLength: 0,
      isMobileDevice: false,
      menu: [
        {
          chi: '主頁',
          eng: 'Home',
        },
        {
          chi: '關於我',
          eng: 'About',
        },
        {
          chi: '能力',
          eng: 'Skills',
        },
        {
          chi: '工作經驗 & 教育程度',
          eng: 'Experience & Education',
        },
        {
          chi: '聯絡我',
          eng: 'Contact',
        },
        {
          chi: '中/ENG',
          eng: '中/ENG',
        },
      ],
    }
  },
  mounted() {
    var langParam = this.$route.query.lang;

    if(langParam && (langParam == 'en' || langParam == 'chi')) {
      this.$store.commit('changeLang', langParam);
    }
    else {
      this.$router.push({path: this.$route.path, query: { lang: 'en' }});
      this.$store.commit('changeLang', 'en');
    }

    window.addEventListener('scroll', this.onWindowScroll);
    this.showBurgerLength = document.getElementById('aboutMeSection')?.offsetTop ?? 0;
    this.isMobile();
  },
  destroyed() {
    window.removeEventListener('scroll', this.onWindowScroll);
  },
  computed: {
    lang: function() {
      return this.$store.state.lang;
    },
  },
  watch: {
    lang(newVal) {}
  },
  methods: {
    anchor(section: string) {
      let name = '';
      switch(section.toLowerCase().replaceAll(' ', '')) {
        default:
        case 'home':
          name = 'banner';
          break;
        case 'about':
          name = 'aboutMeSection';
          break;
        case 'skills':
          name = 'skill';
          break;
        case 'experience&education':
          name = 'expNEdu';
          break;
        case 'services':
          name = 'services';
          break;
        case 'contact':
          name = 'contact';
          break;
        case '中/eng':
          if(this.lang == 'en') {
            this.$store.commit('changeLang', 'chi');
          } else {
            this.$store.commit('changeLang', 'en');
          }
          break;
      }

      if(section.toLowerCase() != '中/eng') {
        let anchor = document.getElementById(name);
        window.scrollTo({
          top: anchor?.offsetTop,
          behavior: 'smooth',
        })        
      }
      else {
        if(this.lang == 'en') {
          this.$router.push({path: this.$route.path, query: { lang: 'en' }});
        } else {
          this.$router.push({path: this.$route.path, query: { lang: 'chi' }});
        }
      }
    },
    changeMenu() {
      this.sideBtn = !this.sideBtn;
      const sideMenuWidth = document.getElementById('sideMenu');
      if(sideMenuWidth) {
        if(this.sideBtn) {
          sideMenuWidth.style.width = '40vh';
        }
        else {
          sideMenuWidth.style.width = '0';
        }
      }
    },
    onWindowScroll() {
      const length = this.isMobileDevice ? 100 : 55;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPosition >= this.showBurgerLength - length) {
        this.showBurger = true;
      } else {
        this.showBurger = false;
        this.sideBtn = false;
      }
    },
    isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.isMobileDevice = true;
            }
            else {
                this.isMobileDevice = false;
            }
        }
  },
})
</script>

<style>
.menu {
  position: fixed;
  right: 3%;
  font-size: 3em;
  cursor: pointer;
  z-index: 100;
}
.sideMenu {
  background: rgba(6, 17, 27, 0.54);
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 0;
  padding-top: 10%;
  transition: 0.5s;
  -webkit-transition: 0.5s;
}
.sideMenu div {
  line-height: 3em !important;
  cursor: pointer;
}
.top {
  padding-left: 1%;
}
.top h3 {
  text-align: left;
  letter-spacing: 11px;
  /* margin: 0; */
}
.top span {
  background: rgba(255, 255, 255, 0.22);
  padding: 5px 0px 5px 10px;
  color: rgb(33, 99, 158);
  text-transform: capitalize;
  letter-spacing: 13px;
}
.title {
  margin-top: 11%;
}
@media screen and (max-width: 414px) {
  .title {
    margin-top: 62%;
  }
}
@media screen and (max-width: 680px) and (min-width: 415px) {
  .title {
    margin-top: 30%;
  }
}
@media screen and (max-width: 1098px) and (min-width: 681px) {
  .title {
    margin-top: 22%;
  }
}

@media screen and (max-width: 1111px) and (min-width: 1099px) {
  .title {
    margin-top: 18%;
  }
}
@media screen and (min-width: 1112px) {
  .title {
    margin-top: 13%;
  }
}

@media screen and (max-width: 1024px) and (max-height: 600px) {
.title {
    margin-top: 13%;
  }
}
.title h3 {
  font-size: 3em;
  text-shadow: 1px 1px 2px #000;
  margin-bottom: 4%;
}
@media screen and (max-width: 280px) {
  .title h3 {
    font-size: 2em;
  }

}
.banner {
  background-color: #0086fe;
  color: white;
  margin-bottom: 3%;
  padding-top: 2%;
  width: 100%;
  height: 100vh;
  position: relative;
}
.bannerMobile {
  background-color: #0086fe;
  color: white;
  margin-bottom: 3%;
  padding-top: 2%;
  width: 100%;
  height: 88.5vh;
  position: relative;
}

.banner > div > div {
  font-family: 'Josefin Sans', sans-serif;
  margin: 1% auto;
  text-align: center;
  line-height: 200%;
}
.bannerMobile > div > div {
  font-family: 'Josefin Sans', sans-serif;
  margin: 1% auto;
  text-align: center;
  line-height: 200%;
}
.bannerBtn {
  display: block;
  margin: 0 auto;
  background: transparent;
  /* border: 2px solid #bfc0c0; */
  border: 0px;
  border-radius: 5px;
  letter-spacing: 1px;
  padding: 0.5% 0.5%;
  margin-top: 1%;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); /* https://ithelp.ithome.com.tw/articles/10202248 */
}
.bannerBtnWord {
  /* background: linear-gradient(
    rgb(105, 105, 105) 0%,
    rgb(192, 192, 192) 33.3%,
    rgb(211, 211, 211) 66.6%,
    rgb(105, 105, 105) 100%
  ); */
    background: linear-gradient(
    #042F59 0%,
    #1A4C80 33.3%,
    #3A70A6 66.6%,
    #042F59 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.5em;
  background-size: 100% 300%;
  animation: text-animation 2s infinite linear;
  cursor: pointer;
}
.bannerBtnArrow {
  transition: 1s linear;
}

.bannerName,
.bannerText {
  text-shadow: 1px 1px 2px #000;
  font-size: 2.2em;
}
.bannerName {
  color: #ecb731;
}
.bannerText {
  color: #171717;
}
.bannerSen {
  margin-top: 2%;
  text-shadow: 1px 1px 2px #000;
  letter-spacing: 3px;
}
.burger {
  color: black;
}

@media screen and (max-width: 280px) {
  .bannerName, .bannerText {
    font-size: 2em;
  }
  .bannerSen {
    font-size: small;
  }
}

@keyframes text-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -150%;
  }
}

@keyframes sideMenu-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
@media screen and (max-width: 375px) {
    .menu {
      right: 9%;
    }
    .sideMenu {
      padding-top: 37%;
    }
    .top span {
      font-size: 0.7em;
    }
}
</style>