<template>
  <div class="bottomtab-wrap">
    <div class="bottom-tab">
       <a
      href="https://h5.m.taopiaopiao.com/app/movie/pages/index/index.html?from=outer&sqm=a1z2r.7661912.1.1&bottomtab=show"
      class="movie active" data-status="active">
      <div class="icon i1"></div>
      </a>
      <a
      href="https://h5.m.taopiaopiao.com/app/moviemain/pages/cinema-list/index.html?from=outer&sqm=a1z2r.7661912.1.1&bottomtab=show"
      class="cinema">
      <div class="icon icon2"></div>
      </a>
      <a
      href="https://h5.m.taopiaopiao.com/app/mymovie/pages/mine/movie-order.html?from=outer&sqm=a1z2r.7661912.1.1&bottomtab=show"
      class="mine">
      <div class="icon icon3"></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  *, :after, :before {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .bottomtab-wrap {
    .bottom-tab {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom: constant(safe-area-inset-bottom);
      background: -webkit-gradient(linear,left top,left bottom,from(#fff),color-stop(.5,#fff),color-stop(.5,transparent)) 0 0 no-repeat,-webkit-gradient(linear,left top,left bottom,from(#fff),to(#fff)) 0 100% no-repeat,-webkit-gradient(linear,left top,left bottom,from(#e2e2e2),color-stop(.5,#e2e2e2),color-stop(.5,transparent)) 0 0 no-repeat,-webkit-gradient(linear,left top,left bottom,from(#e2e2e2),to(#e2e2e2)) 0 100% no-repeat,#fff;
      background: -webkit-linear-gradient(90deg,#fff,#fff) 0 0 no-repeat,-webkit-linear-gradient(270deg,#fff,#fff) 0 100% no-repeat,-webkit-linear-gradient(90deg,#e2e2e2,#e2e2e2,hsla(0,0%,90%,0)) 0 0 no-repeat,-webkit-linear-gradient(270deg,#e2e2e2,#e2e2e2,hsla(0,0%,90%,0)) 0 100% no-repeat,#fff;
      background: -webkit-linear-gradient(bottom,#fff,#fff) 0 0 no-repeat,-webkit-linear-gradient(top,#fff,#fff) 0 100% no-repeat,-webkit-linear-gradient(bottom,#e2e2e2,#e2e2e2,hsla(0,0%,90%,0)) 0 0 no-repeat,-webkit-linear-gradient(top,#e2e2e2,#e2e2e2,hsla(0,0%,90%,0)) 0 100% no-repeat,#fff;
      background: linear-gradient(0deg,#fff,#fff) 0 0 no-repeat,linear-gradient(180deg,#fff,#fff) 0 100% no-repeat,linear-gradient(0deg,#e2e2e2,#e2e2e2,hsla(0,0%,90%,0)) 0 0 no-repeat,linear-gradient(180deg,#e2e2e2,#e2e2e2,hsla(0,0%,90%,0)) 0 100% no-repeat,#fff;
      -webkit-background-size: 0 1px,100% 1px,100% 1px,100% 1px;
      min-height: 50px;
      z-index: 10;
      box-sizing: border-box;
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      padding-top: 6px;
      a {
        display: block;
        text-align: center;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33%;
        -ms-flex: 1 1 33%;
        flex: 1 1 33%;
        color: #8a869e;
        &.active {
          color: #ff4d64;
        }
        &.movie:after {
          content: "\7535\5F71";
          display: block;
          font-size: 10px;
          padding-top: .6vmin;
        }
        &.cinema:after {
          content: "\5F71\9662";
          display: block;
          font-size: 10px;
          padding-top: .6vmin;
        }
        &.mine:after {
          content: "\6211\7684";
          display: block;
          font-size: 10px;
          padding-top: .6vmin;
        }
        .icon {
          background-position: 50%;
          background-size: cover;
          width: 22px;
          height: 22px;
          margin: 0 auto;
        }
        .icon1 {
          background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='%238A869E' d='M32 28.507v1.615c0-.037-.468-.226-.522-.254a5.274 5.274 0 0 1-1.405-1.02c-.55-.555-1.01-1.21-1.29-1.943a6.21 6.21 0 0 1-.202-.642c-.038-.15-.088-.28-.12-.44a1.316 1.316 0 0 1-.02-.115 32.037 32.037 0 0 0-.02-.58c-.018-.354-.04-.712-.042-1.066 0-.24.04-.476.147-.695.12-.247.288-.468.423-.708.132-.237.233-.49.337-.74.105-.253.22-.503.322-.758.208-.51.35-1.05.495-1.58.147-.544.235-1.098.315-1.654.083-.57.11-1.14.123-1.715.002-.07.005-.14.005-.21 0-8.033-6.512-14.545-14.545-14.545S1.455 7.967 1.455 16 7.967 30.545 16 30.545c2.955 0 5.705-.88 8-2.395v1.71A15.925 15.925 0 0 1 16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16c0 2.895-.77 5.61-2.113 7.953A4.362 4.362 0 0 0 32 28.507zm-15.99-1.582a3.64 3.64 0 1 1 0-7.277 3.64 3.64 0 0 1 0 7.277zm0-5.822a2.183 2.183 0 1 0 0 4.367 2.183 2.183 0 0 0 0-4.366zm-7.278-1.455a3.64 3.64 0 1 1 0-7.277 3.64 3.64 0 0 1 0 7.278zm0-5.822a2.183 2.183 0 1 0 0 4.366 2.183 2.183 0 0 0 0-4.366zm7.278-8.732a3.638 3.638 0 1 1 0 7.277 3.638 3.638 0 0 1 0-7.276zm0 5.822a2.183 2.183 0 1 0 0-4.367 2.183 2.183 0 0 0 0 4.366zm3.638 5.094a3.64 3.64 0 1 1 7.277 0 3.64 3.64 0 0 1-7.277 0zm5.822 0a2.183 2.183 0 1 0-4.366 0 2.183 2.183 0 0 0 4.366 0z'/></svg>")
        }
        .i1 {
          background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='%23FF4D64' d='M32 28.507v1.615c0-.037-.468-.226-.522-.254a5.274 5.274 0 0 1-1.405-1.02c-.55-.555-1.01-1.212-1.29-1.943a6.21 6.21 0 0 1-.202-.642c-.025-.1-.052-.195-.08-.292a16.06 16.06 0 0 1-4.5 3.872v.017c-.08.046-.165.086-.246.13-.097.055-.194.106-.292.158a15.88 15.88 0 0 1-1.147.552c-.038.017-.074.035-.11.05a15.895 15.895 0 0 1-1.622.575c-.428.128-.86.243-1.304.335l-.07.017a16.017 16.017 0 0 1-1.753.25c-.48.043-.965.073-1.457.073-8.837 0-16-7.164-16-16 0-.552.028-1.098.083-1.636C.903 6.296 7.716 0 16 0c8.836 0 16 7.163 16 16a16.136 16.136 0 0 1-.108 1.802c-.053.473-.12.942-.214 1.4-.007.035-.017.068-.024.103-.09.432-.203.857-.328 1.276-.032.107-.063.213-.097.32a15.9 15.9 0 0 1-.473 1.29c-.023.052-.05.103-.07.156-.165.38-.346.75-.537 1.113l-.15.28c-.04.07-.073.143-.113.212A4.362 4.362 0 0 0 32 28.506zM8.727 13.09a2.91 2.91 0 1 0 0 5.82 2.91 2.91 0 0 0 0-5.82zM16 5.82a2.91 2.91 0 1 0 0 5.818 2.91 2.91 0 0 0 0-5.818zm0 14.545a2.91 2.91 0 1 0 0 5.82 2.91 2.91 0 0 0 0-5.82zm7.273-7.272a2.91 2.91 0 1 0 0 5.82 2.91 2.91 0 0 0 0-5.82z'/></svg>");
        }
        .icon2 {
          background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='%238A869E' d='M.16 30.415h31.68V32H.16v-1.585zm6.338-5.498h19.004V26.5H6.498v-1.583zM23.742 6.3c-2.952.874-4.454 1.344-7.7 1.344-3.407 0-5.14-.517-8.217-1.475.428.137 1.14.36 1.207.35a47.37 47.37 0 0 1-.3 1.65c2.82.745 4.243 1.143 7.31 1.143 3.065 0 4.405-.398 7.227-1.142-.11-.547-.21-1.097-.302-1.65.042.002.41-.107.774-.22zm4.93-6.3H3.328A3.17 3.17 0 0 0 .16 3.17V26.14c4.173-5.552 7.153-10.908 8.57-17.97.11-.55.21-1.1.302-1.652-.067.01-.78-.213-1.207-.35-.19-.06-.324-.105-.324-.105v.002c-.92 5.754-2.907 10.01-5.755 14.84V3.962A2.377 2.377 0 0 1 4.12 1.586H27.88a2.377 2.377 0 0 1 2.376 2.376V20.91c-2.848-4.83-4.836-9.085-5.756-14.84v-.003s-.378.12-.758.236c-.364.113-.732.222-.774.22.09.553.192 1.104.3 1.65 1.42 7.064 4.4 12.42 8.572 17.972V3.168A3.17 3.17 0 0 0 28.67 0z'/></svg>");
        }
        .i2 {
          background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='%23FF4D64' d='M.16 30.416h31.68V32H.16v-1.584zm6.338-5.5h19.004v1.585H6.498v-1.583zM23.742 6.302c-2.952.874-4.454 1.344-7.7 1.344-3.407 0-5.14-.517-8.218-1.475.43.137 1.14.36 1.208.35a47.37 47.37 0 0 1-.302 1.65c2.823.745 4.245 1.143 7.31 1.143 3.067 0 4.407-.398 7.23-1.142-.11-.547-.21-1.097-.302-1.65.042.002.41-.107.774-.22zm4.93-6.3H3.328A3.17 3.17 0 0 0 .16 3.17V26.14C4.333 20.59 7.313 15.234 8.73 8.17c.11-.547.21-1.097.302-1.65-.067.01-.78-.213-1.207-.35-.19-.06-.324-.105-.324-.105v.002c-.92 5.754-2.907 10.01-5.756 14.841V3.962A2.377 2.377 0 0 1 4.12 1.586H27.88a2.377 2.377 0 0 1 2.376 2.376V20.91c-2.848-4.83-4.836-9.085-5.756-14.84v-.003s-.378.12-.758.236c-.364.113-.732.222-.774.22.09.553.192 1.104.302 1.65 1.417 7.064 4.397 12.42 8.57 17.972V3.168A3.17 3.17 0 0 0 28.67 0zm2.34 21.968V3.555s-.57-1.984-2.527-2.77h-25.5S.867 1.11 1.03 4.615v18.33S7.45 13.067 7.825 7.74l4.04.46 5.703.325 6.174-1.466.344 2.253 2.77 7.685 3.585 5.458.57-.488z'/></svg>")
        }
        .icon3 {
          background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='%238A869E' d='M15.97 6.533a6.533 6.533 0 1 0 0 13.067 6.533 6.533 0 0 0 0-13.067zm0 11.615a5.08 5.08 0 1 1 0-10.163 5.08 5.08 0 0 1 0 10.163zM16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm9.336 27.154c.077-.553.12-1.12.12-1.7 0-3.07-1.1-5.84-2.868-7.824a8.04 8.04 0 0 1-.94 1.128C23.1 20.468 24 22.838 24 25.455a10.92 10.92 0 0 1-.403 2.95A14.477 14.477 0 0 1 16 30.546c-2.785 0-5.386-.782-7.598-2.14A10.92 10.92 0 0 1 8 25.456c0-2.617.9-4.986 2.353-6.697a8.04 8.04 0 0 1-.94-1.128c-1.77 1.983-2.868 4.755-2.868 7.825 0 .578.042 1.146.12 1.7A14.515 14.515 0 0 1 1.454 16C1.455 7.967 7.967 1.455 16 1.455c8.033 0 14.545 6.512 14.545 14.545 0 4.48-2.025 8.486-5.21 11.154z'/></svg>");
        }
        .i3 {
          background-image: url("")
        }
      }
    }
  }
</style>
