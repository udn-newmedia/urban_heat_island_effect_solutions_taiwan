<template>
  <div id="cover" class="cover">
    <section class="content">
      
    </section>
    <h1>Hello111</h1>
  </div>
</template>

<script>
import ScrollMagic from 'scrollmagic'

export default {
  name: 'cover',
  props: {
    msg: String
  },
  mounted () {

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var controller = new ScrollMagic.Controller();

    // create scene for every slide
    var scene = new ScrollMagic.Scene({triggerElement: "#cover", duration: h*2, triggerHook: 0})
                    .setPin("#cover")
                    .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
                    .addTo(controller);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cover {
   height: 100vh;
   position: relative;
   z-index: -1;
   .content {
       position: absolute;
       bottom: 0;
       left: 0;
	    height: 100vh;
	}
}
</style>
