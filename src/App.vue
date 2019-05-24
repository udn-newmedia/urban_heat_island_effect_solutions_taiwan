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
    <scrollVideo></scrollVideo>
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
    <!-- <section class="panel cover">
      
    </section>
    <section class="panel main-title">
      <h2>當寶島變熱島</h2>
      <h1>幫都市退燒</h1>
    </section>
    <section class="panel content">
      <div class="container">
        <p>都會區建築密集、巷道狹小，導致風進不來、熱出不去，溫度愈來愈高。</p>
        <br>
        <p>為了幫都市退燒，各縣市推出各式解方，包含規劃讓風走的廊道、實施綠建築獎勵等措施，要減緩熱島效應，並還給居民更舒適的居住環境。</p>

      </div>
    </section>
    <section ref="enter" class="scrollVideo">
      <div class="sidebar" id="either-gif-or-video">
        <video ref="video" class="video-player sidebar__inner" width="100vw" id="green" src="../public/video/green/heat_island_effect_solutions_taiwan_green.mp4" preload="metadata" autobuffer autoplay loop muted playsinline></video>
        <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="../public/video/green/heat_island_effect_solutions_taiwan_green.mp4" webkit-playsinline="true"></source>
        <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="../public/video/green/heat_island_effect_solutions_taiwan_green.mp4"></source>
        <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="../public/video/green/heat_island_effect_solutions_taiwan_green.mp4"></source>
      </div>
      <div class="video-height content" :id="videoSetHeight">
      <div class="section-wrapper">
        <div class="section">
          <h1>Hello1</h1>
        </div>
        <div class="section">
          <h1>Hello2</h1>
        </div>
        <div class="section">
          <h1>Hello3</h1>
        </div>
        <div class="section">
          <h1>Hello4</h1>
        </div>
      </div>
    </div>
    </section>
    <section class="panel content">
      <div class="container">
        <p>都會區建築密集、巷道狹小，導致風進不來、熱出不去，溫度愈來愈高。</p>
        <br>
        <p>為了幫都市退燒，各縣市推出各式解方，包含規劃讓風走的廊道、實施綠建築獎勵等措施，要減緩熱島效應，並還給居民更舒適的居住環境。</p>
      </div>
    </section> -->
  </div>
</template>

<script>
import srcRWD from './mixin/srcRWD.js'
import ScrollMagic from 'scrollmagic'
import scrollVideo from './components/scrollVideo.vue'

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
    scrollVideo
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
    
    let vm = this
    this.vid = document.getElementById('green');
    this.windowheight = window.innerHeight-20;
    this.targetscrollpos = this.scrollpos
    this.vid.pause();
    this.vid.currentTime = 0
     window.addEventListener('scroll', this.handleScroll);

    //  this.videoPosition = this.getCoords(this.$refs['enter']).top

    //  this.intervalMark = setInterval(function(){  
        
    //         //Accelerate towards the target:
    //         vm.accel += (vm.targetscrollpos - vm.scrollpos)*vm.accelamount;
            
    //         //clamp the acceleration so that it doesnt go too fast
    //         if (vm.accel > 1) vm.accel = 1;
    //         if (vm.accel < -1) vm.accel = -1;
        
    //         //move the video scroll position according to the acceleration and how much bouncing you selected:
    //         vm.scrollpos = (vm.scrollpos + vm.accel) * (vm.bounceamount) + (vm.targetscrollpos * (1-vm.bounceamount));
        
    //         //move the blue dot to a position across the side of the screen
    //         //that indicates where the current video scroll pos is.
    //         // vm.time.style.top = 10+(window.pageYOffset/4000*this.windowheight)  
        
    //         //update video playback
    //         vm.vid.currentTime = vm.scrollpos;
    //         vm.vid.pause();
            
    //     }, 40);
  },
  methods: {
      // handleScroll () {
      //   let currentH = window.pageYOffset

      //   // and when parent change height..

      //   if ( this.videoPosition < currentH && currentH < this.videoPosition + 3600) {
      //     this.targetscrollpos = (window.pageYOffset - this.videoPosition)/350;
      //     this.scroll.style.top = 10+(window.pageYOffset/1200*this.windowheight)
      //   } else {

      //   }

      // },
      // getCoords(elem) { // crossbrowser version
      //     var box = elem.getBoundingClientRect();

      //     var body = document.body;
      //     var docEl = document.documentElement;

      //     var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      //     var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      //     var clientTop = docEl.clientTop || body.clientTop || 0;
      //     var clientLeft = docEl.clientLeft || body.clientLeft || 0;

      //     var top  = box.top +  scrollTop - clientTop;
      //     var left = box.left + scrollLeft - clientLeft;

      //     return { top: Math.round(top), left: Math.round(left) };
      // }
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
