<template>
  <div class="services" id="services">
      <h3>{{$translate('我能做什麼','My Services')}}</h3>
      <div class="servicesFlex" v-if="!(mobile || mobileWidth)">
          <div v-for="(item, index) in $translate(services.chi, services.eng)" :key="index">
              <i :class="item.icon + ' itemIcon'"></i>
              <h4 class="itemTitle">{{item.title}}</h4>
              <p class="itemDetail">{{item.detail}}</p>
          </div>
      </div>
      <div v-else>
          <el-carousel :autoplay="false" arrow="always">
              <el-carousel-item v-for="(item, index) in $translate(services.chi, services.eng)" :key="index">
                  <div class="">
                    <div class="mobile-carouselIcon"><i :class="item.icon + ' itemIcon'"></i></div>
                    <h4 class="itemTitle mobile-carouselTitle">{{item.title}}</h4>
                    <p class="itemDetail mobile-carouselDetail">{{item.detail}}</p>                      
                  </div>
              </el-carousel-item>
          </el-carousel>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            services: 
            {
                eng: [
                    {
                        title: 'Web Development',
                        detail: 'During my university, I have been working on web page programming for my final project. I also write a web page for a company.',
                        icon:'el-icon-monitor',
                    },
                    {
                        title: 'Video Editing',
                        detail: 'I was the member of secondary school photography team and I won an video shooting contest award. So I have experiences of shooting and editing.',
                        icon: 'el-icon-video-camera',
                    },{
                        title: 'IT Support',
                        detail: 'I was a network administrator during my university, so I have experiences of maintain the network and computer equipments.',
                        icon: 'el-icon-setting'
                    }
                ],
                chi: [
                    {
                        title: '網頁開發',
                        detail: '本人在大學時期在畢業專題中擔任網頁編寫的部份，也有為公司編寫網頁。',
                        icon:'el-icon-monitor',
                    },
                    {
                        title: '影片後製',
                        detail: '因為是中學學校短片班的成員，而且當時也有獲得一些關於影片拍攝的獎項。',
                        icon: 'el-icon-video-camera',
                    },{
                        title: 'IT支援',
                        detail: '因為在大學時候有擔任網絡管理員，因此有維護網絡及其他電腦設備的經驗。',
                        icon: 'el-icon-setting'
                    }                    
                ]
            },
            mobile: false,
            mobileWidth: false
        }
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.mobile = true;
            }
            else {
                this.mobile = false;
            }
            console.log(this.mobile);
        },
        isMobileWidth() {
            var width = window.screen.availWidth;
            if(width <= 414) {
                this.mobileWidth = true;
            } else {
                this.mobileWidth = false;
            }
        }
    },
    mounted() {
        this.isMobile();
    }
})
</script>

<style>
.services {
    background: #171717;
    padding-top: 2%;
    padding-bottom: 2%;
}
.services h3 {
    color: white;
}
.servicesFlex {
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1%;
}
.servicesFlex > div {
    background-color: white;
    flex: 1;
    text-align: center;
    margin: 6px;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
}
.itemTitle {
    font-size: 20px;
    margin-bottom: 2%;
}
.itemDetail {
    color: #999;
    font-size: 15px;
    line-height: 2em;
}
.itemIcon {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 2px solid #0086fe;
    line-height: 57px;
    border-radius: 3px;
    font-size: 25px;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    color: #252525;
}
.mobile-carouselTitle {
    color: white;
    text-align: center;
}
.mobile-carouselDetail {
    text-align: center;
    margin: 5%;
}
.mobile-carouselIcon {
    color: white;
    text-align: center; /*text-align: center;主要用於inline elements*/
}
.mobile-carouselIcon i {
    color: white;
}
.el-carousel__arrow i {
    color: #0086fe;
    font-size: large;
    font-weight: 900;
}
</style>