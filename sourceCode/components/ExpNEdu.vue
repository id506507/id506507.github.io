<template>
  <div class="expNEdu" id="expNEdu">
    <div class="exp">
      <h3>{{ $translate('工作經驗 & 教育程度', 'Experience & Education') }}</h3>
      <div>
        <h4 class="workTitle">
          <span>{{ $translate('工作經驗', 'WORK EXPERIENCE') }}</span>
        </h4>
        <div
          v-for="(item, index) in $translate(work.chi, work.eng)"
          :key="index"
          class="workDetail"
        >
          <div class="workDetailDate">
            <i class="el-icon-date"></i><span>{{ item.date }}</span>
          </div>
          <div class="workDetailTitleDetail">
            <div>
              <span class="workDetailTitle">{{ item.title }}, </span
              ><span class="workDetailOrgan">{{ item.organization }}</span>
            </div>
            <ul>
              <li v-for="(detail, di) in item.detailList" :key="di">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="workTitle">
        <span>{{ $translate('教育程度', 'EDUCATION') }}</span>
      </h4>
      <div
        v-for="(item, index) in $translate(edu.chi, edu.eng)"
        :key="index"
        class="workDetail"
      >
        <div class="workDetailDate">
          <i class="el-icon-date"></i>{{ item.date }}
        </div>
        <div class="workDetailTitleDetail eduDetail">
          <div>{{ item.title }}</div>
          <div>{{ item.detail }}</div>
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
      work: {
        eng: [
          {
            date: '2025.04 - 2025.07',
            title: 'Analyst Programmer',
            organization: 'Global Logistics System (HK) Co., Ltd',
            detailList: [
              'Contributed to developing an air freight booking website, facilitating seamless connections between users and airlines by enabling them to find and book flights based on cargo size, weight, origin, and destination. Designed and implemented backend solutions using C#, .NET, and MySQL, integrating diverse airline data and requirements to ensure system compatibility and functionality.',
            ],
          },
          {
            date: '2022.03 - 2025.03',
            title: 'Analyst Programmer',
            organization: 'Konew Fintech Corporation Limited',
            detailList: [
              'Successfully revamped Loan Systems (used for over 20 years) into a Centralized Loan System in one year, developed using Java Spring Boot, Angular, SQL, Redis and Azure Cloud. Participating in both front-end and back-end development. This transformation aimed to enhance employee efficiency and streamline company operations.',
              'Owner of the RPA module of the Centralized Loan System, developed using Java. This module automated the retrieval of property valuations and property reference number (PRN), significantly improving the efficiency of the loan approval process.',
              'Maintained a TU RPA that utilizes Python and Selenium to obtain TransUnion Credit Reports.',
              'Assisted Transition from TransUnion to Multiple Credit Reference Agencies (MCRA). Revamped TU RPA to schedule job using SFTP and API. Successfully reducing the wait time for credit reports by 50% and minimizing errors in data processing.',
              'Developed a land search RPA. Use Selenium to get information about residential units.',
              'Owner of a schedule job platform for legacy system, developed using C#. This platform implemented a batch Excel reader, automatic email reminders, generated reports, and updated data to database for internal user. This platform enhanced operational efficiency and streamlined data management processes.',
            ],
          },
          {
            date: '2019.04 - 2021.09',
            title: 'Senior Programmer, Programmer',
            organization: 'Centaline Data Technology Limited',
            detailList: [
              'Developed a map view property searching website using Google Maps API and Nuxt.js, making it easier for customers to visualize property distribution.',
              'Revamped Centaline City Leading Index website. Developed a user-friendly platform for internal users to upload data efficiently using .NET MVC. Created APIs to facilitate real-time data retrieval and integration, ensuring timely updates for website display thereby enhancing data clarity for customers and simplifying data management for internal users using C#.',
              'Revamped property searching website using Nuxt.js, enhance customer property search experience.',
              'Enhanced API to support multilingual capabilities.',
            ],
          },
          {
            date: '2018.09 - 2018.12',
            title: 'Web Developer',
            organization: 'Freelance',
            detailList: [
              "Revamped eBay Automotive Parts Sales Website from scratch using plain HTML and CSS, assisting the store in showcasing new products and expediting customers' ability to find the items they want.",
            ],
          },
          {
            date: '2015.09 - 2018.06',
            title: 'Network administrator',
            organization: 'National Chung Hsing University Female Dormitory',
            detailList: [
              'Assisted in managing dormitory networks, troubleshooting connectivity issues for resident students, and communicating with the university to improve overall network usage experience.',
            ],
          },
        ],
        chi: [
          {
            date: '2025.04 - 2025.07',
            title: '程式分析員',
            organization: '傳訊香港有限公司',
            detailList: [
              '參與航空貨運預訂網站的開發，促進用戶與航空公司之間的無縫銜接，協助用戶根據貨物大小、重量、起點和目的地查找並預訂航班。設計並實現後端解決方案，使用C#、.NET和MySQL，整合多家航空公司的數據和需求，確保系統兼容性和功能性。',
            ],
          },
          {
            date: '2022.03 - 2025.03',
            title: '程式分析員',
            organization: '康業金融科技集團有限公司',
            detailList: [
              '成功地將使用超過 20 年的貸款系統改造為集中式貸款系統(CLS)，並在一年內完成。做用了Java Spring Boot, Angular, SQL, Redis 和Azure Cloud，參與了前端和後端開發。這一轉型旨在提高員工效率，簡化公司運作。',
              'CLS的 RPA 模塊擁有者，使用Java實作，實現了自動獲取財產估價和財產參考號（PRN），顯著提高了貸款批准過程的效率。',
              '維護了一個使用 Python 和 Selenium 獲取 TransUnion 信用報告的 TU RPA。',
              '協助從 TransUnion 遷移到多個信用參考機構（MCRA）。重新設計 TU RPA 以使用 SFTP 和 API 排程任務，成功將信用報告的等待時間縮短了 50%，並減少了數據處理中的錯誤。',
              '開發了一個土地搜索 RPA，使用 Selenium 獲取有關住宅單位的信息。',
              '舊系統的排程任務平台擁有者，該平台實現了批量 Excel 讀取、自動電子郵件提醒、生成報告以及將數據更新到數據庫，供內部用戶使用。這個平台提高了運營效率，簡化了數據管理流程。',
            ],
          },
          {
            date: '2019.04 - 2021.09',
            title: '高級程式員，程式員',
            organization: '中原數據科技有限公司',
            detailList: [
              '開發了一個使用 Google Maps API和 Nuxt.js 的地圖視圖物業搜索網站，使客戶更容易可視化物業分佈。',
              '改進了中原城市領先指數網站。使用 .NET MVC 為內部用戶開發了一個友好的平台，以高效上傳數據。使用 C# 創建了 API 以促進實時數據檢索和集成，確保網站顯示的及時更新，從而提高數據的清晰度，簡化內部用戶的數據管理。',
              '使用 Nuxt.js 改進了物業搜索網站，提升了客戶的物業搜索體驗。',
              '增強了 API 以支持多語言功能。',
            ],
          },
          {
            date: '2018.09 - 2018.12',
            title: '網頁編寫',
            organization: 'Freelance',
            detailList: [
              '從頭開始使用純 HTML 和 CSS 改進 eBay 汽車零件銷售網站，幫助商店展示新產品，加快客戶找到所需商品的能力。',
            ],
          },
          {
            date: '2015.09 - 2018.06',
            title: '網絡管理員',
            organization: '國立中興大學女生宿舍',
            detailList: [
              '協助管理宿舍網絡，為住戶學生排除連接問題，並與校方溝通以改善整體網絡使用體驗。',
            ],
          },
        ],
      },
      edu: {
        eng: [
          {
            date: '2014 - 2018',
            title: 'National Chung Hsing University',
            detail:
              'I graduated from Computer Science and Engineering at NCHU. I served as the planner for the summer camp, the network administrator, and the member of the student association for the CSE department. This educational qualification meets the standard of a local Bachelor (Honours) at Level 5 of the Hong Kong Qualifications Framework certified by the Hong Kong Council for Accreditation of Academic and Vocational Qualifications.',
          },
          {
            date: '2008 - 2014',
            title: 'TWGHs Yau Tze Tin Memorial College',
            detail:
              'I graduated from YTTMC, where I chose ICT and Biology as my electives. I served as the chairperson of the Computer Society and was a cadre of the Science Society. Additionally, I organized a computer exhibition. I was also a member of the school photography team, participating in numerous competitions and receiving several awards.',
          },
        ],
        chi: [
          {
            date: '2014 - 2018',
            title: '國立中興大學',
            detail:
              '在 國立中興大學就讀 資訊科學與工程學系。在大學時，我有擔任過不少職位，包括網路管理員、營隊幹部，有時候也會參加系學會的工作。該教育資格符合香港資歷架構第5級的本地學士（榮譽）學位標準，並由香港學術及職業資歷評審局認證。',
          },
          {
            date: '2008 - 2014',
            title: '東華三院邱子田紀念中學',
            detail:
              '在東華三院邱子田紀念中學完成我的中學課程。我的選修科為生物科、資訊及通訊科技科。我在中學時為電腦學會主席、科學學會幹部，舉辦過電腦科科展。而且，我是學校短片班的成員，也有參加不少比賽，獲得不少獎項。',
          },
        ],
      },
    }
  },
})
</script>

<style>
.expNEdu {
  margin-top: 3%;
}
.exp {
  margin-bottom: 2%;
}
@media screen and (max-width: 450px) {
  .exp > h3 {
    font-size: 2em;
  }
}
@media screen and (max-width: 400px) {
  .exp > h3 {
    font-size: 1.3em;
  }
}
.workTitle {
  margin-left: 10%;
  margin-bottom: 2%;
  color: #0086fe;
  font-size: 1.5rem;
}
.workTitle span {
  border-bottom: 3px solid black;
}
@media screen and (max-width: 280px) {
  .workTitle {
    font-size: 1em;
    margin-bottom: 5%;
  }
}
@media screen and (max-width: 393px) {
  .workTitle {
    font-size: 1.2rem;
  }
}
.workDetail {
  /* margin: 0 auto;
     line-height: 2em; */
  margin-bottom: 3%;
  display: flex;
  margin-left: 10%;
}
@media screen and (min-width: 1117px) {
  .workDetailDate {
    width: 15%;
  }
}

@media screen and (max-width: 1117px) {
  .workDetail {
    display: grid;
  }
  .workDetailDate {
    margin-bottom: 2%;
  }
}

.workDetailTitleDetail {
  display: grid;
  grid-gap: 8px;
  letter-spacing: 1.5px;
  width: 80%;
  /* grid-template-rows: 1fr 1fr; */
}
.workDetailTitleDetail div:nth-of-type(odd) {
  color: rgb(3, 169, 245);
  font-weight: 400;
  font-size: 25px;
}

.workDetailTitleDetail div:nth-of-type(even) {
  color: #777;
}
.workDetailOrgan {
  color: #ecb731;
}

.workDetailTitleDetail ul {
  color: #777;
  padding-left: 1rem;
}
li:not(:last-child) {
  margin-bottom: 1%;
}
@media screen and (max-width: 280px) {
  .workDetailTitleDetail div:nth-of-type(odd) {
    font-size: 20px;
  }
  .workDetailTitleDetail div:nth-of-type(even) {
    font-size: 13px;
  }
  .workDetail {
    margin-bottom: 10%;
  }
}
@media screen and (max-width: 393px) {
  .workDetailTitleDetail div:nth-of-type(odd) {
    font-size: 18px;
  }
  .workDetailTitleDetail div:nth-of-type(even) {
    font-size: 13px;
  }
  .workDetail {
    margin-bottom: 10%;
  }
}
@media screen and (max-width: 721px) {
  .workDetail {
    padding-right: 2%;
  }
}
@media screen and (max-width: 375px) {
  .workDetailDate {
    float: none;
  }
}
@media screen and (max-width: 512px) {
  .workDetailTitle {
    display: block;
  }
}
</style>
