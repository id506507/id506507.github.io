<template>
  <div class="skill" id="skill">
    <h3>{{ $translate('我的技能', 'My Skills') }}</h3>
    <!-- <ul class="skillList">
      <li v-for="(item, index) in skillList" :key="index" class="skillItem">
        {{ item }}
      </li>
    </ul> -->
    <div v-for="(item, index) in skillList" :key="index">
      <h2 class="skillSubTitle">
        {{ $translate(item.display.chi, item.display.eng) }}
      </h2>
      <div>
        <div
          v-for="(skill, sIndex) in item.items"
          :key="sIndex"
          style="text-align: center; margin-bottom: 5px"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      skillList: [
        {
          display: { eng: 'Backend Development', chi: '後端關發' },
          items: [
            'Java Spring Boot',
            'C# .NET / .NET Core',
            'Python',
            'SQL (MS SQL, PostgreSQL)',
            'Redis',
            'MVC',
          ],
        },
        {
          display: { eng: 'Frontend Development', chi: '前端開發' },
          items: [
            'Angular',
            'Vue.js / Nuxt.js',
            'HTML',
            'TypeScript / JavaScript',
            'CSS',
          ],
        },
        {
          display: {
            eng: 'Cloud, Search, Automation',
            chi: '雲端、搜尋、自動化',
          },
          items: ['Azure Cloud', 'Elasticsearch', 'Selenium'],
        },
      ],
    }
  },
})
</script>

<style>
h3 {
  margin-bottom: 1%;
}

.skillSubTitle {
  text-align: center;
  margin: 2% auto 1% auto;
}

.skill {
  background-image: linear-gradient(grey, grey), url('../static/skillBG.jpg');
  color: white;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-blend-mode: multiply;
  background-attachment: fixed;
  padding: 3%;
}

.skillList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  list-style: none;
}

@media screen and (max-width: 280px) {
  .skillList {
    font-size: small;
  }
}

.skillItem {
  /* padding-left: 15%; */
  margin-bottom: 3%;
}

.skillText {
  margin-bottom: 1%;
}

.percentage {
  float: right;
}

/* IE10 */
progress {
  border-radius: 0px;
  width: 100%;
  height: 20px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: #0086fe;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
}

/* Firefox */
progress::-moz-progress-bar {
  background: #0086fe;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
}

/* Chrome */
progress::-webkit-progress-value {
  background: #0086fe;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
}

@media screen and (max-width: 1000px) {
  .skillSubTitle {
    margin: 2% auto 3% auto;
  }
}
</style>
