<template>
  <div>
    {{data.data.returnValue.description}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [],
        id: this.$route.params.id
      }
    },
    created () {
      let self = this
      this.$axios.get('/detail/' + this.id)
        .then((res) => {
          res = res.data
          self.data = res.data
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
