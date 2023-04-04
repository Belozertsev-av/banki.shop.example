<template>
<div class="main">
  <div class="container">
    <div class="cart">
      <div class="cart__body">
        <div class="cart-item"
             v-for="i in cart.cart">
          <img class="cart-item__img" :src="getImageUrl(i.img[0])" alt="img">
          <h2 class="cart-item__title"> {{ i.title}}</h2>
          <div class="cart-item__block-price">
            <h6 class="cart-item__old-price">{{ (i.oldPrice) ? i.oldPrice + '$' : '' }}</h6>
            <h3 class="cart-item__new-price">{{ i.newPrice }} $</h3>
          </div>
          <button class="cart-item__btn btn"
                  @click="deletePosition(i)">X</button>
        </div>
      </div>
      <div class="cart__foot">
        <h3 class="cart__sum"> Итого: {{ sum }} $ </h3>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import {useCart} from "../stores/store.js";
import BsPreloader from "./BsPreloader.vue";
import path from "@/assets/img/";

export default {
  name: "BsCart",
  components: [ BsPreloader ],
  data() {
    return{
      cart: useCart()
    }
  },
  computed: {
    sum(){
      let sum = 0
      for (let i = 0; i < this.cart.cart.length; i++) {
        sum += Number(this.cart.cart[i].newPrice.replace(/ /g,''))
      }
      return sum.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
  },
  methods: {
    getImageUrl(name) {
      return path + name
    },
    deletePosition(el) {
      this.cart.delFromCart(el)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.cart{
  display: flex;
  flex-direction: column;

  &__body {
    margin: 20px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__foot{
    display: flex;
    height: 40px;
    border-top: 1px solid $secondary-disable;
  }
  &__sum{
    margin: 20px;
  }
}
.cart-item{
  display: flex;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
  &__img{
    height: 40px;
    width: auto;
    margin-right: 20px;
  }
  &__block-price{
    margin-left: 20px;
  }
  &__old-price{
    text-decoration-line: line-through;
  }
  &__btn{
    margin-left: 20px;
    padding: 10px 15px;
  }
}

@media screen and (max-width: 672px){
  .cart-item{
    h3, h2, h6{
      font-size: 14px;
    }
    &__img{
      height: 30px;
      width: auto;
      margin-right: 10px;
    }
    &__block-price{
      margin-left: 10px;
    }
    &__old-price{
      text-decoration-line: line-through;
    }
    &__btn{
      margin-left: 10px;
      padding: 7px 12px;
    }
  }
}
</style>