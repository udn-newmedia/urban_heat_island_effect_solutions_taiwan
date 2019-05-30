<template>
  <div class="scrollVideoWater">
    <section id="videoSection3" ref="scrollVideo3">
        <div class="sidebar" id="scroll-video-content3">
          <video 
            ref="video"
            class="video-player sidebar__inner"
            width="100vw"
            id="water"
            :src="srcRWD(require('../../public/video/water/' + videoMob3), require('../../public/video/water/' + video1) )"
            :poster="srcRWD(require('../../public/video/water/heat_island_effect_solutions_taiwan_water_mob_1.jpg'), require('../../public/video/water/heat_island_effect_solutions_taiwan_water_1.jpg') )"
            preload="metadata"
            autobuffer
            muted
            playsinline>
          </video>
          <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="srcRWD(require('../../public/video/water/' + videoMob3), require('../../public/video/water/' + video1) )" webkit-playsinline="true" />
          <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="srcRWD(require('../../public/video/water/' + videoMob3), require('../../public/video/water/' + video1) )" />
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(require('../../public/video/water/' + videoMob3), require('../../public/video/water/' + video1) )" />
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

export default {
  name: 'scrollVideoWater',
  data () {
    return {
      video1: 'heat_island_effect_solutions_taiwan_water.mp4',
      videoMob3: 'heat_island_effect_solutions_taiwan_water_mob.mp4',
      frameNumber: 0,
      playbackConst: 500,
      sectionHeight: 0,
      videoDuration: 0
    }
  },
  mounted () {
    let vm = this
    let videoBackground = document.querySelector("#scroll-video-content3");
    let controller = new ScrollMagic.Controller({});
    let vid = document.getElementById('water');
    
    new ScrollMagic.Scene({
          triggerElement: videoBackground,
          triggerHook: 'onLeave',
          duration: "200%"
				})
				.setPin(videoBackground, {pushFollowers: false})
				// .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    
    //抓取整個 scroll video component 的高度
    this.sectionHeight = document.getElementById('videoSection3').offsetHeight;

    

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
    scrollPlay(){
      let vm = this
      let vid = document.getElementById('water');
      let totalSection = this.sectionHeight - document.getElementById('scroll-video-content3').offsetHeight
      let videoEnd = document.getElementById('videoSection3').getBoundingClientRect().bottom - document.getElementById('scroll-video-content3').offsetHeight
      let currentPlay = 0
      let scrollpos = totalSection / 600
      let targetscrollpos = scrollpos
      let myReq = null;
      
      if ( 0  < videoEnd && videoEnd < totalSection ) {

        //version1
        // currentPlay = (1 - (videoEnd/totalSection))*this.videoDuration

        //version2
        targetscrollpos = (6 - videoEnd / 600)

        vid.currentTime = targetscrollpos

        myReq = window.requestAnimationFrame(vm.scrollPlay);
        // setTimeout(function(){
        //   targetscrollpos += 0.1
        //   window.requestAnimationFrame(vm.scrollPlay);
        // }, 100)
        // setTimeout(function(){
        //   targetscrollpos += 0.05
        //   window.requestAnimationFrame(vm.scrollPlay);
        // }, 150)
        // setTimeout(function(){
        //   targetscrollpos += 0.05
        //   window.requestAnimationFrame(vm.scrollPlay);
        // }, 175)
        // setTimeout(function(){
        //   targetscrollpos -= 0.05
        //   window.requestAnimationFrame(vm.scrollPlay);
        // }, 200)
      } else {
        cancelAnimationFrame(myReq);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scrollVideoWater {
  position: relative;
  .video-height {
      display: block;
  }
  .video-player {
      position: absolute;
      width: 100%;
      height: 100vh;
      object-fit: fill;
      will-change: transform;
  }
  #scroll-video-content3 {
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
