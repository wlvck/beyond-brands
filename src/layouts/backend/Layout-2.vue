<template>
  <div>
     <Loader/>
    <div class="wrapper">
      <HeaderStyle3/>
      <div class="content-page">
        <transition name="router-anim">
          <router-view/>
        </transition>
      </div>
    </div>
    <FooterStyle />
  </div>
</template>
<script>
import Loader from '@/components/loader/Loader'
import HeaderStyle3 from "@/components/partials/backend/HeaderStyle/HeaderStyle3";
import FooterStyle from "@/components/partials/backend/FooterStyle/FooterStyle";
export default {
  name: 'Layout-2',
  components: {
    HeaderStyle3,
    FooterStyle,
    Loader
  },
  mounted(){
    document.body.classList='fixed-top-navbar'
  },
  destroyed () {
    document.body.classList='fixed-top-navbar'
  }
}
</script>
<style>
</style>
