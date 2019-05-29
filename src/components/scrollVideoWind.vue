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
          <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" webkit-playsinline="true" />
          <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" />
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" />
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="content">
              <h1>熱島效應解方─水</h1>
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
      accel: 0
    }
  },
  mounted () {
    let vm = this
    let videoBackground = document.querySelector("#scroll-video-content1");
    let controller = new ScrollMagic.Controller({});
    let vid = document.getElementById('wind');
    
    new ScrollMagic.Scene({
          triggerElement: videoBackground,
          triggerHook: 'onLeave',
          duration: "400%"
				})
				.setPin(videoBackground, {pushFollowers: false})
				// .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    
    //抓取整個 scroll video component 的高度
    this.sectionHeight = document.getElementById('videoSection').offsetHeight;

    

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
      let vm = this
      let vid = document.getElementById('wind');

      let totalSection = this.sectionHeight - document.getElementById('scroll-video-content1').offsetHeight
      let videoEnd = document.getElementById('videoSection').getBoundingClientRect().bottom - document.getElementById('scroll-video-content1').offsetHeight
      let currentPlay = 0
      let scrollpos = totalSection / 600
      let targetscrollpos = scrollpos
      let myReq = null;
      let counter = 0
      targetscrollpos = (6 - videoEnd / 600)
      if ( 0  < videoEnd && videoEnd < totalSection ) {
        myReq = window.requestAnimationFrame(function step() {
            
            targetscrollpos = targetscrollpos - 0.01
            
            if(counter < 10){
              counter = counter + 1;
              console.log(targetscrollpos)
              vid.currentTime =  targetscrollpos
              window.requestAnimationFrame(step);
            } else {
              counter = 0
            }
        })
        
      } else {
        cancelAnimationFrame(myReq);
      }
    }, 50)
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
