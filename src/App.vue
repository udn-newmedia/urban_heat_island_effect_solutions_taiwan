<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar head-color="#fff" icon-color="#000">
      <a @click="handleGA('menu bar_main', 'M1_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect" target="_blank">高溫會殺人</a>
      <a  class="active" @click="handleGA('menu bar_main', 'M2_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan" target="_blank">幫都市退燒</a>
      <a @click="handleGA('menu bar_main', 'M3_main')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_abroad" target="_blank">新加坡綠化降溫</a>
    </HeadBar>
    <div class="cover">
      <div class="container">
        <div class="cover-content">
          <!-- <p class="subtitle">
            <span class="title-background">
              當寶島變熱島
            </span>
          </p> -->
          <p class="title">
            <span class="title-background">
              幫都市退燒
            </span>    
          </p>
        </div>
      </div>
      <div :class="{active: isCoverActive}" class="cover-background">
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
            <i @click="FacebookShare(facebookUrl)" class="facebook i-facebook-1"></i>
            <i @click="LineShare(lineUrl)" class="line i-line" ></i>
          </div>
        </div>
      </div>
    </div>

    <scrollVideoWind>
      <div slot="quote1">
         <p>都市溫度愈來愈高，不斷興建的高樓擋住風的去路，讓熱無法散去。</p>
      </div>
      <div slot="quote2">
         <p>新北市藉由風廊道的設計，讓河面涼爽的風從5,700米的水岸吹進板橋江翠北側重劃區，為都市降溫、改善熱島效應。</p>
      </div>
      <div slot="quote-title">
         <div>熱島效應解方─風</div>
      </div>
    </scrollVideoWind>

    <div class="wind-wrapper paragraph">
      <div class="container">
        <div class="content">
          <h3 class="wind-title paragraph-title">留一條路讓風走</h3>
          <br>
          <p>為打造萬坪樹海、千里藍帶，建商常把公園、水岸第一排蓋好蓋滿，獨霸山河的景觀宅擋住了風，讓城市更炎熱。新北市政府率全國之先，在板橋江翠北側地區限制建築面寬，最多只能蓋到7成，剩下的空間讓路給風，甚至得模擬環境風場，藉此讓「熱島」降溫。</p>
          <br>
          <p>新北市政府在102年公布「新北市板橋（江翠北側地區）都市設計審議原則」，選定淡水河、新店溪與大漢溪交會的江翠北側重劃區，在102年正式實施；這片土地只有117公頃，只佔新北市區土地的千分之一，儘管範圍不大，卻是台灣個第一起針對河岸建築的風環境管制規範。</p>
          <br>
          <p>長期研究都市風廊道的成功大學建築系教授林子平指出，地表建築物越多，代表粗糙度越高，風速越弱，如果建築物蓋在風廊道上，就會阻礙都市氣候調節。</p>
          <br>
          <p>根據新北市的規定，為了讓河風能吹入都市，河岸建築要從矮胖變為瘦高，在江翠北側區域的建案，建物最大面寬不能大於基地面寬的70%，換句話說，如果基地寬度有100公尺，建築物寬度的總和得在70公尺以內；街廓第一排的高層建築，在都市設計審議時，還要提出環境風場模擬成果。</p>
          <br>
          <p>新北市城鄉局表示，限制河岸建築的寬度，保留30%以上的空間，希望拉大建築物的棟距，避免過去把水岸第一排蓋好蓋滿，影響整體景觀，也讓風能穿過水岸第一排建築，深入後排建築，來降低都市熱島效應。</p>
          <br>
          <p>林子平指出，全台目前只有新北、台南沙崙特定區有要求留20公尺廊道，面對嚴峻的都市通風問題，國土計畫以及縣市政府對應的太少，目前建築有太陽日照數管制，或許未來建築基地也可針對通風管制，公園配置狹長型，有利風流動。</p>
          <br>
        </div>
      </div>
    </div>

    <scrollVideoGreen>
      <div slot="quote1">
         <p>每到夏日，涼爽的林蔭大道下總是擠滿乘涼的民眾。</p>
      </div>
      <div slot="quote2">
         <p>樹只要長得好，不僅能為民眾遮蔭，還能發揮「綠」島功效，為城市降溫。</p>
      </div>
      <div slot="quote-title">
         <div>熱島效應解方─綠</div>
      </div>
    </scrollVideoGreen>

    <div class="green-wrapper paragraph">
      <div class="container">
        <div class="content">
          <h3 class="green-title paragraph-title">讓熱島變綠島</h3>
          <br>
          <p>都市正在發燒，綠色植栽就像帖退燒藥，為城市帶來降溫效果。但台灣六都綠覆率不僅低於法定門檻10%，除高雄市外，其餘各都連5%都達不到，加上行道樹問題叢生，難怪都會區不斷飆高溫。學者呼籲政府妥善規劃都會區綠地及行道樹，讓樹長得好、長得大，才能發揮都市「綠」島的功效。</p>
          <br>
          <p>台灣都會區每人平均擁有的綠地面積，桃園市、新北市低於4平方公尺，台中市4.5平方公尺，台北市、台南市約5平方公尺，只有高雄市9.26平方公尺，遠低於國際標準建議的20-30平方公尺。六都綠地覆蓋率也低於都市計畫法規定的10%門檻，除高雄外，各都都低於5%。</p>
          <br>
          <p>都市中的行道樹數量龐大，原本都能調節微氣候，但因規劃不當、養護不佳，使得功效大打折扣。以台北市大安區兩處人行道為例，農委會林試所實測5月25日下午1-2點的人行道氣溫，當天台北測站下午1點的氣溫為31.6度，忠孝東路三段測得33.7度，仁愛路三段測得31.1度。</p>
          <br>
          <p>林試所副所長吳孟玲說，仁愛路行道樹總數3800多棵，樹種多元有榕樹、樟樹、楓香等，道路中央的分隔島寬廣，行道樹長得好，樹冠串連成涼爽的林蔭大道，能發揮降溫效果；反觀忠孝東路三段的行道樹只有一排，樹蔭不夠濃密，降溫效果打折扣。</p>
          <br>
          <p>「從樹穴到修剪方法，行道樹問題很多。」吳孟玲說，樹的樹冠有多大，樹穴就應該留多大，樹穴標準為樹腰直徑的10-15倍，至少要有2-3倍，但前項標準幾乎難有行道樹達標；修剪更是門學問，不能一律剃光頭、理平頭，下刀時更要避免破壞維管束，還要避免枝幹撕裂傷，以免腐朽菌入侵。</p>
          <br>
          <p>學者分析，行道樹的樹冠能阻擋太陽輻射，創造樹蔭空間，葉片的蒸散作用可吸收熱能，都能帶來降溫效果；樹木、植栽底層的土壤屬於透水層，比起會吸熱的不透水柏油、水泥鋪面，更能降溫；中研院研究也發現，綠地的環境效益與空間結構有關，完整、大型綠地比破碎化的土地更有功效，如果有多塊小型綠地，應想辦法串連起來，可發揮更高效益。</p>
          <br>
          <br>
        </div>
      </div>
    </div>

    <scrollVideoWater>
      <div slot="quote1">
         <p>夏天高溫時，民眾懂得戲水消暑。</p>
      </div>
      <div slot="quote2">
         <p>那麼如果能把溪流的水引入都市中，是不是也能讓都市戲水消暑，帶走大量的熱？</p>
      </div>
      <div slot="quote-title">
         <div>熱島效應解方─水</div>
      </div>
    </scrollVideoWater>


    <div class="water-wrapper paragraph">
      <div class="container">
        <div class="content">
          <h3 class="water-title paragraph-title">用水廊為都市降溫</h3>
          <br>
          <p>高雄學界倡議開闢都市水廊，水體蒸散降溫外，水流也會帶動風的流動。高雄鐵路地下化工程為高雄帶來「水綠園道」的契機，學者想像為高雄都會區織起水廊網絡，從高屏溪藉重力引水向西，打通曹圳道、後勁溼、愛河流域、鳳山溪加前鎮河水系，水起風生為城市降溫。</p>
          <br>
          <p>前屏東縣環保局長、高苑科大綠環境學程兼任講師魯台營說，在冷氣機還很遙遠的年代，小時候當教室熱的受不了，老師就喊：值日生來，在地上灑灑水！讓室溫得以稍降。都市水廊也是這個道理。「因為水在蒸發過程中會吸收周圍環境的熱量。」1公克水的蒸發，會吸收540卡的熱量，這也是為什麼水岸旁總是比較涼爽的原因。</p>
          <br>
          <p>魯台營表示，高雄學者約10年前提出打造高雄生態圳道的構想。高屏溪流域地形大致由東北向西南遞減，高屏溪與下游鳳山以西至出海口的水平落差約20公尺，可以利用「重力」引水，透過網狀渠道，流經整個都會區，然後出海，讓高雄真正成為「海綿城市」。</p>
          <br>
          <p>魯台營指出，在全台都會區可能只有高雄具有這樣的條件，這還是拜舊曹公圳道保留尚好之賜。高雄生態圳道若能完成，每天灌引30萬噸，水在不斷流動過程中，一定要蒸發，蒸發時會大量帶走熱，水廊並帶動風廊，為都市留下涼意。「河川渠道有淨化功能，但前提是一定要『流動』才行！」</p>
          <br>
          <br>
        </div>
      </div>
    </div>

    <div class="end">
      <div id="end-background-video">
        <video 
          ref="end-background-video"
          width="100vw"
          preload="metadata"
          :poster="srcRWD(require('../public/video/end/heat_island_effect_solutions_taiwan_end_mob_1.jpg'), require('../public/video/end/heat_island_effect_solutions_taiwan_end_1.jpg'))"
          :src="srcRWD('http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/video/end/heat_island_effect_solutions_taiwan_end_mob.mp4', 'http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/video/end/heat_island_effect_solutions_taiwan_end.mp4')"
          autobuffer
          autoplay
          loop
          muted
          playsinline
        >
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(endBackgroundVideoMob, endBackgroundVideo)" />
        </video>
      </div>
      <div class="ending">
        <div class="content">
          <div class="container"> 
            <div class="end-report">
              <p class="end-report-title">
                <span class="end-report-title-mark">當寶島變熱島</span>系列專題
              </p>
              <div class="end-report-related-first-layer">
                <div class="left">
                  <div class="box">
                    <a @click="handleGA('Related_TW', 'R1_TW')"  href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect" target="_blank">
                      <img src="../public/images/relate/relate_1.jpg" alt="">
                      <div class="describe">
                        <span>高溫會殺人</span>
                      </div> 
                    </a>           
                  </div>
                </div>
                <div class="right">
                  <div class="box">
                    <a @click="handleGA('Related_TW', 'R2_TW')" href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_abroad" target="_blank">
                      <img src="../public/images/relate/relate_3.jpg" alt="">
                      <div class="describe">
                        <span>新加坡用綠化降溫</span>
                      </div>
                    </a>         
                  </div>
                </div>
              </div>
              <div class="end-report-related-sec-layer">
                <div class="left">
                  <div class="middle-left">
                    <div class="box">
                      <a @click="handleGA('Related_TW', 'R3_TW')" href="https://udn.com/news/story/11319/3302778" target="_blank">
                        <img src="../public/images/relate/relate_4.jpg" alt="">
                        <div class="describe">
                          <span>勞工高溫休息於法有據 醫籲落實勞檢</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="middle-right">
                    <div class="box">
                      <a @click="handleGA('Related_TW', 'R4_TW')"  href="https://udn.com/news/story/11321/3283436" target="_blank">
                        <img src="../public/images/relate/relate_5.jpg" alt="">
                        <div class="describe">
                          <span>聯合筆記／走路有風的城市</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="middle-left">
                    <div class="box">
                      <a @click="handleGA('Related_TW', 'R5_TW')"  href="https://vision.udn.com/vision/story/12840/3829036" target="_blank">
                        <img src="../public/images/relate/relate_6.jpg" alt="">
                        <div class="describe">
                          <span>超「綠」辦公樓 出差要買碳排費</span>
                        </div>
                      </a>   
                    </div>
                  </div>
                  <div class="middle-right">
                    <div  class="box">
                      <a @click="handleGA('Related_TW', 'R6_TW')"  href="https://udn.com/news/story/7323/3787399" target="_blank">
                        <img src="../public/images/relate/relate_7.jpg" alt="">
                        <div class="describe">
                          <span>減緩短暫強降雨致災情況 公私合作打造新北海綿城市</span>
                        </div>
                      </a>   
                    </div>
                  </div>     
                </div>
              </div>
            </div>

            <share href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/"></share>
            <br>

            <editor>
              <div>採訪團隊：鄭朝陽、洪敬浤、徐如宜、鄭維真、張裕珍、魏翊庭</div>
              <div>影像：王騰毅、林澔一、杜建重、黃仲裕、報系資料照</div>
              <div>製作人：謝汶均</div>
              <div>視覺設計：許瑋琳</div>
              <div>網頁製作：胡凈悟</div>
              <div>監製：林秀姿、董谷音、潘如瑩</div>
              <div>2019.06.18</div>
            </editor>

            <br>
            <logo></logo>
            <br>
            <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
          </div>
        </div>
      </div>   
    </div>

    <div class="footer">
        <div class="share">
          <div class="content">
            <div class="container">
              <fb-comment  href="https://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/"></fb-comment>
            </div>
          </div>
        </div>
    </div>

    <back-top></back-top>
    <foot></foot>
    
  </div>
</template>

<script>
import srcRWD from './mixin/srcRWD.js'
import ScrollMagic from 'scrollmagic'
import Utils from 'udn-newmedia-utils'
import scrollVideoWind from './components/scrollVideoWind.vue'
import scrollVideoGreen from './components/scrollVideoGreen.vue'
import scrollVideoWater from './components/scrollVideoWater.vue'

export default {
  name: 'app',
  data () {
    return {
      coverImg1: 'heat_island_effect_solutions_taiwan_bg.jpg',
      coverImgMob1: 'heat_island_effect_solutions_taiwan_bg_mob.jpg',
      isCoverActive: true,
      windowheight: null,
      scrollpos: window.pageYOffset/50,
      targetscrollpos: null,
      accel: 0,
      accelamount: 0.01,
      bounceamount: 0,
      intervalMark: 0,
      videoPosition: 0,
      endBackgroundVideo: require('../public/video/end/heat_island_effect_solutions_taiwan_end.mp4'),
      endBackgroundVideoMob: require('../public/video/end/heat_island_effect_solutions_taiwan_end_mob.mp4'),
      lineUrl: 'http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/',
      facebookUrl: 'http://udn.com/upf/newmedia/2019_data/urban_heat_island_effect_solutions_taiwan/'
    }
  },
  mixins: [srcRWD],
  components: {
    scrollVideoWind,
    scrollVideoGreen,
    scrollVideoWater
  },
  mounted () {
    
    var end = document.querySelector("#end-background-video");
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: end,
        triggerHook: 'onLeave',
        duration: "600%"
      })
      .setPin(end, {pushFollowers: false})
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    
    (function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    }());

    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleGA (category, tagName) {
      
      
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": category,
        "eventAction": "Click_TW",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [ " + tagName + " ]"
      })
      console.log("[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [ " + tagName + " ]")
    },
    LineShare (href) {
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Line Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [line share]"
      })
      if (Utils.detectMob()) {
        // 手機
        window.open("//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + href)
      } else {
        window.open("https://lineit.line.me/share/ui?url=" + href)
      }
    },
    FacebookShare (href) {
      ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Facebook Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [facebook share]"
      })
      FB.ui({
        method: 'share',
        href: href,
      }, function(response){});
    },
    handleScroll () {
      if (this.$refs['cover']) {
        if(this.$refs['cover'].getBoundingClientRect().bottom > 0) {
          this.isCoverActive = true
        } else {
          this.isCoverActive = false
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import './assets/baseSCSS/reset.scss';
@import './assets/baseSCSS/UdnFontSize.scss';
@import './assets/baseSCSS/theme.scss';
// @import '../node_modules/bootstrap/scss/bootstrap.scss';

*, *::after, *::before {
  box-sizing: border-box;
}

html, body {
  margin: 0;
}
#app {

  .paragraph {
    padding: 148px 0;
    background-color: #fff;
    .paragraph-title {
      font-size: 22px;
      font-weight: bold;
    }
  }
  .cover {
    position: relative;
    width: 100%;
    height: 100vh;
    .container {
      height: 100vh;
      padding: 20px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      @media screen and (min-width: 321px) and (max-width: 520px) {

      }
      @media screen and (min-width: 521px) and (max-width: 768px) {
        max-width: 550px;
      }
      @media screen and (min-width: 769px) {
        max-width: 880px;
        // padding: 0 325px;
      }
      .cover-content {
        margin: auto 0;
        @media screen and (min-width: 321px) and (max-width: 520px) {
        
        }
        @media screen and (min-width: 521px) and (max-width: 768px) {
          
        }
        @media screen and (min-width: 769px) {
          margin: 0 85px;
        }
        .title-background {
          background-color: white;
          padding: 8px 16px;
        }
        .title {
          font-size: 28px;
          font-weight: bold;
          position: relative;
          @media screen and (min-width: 321px) and (max-width: 520px) {
        
          }
          @media screen and (min-width: 521px) {
            font-size: 50px;
          }
          @media screen and (min-width: 769px) {

          }
          &::before {
            content: "當寶島變熱島";
            position: absolute;
            top: -40px;
            left: 0;
            font-size: 20px;
            background-color: #fff;
            padding: 5px 16px;
            font-weight: normal;
            @media screen and (min-width: 321px) {
              top: -40px;
              padding: 8px 16px;
              font-size: 21px;
            }
            @media screen and (min-width: 521px) {
              top: -60px;
            }
            @media screen and (min-width: 769px) {
              top: -40px;
            }
          }
          .cover-title-mark {
            background-color: #fff;
            padding: 6px 16px;
            @media screen and (min-width: 321px) and (max-width: 520px) {
          
            }
            @media screen and (min-width: 521px) and (max-width: 768px) {
            }
            @media screen and (min-width: 769px) {
              padding: 0 40px 24px;
            } 
          }
        }
      }
    }

    .cover-background {
      width: 100%;
      height: 100vh;
      background-size:cover;
      background-repeat: no-repeat;
      background-image: url('../public/images/heat_island_effect_solutions_taiwan_bg_mob.jpg');
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
      @media screen and (min-width: 321px) and (max-width: 520px) {
      
      }
      @media screen and (min-width: 521px) and (max-width: 768px) {
        
      }
      @media screen and (min-width: 769px) {
        background-image: url('../public/images/heat_island_effect_solutions_taiwan_bg.jpg');
      }
      &.active {
        position: fixed;
      }
    }
  }
  .introduction {
    padding-top: 154px;
    position: relative;
    z-index: 10;
    background-color: #fff;
    min-height: 100vh;
    @media screen and (min-width: 321px) and (max-width: 520px) {
      
    }
    @media screen and (min-width: 521px) and (max-width: 768px) {
      
    }
    @media screen and (min-width: 769px) {
      padding-top: 125px 0 191px;
    }
    .share {
      padding: 93.8px 0 181px 0;
      text-align: center;
      font-size: 37px;
      color: #535353;
    }
  }
  .end {
    position: relative;
    background-color:white;
    z-index: 100;
    #end-background-video {
      video {
        width: 100%;
        height: 100vh;
        object-fit: fill;
      }
    }
    .box {
      padding: 12px 0 34px;
        &::after {
          content: '';
          display: block;
          clear: both;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {
            padding: 10px;
          }
          @media screen and (min-width: 769px) {
            padding: 10px;
          }
        }
        img {
          float: right;
          width: 100%;
          padding-bottom: 9.4px;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {      
            width: 100%;
            float: none;
          }
          @media screen and (min-width: 769px) {
            width: 100%;
            float: none;
          }
        }
        .describe {
          float: left;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {

            float: none;
          }
          @media screen and (min-width: 769px) {
            float: none;
          }
        }
        
     }
    .ending {
      // border: solid 1.5em rgba(white);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) 32%, rgba(33, 33, 33, 0.85) 74%, rgba(0, 0, 0, 0.3));
      position: relative;
      z-index: 110;
      color: white;
      padding: 500px 0 450px;
      .end-report {
        padding-bottom: 120px;
        @media screen and (min-width: 321px) and (max-width: 520px) {
          padding-bottom: 406px;
        }
        @media screen and (min-width: 521px) and (max-width: 768px) {
          padding-bottom: 123px;
        }
        @media screen and (min-width: 769px) {
          padding-bottom: 203px;
        }
        .end-report-title {
          font-size: 15px;
          padding-bottom: 10px;
          border-bottom: solid 2px #7d7d7d;
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {
            
          }
          @media screen and (min-width: 769px) {
            font-size: 25px;
            margin-bottom: 33px;
          }
          .end-report-title-mark {
            background-color:#ff0000;
            padding-right: 5px;
            font-weight: bold;
          }
        }
        .end-report-related-first-layer, .end-report-related-sec-layer {
          @media screen and (min-width: 321px) and (max-width: 520px) {
            
          }
          @media screen and (min-width: 521px) and (max-width: 768px) {
            display: flex; 
          }
          @media screen and (min-width: 769px) {
            display: flex;
            font-size: 18px;
          }

          .left, .right {
            @media screen and (min-width: 321px) and (max-width: 520px) {
            
            }
            @media screen and (min-width: 521px) and (max-width: 768px) {
              width: 50%;
              
            }
            @media screen and (min-width: 769px) {
              width: 50%;
            }
            img {
              border-radius: 3px;
            }
          }
          .left {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-right: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-right: 6px;
            }
          }
          .right {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-left: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-left: 6px;
            }
          }
        }
        .end-report-related-sec-layer {
          .left, .right {
            @media screen and (min-width: 321px) and (max-width: 520px) {
            
            }
            @media screen and (min-width: 521px) and (max-width: 768px) {
              display: flex;
              
            }
            @media screen and (min-width: 769px) {
              display: flex;
              font-size: 16px;
            }
            .middle-left, .middle-right {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                width: 50%;
                
              }
              @media screen and (min-width: 769px) {
                width: 50%;
              }
            }
          }
          .left {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-right: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-right: 6px;
            }
            .middle-left {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-right: 6px;
                
              }
              @media screen and (min-width: 769px) {
                padding-right: 6px;
              }
            }
            .middle-right {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-left: 6px;
              }
              @media screen and (min-width: 769px) {
                padding-left: 6px;
              }
            }
          }
          .right {
            @media screen and (min-width: 521px) and (max-width: 768px) {
              padding-left: 6px;
              
            }
            @media screen and (min-width: 769px) {
              padding-left: 6px;
            }
            .middle-left {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-right: 6px;
                
              }
              @media screen and (min-width: 769px) {
                padding-right: 6px;
              }
            }
            .middle-right {
              @media screen and (min-width: 321px) and (max-width: 520px) {
            
              }
              @media screen and (min-width: 521px) and (max-width: 768px) {
                padding-left: 6px;
              }
              @media screen and (min-width: 769px) {
                padding-left: 6px;
              }
            }
          }
        }
      }
      .share {
        background-color: white;
      }
    }
  }
  .footer {
    width: 100%;
    background-color: white;
    position: relative;
    z-index: 120;
    padding: 15px 0;
  }
}
</style>
