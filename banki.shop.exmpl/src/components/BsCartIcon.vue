<template>
  <div class="cart-icon">
    <svg height="30"
         viewBox="0 0 48 48"
         width="30"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48H0z"
            fill="#F6F3F3"/>
      <path class="cart-icon__body"
            fill="#403432"
            d="M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
    <div class="cart-icon__count">{{ (cart.cart !== null) ? cart.cart.length : 0 }}</div>
  </div>

</template>

<script>
import {useCart} from "../stores/store.js";

export default {
  name: "BsCartIcon",
  data () {
    return{
      cart: useCart(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.cart-icon{
  margin: 10px;
  position: relative;
  &__count{
    position: absolute;
    background-color: $primary-hover;
    color: $font-light;
    //border: 1px solid $primary;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    right: 0;
    bottom: 0;
    font-size: 10px;
    text-align: center;
    line-height: 13px;
  }
}
</style>