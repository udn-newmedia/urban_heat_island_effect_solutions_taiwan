<template>
  <div class="scrollVideoWind">
    <section id="videoSection" ref="scrollVideo1">
        <div class="sidebar" id="scroll-video-content1">
          <video
            ref="video"
            class="video-player sidebar__inner"
            width="100vw"
            id="wind"
            :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )"
            :poster="srcRWD(require('../../public/video/wind/heat_island_effect_solutions_taiwan_wind_mob_1.jpg'), require('../../public/video/wind/heat_island_effect_solutions_taiwan_wind_1.jpg'))"
            preload="metadata"
            autobuffer
            muted
            playsinline>
          </video>
          <!-- <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" webkit-playsinline="true" />
          <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" /> -->
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" />
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <div class="quote">
                <slot name="quote1"></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <div class="quote">
                <slot name="quote2"></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <div class="quote-title">
                <slot name="quote-title"></slot>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import srcRWD from '../mixin/srcRWD.js'
import ScrollMagic from 'scrollmagic'
import _debounce from 'lodash.debounce'
import TWEEN from '@tweenjs/tween.js'
import { setTimeout } from 'timers';

export default {
  name: 'scrollVideoWind',
  data () {
    return {
      video1: 'heat_island_effect_solutions_taiwan_wind.mp4',
      videoMob1: 'heat_island_effect_solutions_taiwan_wind_mob.mp4',
      frameNumber: 0,
      playbackConst: 500,
      sectionHeight: 0,
      videoDuration: 0,
      accelamount: 0.01,
      bounceamount: 0.91,
      accel: 0,
      time: 0,
      myValue: 100,
      rqa: 0
    }
  },
  mounted () {
    let vm = this
    let videoBackground = document.querySelector("#scroll-video-content1");
    let controller = new ScrollMagic.Controller({});
    let vid = document.getElementById('wind');
    let body = document.body;
    let timer;
    
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
      body.classList.add('disable-hover')
    }
    
    timer = setTimeout(function(){
      body.classList.remove('disable-hover')
    },500);
    
    
    new ScrollMagic.Scene({
          triggerElement: videoBackground,
          triggerHook: 'onLeave',
          duration: "300%"
				})
				.setPin(videoBackground, {pushFollowers: false})
				// .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    
    //抓取整個 scroll video component 的高度
    this.sectionHeight = document.getElementById('videoSection').offsetHeight;
    this.totalSection = this.sectionHeight - document.getElementById('scroll-video-content1').offsetHeight;

    window.addEventListener('scroll', vm.scrollPlay)
    // this.videoPosition = this.$refs['scrollVideo1'].getBoundingClientRect().top
    // var videoHeight = this.$refs['scrollVideo1'].getBoundingClientRect().height

    vid.pause();

    vid.addEventListener('loadedmetadata', function() {
      vm.videoDuration = Math.floor(vid.duration);
    });
        
    // window.requestAnimationFrame(this.scrollPlay);

  },
  mixins: [srcRWD],
  props: {
    msg: String
  },
  methods: {
    scrollPlay:  _debounce(function(){
      //1600*900
      let vm = this
      let vid = document.getElementById('wind');
      
      let videoEnd = document.getElementById('videoSection').getBoundingClientRect().bottom - document.getElementById('scroll-video-content1').offsetHeight;
      // let scrollpos = totalSection / 600;
      // let targetscrollpos = scrollpos;
      // let counter = 0;
      let targetscrollpos = (6 - videoEnd / 600)
      if ( -100 < videoEnd && videoEnd < this.totalSection + 100 ) {
          vm.moveVideo(videoEnd)
          vm.time = targetscrollpos
      }
    }, 50),
    moveVideo (target) {
      let vm = this
      setTimeout(()=>{
        vm.rqa = requestAnimationFrame(vm.moveVideo);
      }, 500)
      TWEEN.update();
      if ( 0  >= target || target >= this.totalSection ) {
        cancelAnimationFrame(vm.rqa)
      }
    }
  },
  watch: {
    time: {
      handler(newValue, oldValue) {
        let vid = document.getElementById('wind');
        let newStatus = newValue || 'no new value';
        let oldStatus = oldValue || 'no old value';
        let tween = new TWEEN.Tween({ time: oldStatus});
        tween
        .to({ time: newStatus }, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function(object) {
            vid.currentTime = object.time
        })
        .start();
      }
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scrollVideoWind {
  position: relative;
  .video-height {
      display: block;
  }
  .video-player {
      position: absolute;
      width: 100%;
      height: 100vh;
      object-fit: fill;
  }
  #scroll-video-content1 {
    height: 100vh;
  }
  .section {
      height: 100vh;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
}
</style>
