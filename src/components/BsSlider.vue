<template>
  <div class="slider">
    <div class="slider__body" :style="{ 'margin-left': '-' + (100*currSlideIndex) + '%' }">
      <div class="slider__item"
           v-for="i in imgs">
        <img :src="'/src/assets/img/' + i" alt="img">
      </div>
    </div>
  </div>
  <div class="slider__block-btn">
    <button class="slider__btn btn" @click="prevSlide"> &lt; </button>
    <button class="slider__btn btn" @click="nextSlide"> > </button>
  </div>
</template>

<script>
export default {
  name: "BsSlider",
  props: {
    imgs: {
      required: true,
      type: Array
    },
    interval: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return{
      currSlideIndex: 0,
    }
  },
  methods: {
    prevSlide() {
      if (this.currSlideIndex > 0)
        this.currSlideIndex--
      else
        this.currSlideIndex = this.imgs.length - 1
    },
    nextSlide() {
      if (this.currSlideIndex < this.imgs.length - 1)
        this.currSlideIndex++
      else
        this.currSlideIndex = 0
    },
  },
  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide()
      }, vm.interval)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

  .slider{
    width: 600px;
    height: 400px;
    overflow: hidden;
    margin: 0 auto;

    &__item{
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      text-align: center;
      width: 600px;
      height: 400px;
      img{
        min-width: 600px;
        height: auto;
      }
    }
    &__body{
      display: flex;
      align-items: center;
      justify-items: center;
      transition-duration: 0.3s;
    }
    &__block-btn{
      margin: 0 auto;

    }
    &__btn{
      padding: 5px 15px;
      margin: 10px 20px 20px 10px;
      background-color: $primary-hover;
    }
  }
@media screen and (max-width: 757px){
  .slider {
    width: 400px;
    height: 250px;

    &__item {
      width: 400px;
      height: 250px;

      img {
        min-width: 400px;
        height: auto;
      }
    }
  }
}
@media screen and (max-width: 555px){
  .slider{
    width: 300px;
    height: 200px;
    &__item {
      width: 300px;
      height: 200px;

      img {
        min-width: 300px;
        height: auto;
      }
    }
  }
}
</style>