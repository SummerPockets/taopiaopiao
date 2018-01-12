<template>
  <div>
    <myheader></myheader>
    <swiper :myswiper="swiper"></swiper>
    <mybody :data="data.data"></mybody>
    <foot></foot>
    {{swiper}}
  </div>
</template>

<script>
  import myheader from './Header.vue'
  import swiper from './Swiper.vue'
  import mybody from './Body.vue'
  import foot from './Foot.vue'

  export default {
    data () {
      return {
        data: Object,
        swiper: [],
        detail: []
      }
    },
    created () {
      let self = this
      this.$axios.get('/hot')
        .then((res) => {
          res = res.data
          self.data = res.data
        })
        .catch((error) => {
          alert(error)
        })

      this.$axios.get('/swiper')
        .then((res) => {
          res = res.data
          self.swiper = res.data.data.returnValue
        })
        .catch((error) => {
          alert(error)
        })
    },
    components: {
      myheader,
      swiper,
      mybody,
      foot
    }
  }
</script>

<style lang="stylus" scoped>

</style>
