<template>
  <div class="index">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'Index',
  components: {Footer},
  data () {
    return {
      
    }
  }
}
</script>

<style scoped >
.index{
  
}

</style>
