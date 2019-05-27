<template>
  <div class="scrollVideoWind">
    <section id="videoSection" ref="scrollVideo1">
        <div class="sidebar" id="scroll-video-content1">
          <video ref="video" class="video-player sidebar__inner" width="100vw" id="wind" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" preload="metadata" autobuffer autoplay loop muted playsinline></video>
          <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )" webkit-playsinline="true"></source>
          <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )"></source>
          <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" :src="srcRWD(require('../../public/video/wind/' + videoMob1), require('../../public/video/wind/' + video1) )"></source>
        </div>
        <div class="section">
          <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
        </div>
        <div class="section">
          <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
        </div>
        <div class="section">
          <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
        </div>
        <div class="section">
          <h1>補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文補文。</h1>
        </div>
    </section>
  </div>
</template>

<script>
import srcRWD from '../mixin/srcRWD.js'
import ScrollMagic from 'scrollmagic'

export default {
  name: 'scrollVideoWind',
  data () {
    return {
      video1: 'heat_island_effect_solutions_taiwan_wind.mp4',
      videoMob1: 'heat_island_effect_solutions_taiwan_wind_mob.mp4',
      frameNumber: 0,
      playbackConst: 500,
      sectionHeight: 0,
      videoDuration: 0
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
    scrollPlay(){
      let vm = this
      let vid = document.getElementById('wind');
      let totalSection = this.sectionHeight - document.getElementById('scroll-video-content1').offsetHeight
      let videoEnd = document.getElementById('videoSection').getBoundingClientRect().bottom - document.getElementById('scroll-video-content1').offsetHeight
      let currentPlay = 0
      let myReq = null;
      
      if ( 0  < videoEnd && videoEnd < totalSection ) {
        currentPlay = (1 - (videoEnd/totalSection))*this.videoDuration
        console.log(this.videoDuration)
        console.log(currentPlay)
        vid.currentTime = currentPlay
        myReq = window.requestAnimationFrame(vm.scrollPlay);
      } else {
        cancelAnimationFrame(myReq);
      }
      // let vm = this
      // var bodyRect = document.body.getBoundingClientRect(),
      //     elemRect = element.getBoundingClientRect(),
      //     offset   = elemRect.top - bodyRect.top;
      // // let vid = document.getElementById('wind');
      // // let content = document.getElementById('content1');
      // // let elementTop = window.innerWidth - vid.getBoundingClientRect().top;
      
      // // vm.frameNumber = ((window.pageYOffset - elementTop) / vm.sectionHeight * vm.setHeight);
      // // vid.currentTime  = vm.frameNumber;
      // console.log('目前高度:', window.pageYOffset)
      // console.log('物件高度: ', document.getElementById('content1').getBoundingClientRect().offsetHeight)
      // window.requestAnimationFrame(vm.scrollPlay);
    }
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
