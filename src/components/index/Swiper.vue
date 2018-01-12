<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" style="height: 165.75px">
      <!-- slides -->
      <swiper-slide v-for="item in myswiper" :key="item.id">
        <a :href="item.actionUrl">
          <img :src="'https://gw.alicdn.com/tfs/' + item.smallPicUrl" style="width: 100%;height: 165.75px;">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination" style="height: 12px;"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      myswiper: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: false,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
          loop: true,
          slidesPerview: 'auto',
          loopedSlides: 8,
          debugger: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../common/swiper-3.4.2.min.css"
</style>
