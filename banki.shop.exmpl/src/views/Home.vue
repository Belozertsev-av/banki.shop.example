<template>
  <div class="wrapper">
    <bs-header></bs-header>
    <router-view></router-view>
    <bs-footer></bs-footer>
  </div>
</template>

<script>
import bsHeader from "../components/BsHeader.vue";
import bsFooter from "../components/BsFooter.vue";

export default {
  name: "Home",
  components: { bsHeader, bsFooter }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.wrapper {
  background-color: $bgc;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>