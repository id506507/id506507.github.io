<template>
  <div class="about" id="aboutMeSection">
    <h3 class="aboutBanner">{{ $translate('關於我', 'About Me') }}</h3>
    <div class="aboutInfo">
      <div>{{ $translate('姓名', 'Name') }}:</div>
      <div>{{ info.eng.name }}</div>
      <div>{{ $translate('電郵', 'Email') }}:</div>
      <div>{{ info.eng.email }}</div>
      <div>{{ $translate('教育', 'Eduation') }}:</div>
      <div>{{ $translate(info.chi.edu, info.eng.edu) }}</div>
      <div>{{ $translate('語言', 'Language') }}:</div>
      <div>{{ $translate(info.chi.lang, info.eng.lang) }}</div>
    </div>
    <a
      href="https://smailnchuedutw-my.sharepoint.com/:b:/g/personal/s103056023_smail_nchu_edu_tw/Ea-RNN8WQHNLrxNTMcYnYDoB8njiCBHijUoGw2htZIUTYA?e=Nzyf5z"
      target="_blank"
    >
      <button class="cvBtn">
        <i class="el-icon-download cvIcon"></i>
        {{ $translate('查看 CV', 'View CV') }}
      </button>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      info: {
        eng: {
          name: 'Angus Chan',
          email: 'chantszching1109@gmail.com',
          edu: 'Bachelor Degree',
          lang: 'native Cantonese, fluent Mandarin, intermediate English, beginner Korean',
        },
        chi: {
          name: '陳子晴',
          email: 'chantszching1109@gmail.com',
          edu: '大學',
          lang: '流利廣東話、流利國語、一般英文，正在學習韓文',
        },
      },
    }
  },
})
</script>

<style>
a {
  text-decoration: none;
}
a :hover {
  color: black;
}
.about {
  font-family: 'Lato', sans-serif;
  padding: 1%;
  margin-bottom: 3%;
}

.aboutBanner {
  text-align: center;
  /* font-size: 2.3em; */
}

.aboutInfo {
  /* text-align: center; */
  margin: 1% 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2%;
  grid-row-gap: 15%;
  /* transform: translate(0%, 0%); */
}

.aboutInfo div:nth-of-type(odd) {
  /* text-indent: 80%; */
  text-align: right;
}

.aboutInfo div:nth-of-type(even) {
  color: #8a8a8a;
}

/* .aboutInfo div {
    margin-bottom: 1%;
    letter-spacing: 0.5px;
} */
@media screen and (max-width: 280px) {
  .aboutInfo div {
    font-size: small;
  }
}

.cvBtn {
  display: block;
  margin: 0 auto;
  margin-top: 4%;
  background: #66b1ff;
  border: none;
  color: #fff;
  padding: 1%;
  font-size: 1em;
  cursor: pointer;
}

@media screen and (max-width: 1075px) {
  .cvBtn {
    margin-top: 10%;
  }
}

@media screen and (max-width: 650px) {
  .cvBtn {
    margin-top: 20%;
  }
}

.cvBtn a {
  text-decoration: none;
  color: white;
}

.cvBtn a:hover,
.cvBtn a:visited {
  color: white;
}

.dlIcon {
  /* margin-right: 1%; */
  font-size: 1em;
}
</style>
