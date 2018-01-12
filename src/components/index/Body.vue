<template>
  <div class="content" v-if="data">
    <div class="mask" @click="fade" ref="mask"></div>
    <div class="m-item" v-for="(item, index) in data.returnValue" :key="item.id">
      <div class="m-wrap">
        <div class="m-info">
          <div class="fantastic"></div>
          <a
            href="javascript:;"
            class="poster"
            @click="show($event, index)"
            :style="'opacity: 1; transition: opacity 0.5s ease-in; background-image: url(https://gw.alicdn.com/tfs/' + item.poster +');'">
            <i class="i-play"></i>
            <div v-if="item.preview[0]" :class="{'active': i === index}">
              <video :src="item.preview[0].iphoneUrl" :poster="item.preview[0].coverUrl" class="video" @click="control($event)"></video>
            </div>
          </a>
          <a
            href="javascript:;"
            class="m-item-content" data-spm-anchor-id="a1z2r.7661912.0.0">
            <router-link :to="{ name: 'Detail', params: { id: item.detailStr }}">
            <div class="title show-title-info">
              <span class="show-name">{{item.showName}}</span>
            </div>
            <div class="brief">
              <div class="film-star">
                <div class="show-star-mod">
                  <div class="show-star-ranking">
                    <div class="show-star-ranking-light" style="width:80%;"></div>
                  </div>
                  <div class="show-star-remark">7.6</div>
                </div>
              </div>
            </div>
            <div class="brief"> 导演：{{item.director}}       </div>
            <div class="brief"> 主演：{{item.leadingRole}}      </div>
            </router-link>
          </a>
          <a
          href="javascript:;"
          class="btn btn-red">购票</a>
        </div>
        <div class="m-act" v-if="item.activities">
          <a
            href="javascript:;">
            <div class="content">
              <span class="orange">特惠</span>
              <span class="gap">|</span> {{item.activities[0].activityTitle}}
            </div>
          </a>
        </div>
        <div class="m-act" v-if="!item.activities">
          <a
            href="https://h5.m.taopiaopiao.com/app/moviemain/pages/activity-detail/index.html?from=outer&amp;sqm=a1z2r.7661912.1.1&amp;pageFrom=home&amp;activityId=33736">
            <div class="content">
              <span class="orange" style="color: aqua">简介</span>
              <span class="gap">|</span> {{item.highlight}}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object
      }
    },
    data () {
      return {
        play: false,
        i: null
      }
    },
    methods: {
      show (event, index) {
        let mask = document.getElementsByClassName('mask')[0]
        let select = event.currentTarget
        let video = select.getElementsByClassName('video')[0]
        this.i = index
        mask.style.display = 'block'
        video.style.display = 'block'
      },
      fade () {
        let videos = document.getElementsByClassName('video')
        for (let i = 0; i < videos.length; i++) {
          this.play = false
          videos[i].pause()
          videos[i].style.display = 'none'
        }
        this.$refs.mask.style.display = 'none'
      },
      control (event) {
        let video = event.currentTarget
        if (this.play) {
          this.play = false
          video.pause()
          return
        }
        this.play = true
        video.play()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content {
    padding-bottom: 13.3vmin;
    .mask {
      position: fixed;
      width: 100%;
      height: 150%;
      background-color: #000;
      opacity:0.8;
      z-index: 20;
      margin-top: -60%;
      display: none;
    }
    .m-item {
      position: relative;
      background-color: #fff;
      padding-left: 4vmin;
      .m-wrap {
        background: transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
        background-size: 100% 1px;
        .m-info {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 4vmin 4vmin 4vmin 0;
          .fantastic {
            position: absolute;
            right: 0;
            top: 0;
            width: 78px;
            text-align: center;
          }
          .poster {
            width: 17.3vmin;
            height: 24vmin;
            display: block;
            background-position: 50%;
            background-size: cover;
            position: relative;
            .i-play {
              position: absolute;
              top: 50%;
              left: 50%;
              display: block;
              background: #fff;
              border-radius: 100%;
              opacity: .9;
              width: 20px;
              height: 20px;
              margin: -10px 0 0 -10px;
              &:after {
                position: absolute;
                top: 50%;
                left: 50%;
                display: block;
                content: " ";
                width: 0;
                height: 0;
                border-top: 5px solid transparent;
                border-left: 6px solid #000;
                border-bottom: 5px solid transparent;
                margin: -5px 0 0 -2.5px;
              }
            }
            div {
              position: absolute;
              width: 100%;
              height: 233px;
              padding: 0 auto;
              margin-left: -25px;
              box-sizing: border-box;
              z-index: 0;
              &.active {
                z-index: 20;
              }
              .video {
                display: none;
                width: 600%;
                height: 100%;
              }
            }
          }
          .m-item-content {
            padding-left: 2.7vmin;
            padding-right: 2.7vmin;
            color: #000;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            width: 0;
            .show-title-info {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              max-width: 58.7vmin;
              font-weight: 500;
              .show-name {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                vertical-align: middle;
                margin-bottom: 5px;
              }
            }
            .brief {
              color: #8a869e;
              font-size: .8125rem;
              margin-top: .8vmin;
              width: auto;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .film-star {
                margin-bottom: 1.1vmin;
                .show-star-mod {
                  overflow: hidden;
                  .show-star-ranking {
                    float: left;
                    width: 13.3vmin;
                    height: 2.7vmin;
                    margin-top: .3vmin;
                    background-size: auto 100%;
                    background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5000' height='1000' viewBox='0 0 5000 1000'><path fill='%23FEA54C' d='M2191.983 977.642l59.017-344.9-250-244.262 345.49-50.32L2501 24.358l154.51 313.802L3001 388.48l-250 244.26 59.017 344.903L2501 814.803l-309.017 162.84zm261.148-253.68l47.87-25.225 47.87 25.225 239.32 126.113 13.286 77.654-36.258 26.305-69.697-36.728-45.73-267.248-9.086-53.11 38.538-37.653 193.892-189.44 77.625 11.305 13.926 42.8-56.11 54.82-267.866-39.014-53.457-7.786-23.863-48.465-119.616-242.935 34.893-70.867h44.666l34.893 70.867-119.615 242.935-23.862 48.465-53.457 7.786-267.866 39.014-56.11-54.82 13.927-42.8 77.626-11.306 193.89 189.44 38.54 37.655-9.087 53.11-45.73 267.247-69.697 36.728-36.26-26.306 13.288-77.655 239.32-126.112zM3191.983 977.642l59.017-344.9-250-244.262 345.49-50.32L3501 24.358l154.51 313.802L4001 388.48l-250 244.26 59.017 344.903L3501 814.803l-309.017 162.84zm261.148-253.68l47.87-25.225 47.87 25.225 239.32 126.113 13.286 77.654-36.258 26.305-69.697-36.728-45.73-267.248-9.086-53.11 38.538-37.653 193.892-189.44 77.625 11.305 13.926 42.8-56.11 54.82-267.866-39.014-53.457-7.786-23.863-48.465-119.616-242.935 34.893-70.867h44.666l34.893 70.867-119.615 242.935-23.862 48.465-53.457 7.786-267.866 39.014-56.11-54.82 13.927-42.8 77.626-11.306 193.89 189.44 38.54 37.655-9.087 53.11-45.73 267.247-69.697 36.728-36.26-26.306 13.288-77.655 239.32-126.112zM4191.983 977.642l59.017-344.9-250-244.262 345.49-50.32L4501 24.358l154.51 313.802L5001 388.48l-250 244.26 59.017 344.903L4501 814.803l-309.017 162.84zm261.148-253.68l47.87-25.225 47.87 25.225 239.32 126.113 13.286 77.654-36.258 26.305-69.697-36.728-45.73-267.248-9.086-53.11 38.538-37.653 193.892-189.44 77.625 11.305 13.926 42.8-56.11 54.82-267.866-39.014-53.457-7.786-23.863-48.465-119.616-242.935 34.893-70.867h44.666l34.893 70.867-119.615 242.935-23.862 48.465-53.457 7.786-267.866 39.014-56.11-54.82 13.927-42.8 77.626-11.306 193.89 189.44 38.54 37.655-9.087 53.11-45.73 267.247-69.697 36.728-36.26-26.306 13.288-77.655 239.32-126.112zM1191.983 977.642l59.017-344.9-250-244.262 345.49-50.32L1501 24.358l154.51 313.802L2001 388.48l-250 244.26 59.017 344.903L1501 814.803l-309.017 162.84zm261.148-253.68l47.87-25.225 47.87 25.225 239.32 126.113 13.286 77.654-36.258 26.305-69.697-36.728-45.73-267.248-9.086-53.11 38.538-37.653 193.892-189.44 77.625 11.305 13.926 42.8-56.11 54.82-267.866-39.014-53.457-7.786-23.863-48.465-119.616-242.935 34.893-70.867h44.666l34.893 70.867-119.615 242.935-23.862 48.465-53.457 7.786-267.866 39.014-56.11-54.82 13.927-42.8 77.626-11.306 193.89 189.44 38.54 37.655-9.087 53.11-45.73 267.247-69.697 36.728-36.26-26.306 13.288-77.655 239.32-126.112zM190.983 977.642L250 632.742 0 388.48l345.49-50.32L500 24.358 654.51 338.16 1000 388.48 750 632.74l59.017 344.903L500 814.803l-309.017 162.84zm261.148-253.68L500 698.738l47.87 25.225 239.32 126.113 13.286 77.654-36.258 26.305-69.697-36.728-45.73-267.248-9.086-53.11 38.538-37.653 193.892-189.44 77.625 11.305 13.926 42.8-56.11 54.82-267.866-39.014-53.457-7.786-23.863-48.465-119.616-242.935 34.893-70.867h44.666l34.893 70.867L437.61 383.517l-23.862 48.465-53.457 7.786-267.866 39.014-56.11-54.82 13.927-42.8 77.626-11.306 193.89 189.44 38.54 37.655-9.087 53.11-45.73 267.247-69.697 36.728-36.26-26.306 13.288-77.655 239.32-126.112z'/></svg>");
                    .show-star-ranking-light {
                      width: 100%;
                      height: 100%;
                      background-size: auto 100%;
                      background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5000' height='1000' viewBox='0 0 5000 1000'><path fill='%23FEA54C' d='M2501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L2501 24.357l154.51 313.8L3001 388.48l-250 244.26 59.017 344.902zM3501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L3501 24.357l154.51 313.8L4001 388.48l-250 244.26 59.017 344.902zM4501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L4501 24.357l154.51 313.8L5001 388.48l-250 244.26 59.017 344.902zM1501 814.802l-309.017 162.84 59.017-344.9-250-244.262 345.49-50.32L1501 24.357l154.51 313.8L2001 388.48l-250 244.26 59.017 344.902zM500 814.802l-309.017 162.84L250 632.742 0 388.48l345.49-50.32L500 24.357l154.51 313.8L1000 388.48 750 632.74l59.017 344.902z'/></svg>");
                    }
                  }
                  .show-star-remark {
                    float: left;
                    margin-left: .8vmin;
                    font-size: .75rem;
                    line-height: 4.3vmin;
                  }
                }
              }
            }
          }
          .btn {
            text-align: center;
            white-space: nowrap;
            border: 0;
            position: relative;
            font-size: .8125rem;
            height: 7.5vmin;
            line-height: 8vmin;
            padding-left: 2.7vmin;
            padding-right: 2.7vmin;
            color: #ff4d64;
            &:after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              border: 1px solid #ff4d64;
              box-sizing: border-box;
              width: 200%;
              height: 200%;
              -webkit-transform: scale(.5);
              -ms-transform: scale(.5);
              transform: scale(.5);
              -webkit-transform-origin: 0 0;
              -ms-transform-origin: 0 0;
              transform-origin: 0 0;
              border-radius: 8px;
            }
          }
        }
        .m-act {
          padding-left: 20vmin;
          a {
            display: block;
            background: transparent linear-gradient(180deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 0 repeat-x;
            background-size: 100% 1px;
            padding-right: 4vmin;
            .content {
              color: #8a869e;
              font-size: .8125rem;
              line-height: 10.7vmin;
              width: auto;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .orange {
                color: #fea54c;
              }
              .gap {
                color: #ededed;
                margin: 0 1.33333333vmin;
              }
            }
          }
        }
      }
    }
  }
</style>
