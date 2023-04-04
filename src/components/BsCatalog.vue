<template>
  <div class="main">
    <div class="container">
      <div class="main__body">
        <h1 class="main__title">Картины эпохи возрождения</h1>
        <div class="main__blocks-body">
            <bs-block v-for="i in sortedPaints"
                      :paint-item="i"
                      :key = "i.id"></bs-block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BsBlock from "./BsBlock.vue";
import {usePaints, useSearch} from "../stores/store.js";
import {mapState} from "pinia";

export default {
  name: "BsCatalog",
  components: { BsBlock },
  data() {
    return {
      sortedPaints: [],
    }
  },
  watch: {
    searchValue: function() {
      return this.sortBySearchValue(this.searchValue)
    }
  },
  mounted() {
    this.sortedPaints = this.paints
  },
  computed: {
    ...mapState(useSearch, ['searchValue']),
    ...mapState(usePaints, ['paints']),
  },
  methods: {
    sortBySearchValue(value) {
      this.sortedPaints = this.paints
      if (value) {
        this.sortedPaints = this.sortedPaints.filter(function(item) {
          return item.title.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sortedPaints = this.paints
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

  .main{

    &__body{
      max-width: 100%;
      margin: 0 auto;
    }
    &__title{
      margin: 40px 0;
      text-align: left;
    }
    &__blocks-body{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
@media screen and (max-width: 1285px){
  .main{
    &__body{
      padding: 0 30px;
    }
  }
}
@media screen and (max-width: 1035px){
  .main{
    &__body{
      padding: 0 100px;
    }
  }
}
@media screen and (max-width: 867px){
  .main{
    &__body{
      padding: 0 50px;
    }
  }
}
@media screen and (max-width: 768px){
  .main{
    &__body{
      padding: 0;
    }
  }
}
@media screen and (max-width: 666px){
  .main{
    &__title{
      margin: 30px 0 15px;
      text-align: center;
    }
    &__blocks-body{
      justify-content: center;
    }
  }
}
</style>