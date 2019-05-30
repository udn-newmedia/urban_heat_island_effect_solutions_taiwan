<template>
  <div id="app">
    <div class="cover">
      <div class="cover-background">
        <img :src="srcRWD(require('../public/images/' + coverImgMob1), require('../public/images/' + coverImg1))" alt="">
      </div>
      <div class="cover-content-wrapper">
        <div class="cover-content">
          <p class="subtitle">
            <span class="subtitle-background">當寶島變熱島</span>
          </p>
          <p class="title">幫都市退燒</p>
        </div>  
      </div>
    </div>
    <div class="introduction">
      <div class="container">
        <div class="content">
          <p>都會區建築密集、巷道狹小，導致風進不來、熱出不去，溫度愈來愈高。</p>
          <br>
          <p>為了幫都市退燒，各縣市推出各式解方，包含規劃讓風走的廊道、實施綠建築獎勵等措施，要減緩熱島效應，並還給居民更舒適的居住環境。</p>
          <br>
          <div class="share">
            <i class="facebook i-facebook-1"></i><i class="line i-line"></i>
          </div>
        </div>
      </div>
    </div>
    <scrollVideoWind></scrollVideoWind>
    <div class="wind-wrapper">
      <div class="container">
        <div class="content">
          <p>為城市通風</p>
          <br>
          <p>都市建築密集、巷道狹小，導致風進不來、熱出不去，溫度愈來愈高。為了讓城市通風，新北市首創「風廊環境管制」，限制「水岸第一排」建築的最大面寬，留一條路讓風走。</p>
          <br>
          <p>新北市在2013年訂定新北市板橋江翠北側地區都市設計審議原則，限制「水岸第一排」垂直河道面的建築最大面寬僅能蓋7成，且全區建築需退縮4公尺作為人行道，即風不只進得來，更留有走廊可深入城市。</p>
          <br>
          <p>由於江翠北側是一整塊總計超過80公頃重畫區，有長達5,700米的水岸線，新北市城鄉局以此作為風廊示範地，目前共有19個建案。參與其中建案的建築師林秀芬表示，建築物中間有空隙，有助疏通建築物的熱能。</p>
          <br>
          <p>長期研究都市風廊道的林子平指出，全台目前只有新北、台南沙崙特定區有要求留20公尺廊道，面對嚴峻的都市通風問題，國土計畫以及縣市政府對應的太少，目前建築有太陽日照數管制，或許未來建築基地也可針對通風管制，公園配置狹長型，有利風流動。</p>
          <br>
          <p>「西側被擋住，內部就越無可救藥」，林子平說，海線是迎風第一道牆，規範要越嚴格，才能讓風順利吹向陸地，大量灌木可能會降低城市風速，因此建議行道樹選擇樹冠高一點的樹種。</p>
          <br>
        </div>
      </div>
    </div>
    <scrollVideoGreen></scrollVideoGreen>
    <div class="green-wrapper">
      <div class="container">
        <div class="content">
          <p>讓熱島變綠島</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p> 補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
        </div>
      </div>
    </div>
    <scrollVideoWater></scrollVideoWater>
    <div class="water-wrapper">
      <div class="container">
        <div class="content">
          <p>讓熱島變綠島</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p> 補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
          <p>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</p>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import srcRWD from './mixin/srcRWD.js'
import ScrollMagic from 'scrollmagic'
import scrollVideoWind from './components/scrollVideoWind.vue'
import scrollVideoGreen from './components/scrollVideoGreen.vue'
import scrollVideoWater from './components/scrollVideoWater.vue'

export default {
  name: 'app',
  data () {
    return {
      coverImg1: 'heat_island_effect_solutions_taiwan_bg.jpg',
      coverImgMob1: 'heat_island_effect_solutions_taiwan_bg_mob.jpg',
      windowheight: null,
      scrollpos: window.pageYOffset/50,
      targetscrollpos: null,
      accel: 0,
      accelamount: 0.01,
      bounceamount: 0,
      intervalMark: 0,
      videoPosition: 0
    }
  },
  mixins: [srcRWD],
  components: {
    scrollVideoWind,
    scrollVideoGreen,
    scrollVideoWater
  },
  mounted () {


    var controller = new ScrollMagic.Controller({});
    
		// get all slides
    var cover = document.querySelector(".cover-background");

    new ScrollMagic.Scene({
          triggerElement: cover,
          triggerHook: 'onLeave',
          duration: "100%"
				})
				.setPin(cover, {pushFollowers: false})
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);

  },
  methods: {

  },
}
</script>

<style lang="scss">
@import './assets/baseSCSS/reset.scss';
@import './assets/baseSCSS/UdnFontSize.scss';
@import './assets/baseSCSS/theme.scss';
// @import '../node_modules/bootstrap/scss/bootstrap.scss';

html, body {
  margin: 0;
}
#app {
  .cover {
    .cover-background {
      height: 100vh;
      img {
        width: 100%;
      }
    }
    .cover-content-wrapper {
      height: 100vh;
      position: relative;
      display: flex;
      z-index: 10;
      padding: 0 27px;
      align-items: center;
      max-width: 960px;
      margin: 0 auto;
      .title {
        background-color: #ffffff;
        font-size: 28px;
        font-weight: bold;
        padding: 5px 20px 5px 16px; 
      }
      .subtitle {
        .subtitle-background {
          background-color: #ffffff;
          padding: 0px 20px 0px 16px; 
        } 
        margin-bottom: -5px;
      }
    }
  }
  .introduction {
      position: relative;
      z-index: 100;
      background-color: #f2f2f2;
      padding-top: 154px;
      .share {
        padding: 93.8px 0 181px 0;
        text-align: center;
        font-size: 37px;
      }
    }


  // .panel {
	// 	width: 100%;
	// }
  // .cover {
  //   height: 100vh;
  //   background: url("../public/images/heat_island_effect_solutions_taiwan_bg.jpg") no-repeat;
  // }
  // .main-title {
  //   height: 100vh;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex-direction: column;
  // }
  // .content {
  //   background-color: white;
  //   min-height: 100vh;

  // }
  // .scrollVideo {
  //   position: relative;
  //   .video-height {
  //       display: block;
  //       height: 4000px;
  //   }
  //   .video-player {
  //       position: absolute;
  //       width: 100%;
  //       height: 100vh;
  //       object-fit: fill;
  //   }
  //   .section-wrapper {
  //     width: 100%;
  //     color: white;
  //     position: absolute;
  //     .section {
  //       height: 100vh;
  //       z-index: 100;
        
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //     }
  //   }
  // }
}
</style>
