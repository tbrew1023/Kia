<template>
  <div id="app">
    <!--div :class="(unveil ? 'swoop' : '' )" class="logo-loader"></div-->
    <!--div :class="(unveil ? 'loading-veil unveil' : 'loading-veil')"></div-->
    <div class="cc" :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <router-view :dataRef='dataRef' />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //CustomCursor
  },
  data() {
    return {
      dataRef: {},
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: false,
      unveil: true
    }
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', () => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', () => {
      this.hideCursor = false;
    });
  },
  methods: {
    handleNav(index) {
      console.clear();
      console.log(index);
      console.log('ROUTE HOME');
      this.$refs.fullpage.api.moveTo(1);
    },
    moveCursor(e) {
      var self = this;

      //console.log(e.target.classList);

      if(e.target.classList.contains('hoverable') || e.target.classList.contains('fp-tooltip') || e.target.tagName == "SPAN") {
        console.log(e.target.tagName);
        //console.log('HOVERABLE:)');
        self.hover = true;
      } else {
        //console.log('NOT HOVERABLE!');
        self.hover = false;
      }

      this.xChild = e.clientX;
      this.yChild = e.clientY;
      this.xParent = e.clientX - 20;
      this.yParent = e.clientY - 20;
    }
  }
}
</script>

<style lang="scss">
html {
  transition: filter 1s;
  color: black !important;
}

.swoop {
  transform: translate(-22px, -22px) scale(0.4) !important;
  //background: green !important;
  transition: 1s cubic-bezier(0.65, 0, 0.35, 1);
}

.logo-loader {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(calc(50vw - 100px), calc(50vh - 100px));
  margin: auto;
  z-index: 999999;
  width: 200px;
  height: 200px;
  //background: pink;  
  transition: 2s cubic-bezier(0.65, 0, 0.35, 1);
  background-image: url('assets/sample-emblem-white.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.fp-slideNav {
  //margin-bottom: 400px !important;

  ul li a span {
    background: red !important;
  }
}

#fp-nav {
  top: 450px !important;
  margin-left: 45px;

  li {
    margin-bottom: 36px !important;
  }

  .fp-tooltip {
    font-size: 14px !important;
    padding-left: 32px;
    line-height: 22px;
  }

  .active span {
    opacity: 1 !important;
    background: white !important;
    border: 2px solid white;
    //transform: translate(4px,4px);

    &:hover {
      //transform: translate(-1px,-1px) !important;
      //transform: scale(1.5);
    }
  }

  span {
    background: white !important;
    //background: rgba(0,0,0,0) !important;
    //height: 24px !important;
    //width: 24px !important;
    //transform: translate(-1px,-1px);
    transform: none !important;

    &:hover {
      //transform: translate(-1px,-1px);
      //transform: scale(1.05);
    }
  }
}

.unveil {
  opacity: 0 !important;
  transition: 4s;
  pointer-events: none;
}

.loading-veil {
  //display: none;
  background: #222;
  opacity: 1;
  width: 100%;
  height: 100vh;
  position: fixed;
  margin: 0px;
  padding: 0px;
  pointer-events: none;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s;
}

// ---------- transition shit -----------

//transition animation fade

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-active, .fade-leave-active {
  transition: all 300ms ease;
}

body {
  background: white;
  padding: 0px;
  margin: 0px;
  cursor: none !important;
}

p {
  //font-family: 'Inconsolata', monospace !important; 
}

// --------- cursor stuff ----------

.g-cursor {
  position: absolute;

    &_hide {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: 
        width .6s ease,
        height .6s ease,
        opacity .6s ease,
        transition 0s;
    }

    &__circle {
      pointer-events: none;
      user-select: none;
      top: -6px;
      left: -6px;
      position: fixed;
      width: 42px;
      height: 42px;
      //border: 2px solid rgba(white, 1);
      mix-blend-mode: difference;
      background: rgba(white,1);
      border-radius: 100%;
      z-index: 5555;
      backface-visibility: hidden;
      transition: 
        margin 0.6s ease,
        opacity 0.6s ease,
        width 0.6s ease,
        height 0.6s ease,
        transition 0s;
    }

    &__point {
      top: 0;
      left: 0;
      opacity: 0;
      position: fixed;
      width: 10px;
      height: 10px;
      pointer-events: none;
      user-select: none;
      border-radius: 100%;
      background: #fff;
      z-index: 55555555;
      backface-visibility: hidden;
      will-change: transform;
      transition:
        margin .4s ease,
        opacity .4s ease,
        width .4s ease,
        height .4s ease,
        transform 0s;
    }

    &_hover {
      .g-cursor__point {
          opacity: 0;
          width: 128px;
          height: 128px;
          margin-left: -48px;
          margin-top: -48px;
          //border: 2px solid rgba(white, 1);
          background: white;
          //mix-blend-mode: difference;
          //background: rgba(white, 1);
          //border-color: white;
          transition: 
            margin .4s ease,
            width .4s ease,
            height .4s ease,
            opacity .4s ease,
            transform 0s;
        }

        .g-cursor__circle {
          opacity: 1;
          width: 128px;
          height: 128px;
          margin-left: -36px;
          margin-top: -36px;
          //background: rgba(white, 1);
          //border-color: transparent;
          transition: 
            margin .4s ease,
            width .4s ease,
            height .4s ease,
            opacity .4s ease,
            transform 0s;
        }
    }
}

@media only screen and (max-width: 900px) {
  .g-cursor {
    display: none !important;
  }

  .swoop {
      transform: translate(-56px, -62px) scale(0.2) !important;
      //background: green !important;
      transition: 1s cubic-bezier(0.65, 0, 0.35, 1);
   }

   .soc-container {
     transform: scale(0.7);
     top: 30px !important;
     right: 6px !important;
     display: none !important;
   }

   .landing-container {
     width: 300px !important;
     height: 80px !important;
   }

   .fp-tooltip {
     display: none !important;
   }

   #fp-nav {
     position: absolute;
     margin: 0px !important;
     transform: rotate(270deg);
     top: -50px !important;
     left: 180px !important;
     width: 12px;

     li {
       margin-bottom: 18px !important;

       a.active {
         width: 8px !important;
         height: 8px !important;
         margin: 0px 0 0 0px !important;
       }
     }
   }
}
</style>
