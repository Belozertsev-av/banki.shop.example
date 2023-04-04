<template>
  <div class="block" :class="{ unactive : paintItem.isSold === true}">
    <div class="block__img" @click="isOpenModal = true">
      <img :src="'./src/assets/img/' + paintItem.img[0]"
           alt="img">
    </div>
    <div class="block__body">
      <h2 class="block__title" @click="isOpenModal = true"> {{ paintItem.title }} </h2>
      <div class="block__foot">
        <div class="block__price" v-if="!paintItem.isSold">
          <h6 class="block__old-price"> {{ (paintItem.oldPrice) ? paintItem.oldPrice + '$' : '' }}</h6>
          <h3 class="block__new-price"> {{ paintItem.newPrice }} $</h3>
        </div>
        <div class="block__text" v-else>Продана на аукцоне</div>
          <div class="block__btn btn"
                  v-if="!paintItem.isSold"
                  @click="sendData">
            <bs-preloader v-if="isLoading"></bs-preloader>
            <div v-else>{{ btnText }}</div>
          </div>
      </div>
    </div>
  </div>
  <transition-group name="fade">
    <div class="bgc" v-if="isOpenModal === true"
         :style="{'height' : scrollHeight + 'px' }"
         @click="isOpenModal = false"></div>
    <div class="modal" v-if="isOpenModal === true"
         :style="{'top' : scrollY + 20 + 'px' }">
      <div class="modal__body">
        <div class="modal__button">
          <button class="modal__btn btn" @click="isOpenModal = false">Закрыть</button>
        </div>
        <bs-slider :imgs="paintItem.img"
                   :interval="10000"/>
        <h2 class="modal__title"> {{ paintItem.title }}</h2>
        <div class="modal__desc">{{ paintItem.desc }}</div>
        <div class="modal__foot">
          <div class="block__price modal-price modal-item" v-if="!paintItem.isSold">
            <h6 class="block__old-price"> {{ (paintItem.oldPrice) ? paintItem.oldPrice + '$' : '' }}</h6>
            <h3 class="block__new-price"> {{ paintItem.newPrice }} $</h3>
          </div>
          <div class="block__text modal-item" v-else>Продана на аукцоне</div>
          <div class="block__btn btn del modal-item"
               v-if="this.contains(this.cart.cart, this.paintItem)"
               @click="delData">
            <bs-preloader v-if="isLoadingDel"></bs-preloader>
            <div v-else> Удалить </div>
          </div>
          <div class="block__btn btn modal-item"
               v-if="!paintItem.isSold"
               @click="sendData">
            <bs-preloader v-if="isLoading"></bs-preloader>
            <div v-else>{{ btnText }}</div>
          </div>
        </div>
      </div>
    </div>
  </transition-group>

</template>

<script>
import {useCart} from "../stores/store.js";
import BsPreloader from "./BsPreloader.vue";
import BsSlider from "./BsSlider.vue";
export default {

  name: "BsBlock",
  components: { BsSlider, BsPreloader },
  props: {
    paintItem: {
      required: true,
    }
  },
  data() {
    return {
      cart: useCart(),
      isLoading: false,
      isLoadingDel: false,
      isOpenModal: false,
    }
  },
  computed: {
      btnText: function () {
        if (this.contains(this.cart.cart, this.paintItem))
          return "В корзине"
        else
          return "Купить"
      },
    scrollY () {
      return Math.round(window.scrollY)
    },
    scrollHeight () {
      return document.documentElement.scrollHeight
    },
  },
  methods: {
    contains(arr, elem) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === elem.id) {
            return true;
          }
        }
      return false

    },
    sendData() {

      if (!this.contains(this.cart.cart, this.paintItem)) {
        this.isLoading = true
        setTimeout(() => {
          this.cart.addToCart(this.paintItem)
          this.isLoading = false
        }, 2000)
      }
    },
    delData() {

      if (this.contains(this.cart.cart, this.paintItem)) {
        this.isLoadingDel = true
        setTimeout(() => {
          this.cart.delFromCart(this.paintItem)
          this.isLoadingDel = false
        }, 2000)
      }
    },
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";

.block{
  max-width: 300px;
  //height: 330px;
  margin: 5px;
  &__img{
    cursor: pointer;
    img{
      width: 300px;
      height: 160px;

    }
  }
  &__body{
    display: flex;
    flex-direction: column;
    height: 170px;
    border: 1px solid $secondary-disable;
  }
  &__title{
    cursor: pointer;
    padding: 20px 24px 0 24px;
  }
  &__foot{
    display: flex;
    justify-content: space-between;
    padding: 24px;
  }
  &__price{
    align-self: center;
  }
  &__old-price{
    text-decoration-line: line-through;
  }
  &__btn{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-self: center;
  }
}
.modal{
  position: absolute;
  width: 700px;
  height: fit-content;
  background-color: $bgc;
  z-index: 5;
  box-shadow: 0 0 15px $primary;
  scroll-behavior: unset;
  left: calc((100vw - 700px) / 2);
  top: 2.5vh;
  &__body{
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__title{
    text-align: center;
  }
  &__desc{
    margin: 20px;
  }
  &__button{
    display: flex;
    flex-direction: row-reverse;
  }
  &__btn{
    margin: 0 20px 20px 0;
  }
  &__slider{
    width: 100%;
    height: fit-content;
    display: flex;
    img{
      width: 100%;
      height: fit-content;
    }
  }
  &__foot{
    display: flex;
    justify-content: space-between;
    padding: 24px;
  }

}
.bgc{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0,0,0,0.5);
}
.del{
  margin-left: 30%;
  background-color: #93250e;
}
.unactive{
    opacity: 0.5;

  }

@media screen and (max-width: 757px){
  .modal{
    width: 500px;
    left: calc((100vw - 500px) / 2);
    &__foot{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .modal-item{
    margin: 5px;
    text-align: center;
  }
  .del {
    margin-left: 0;
  }
}
@media screen and (max-width: 555px){
  .modal{
    width: 350px;
    left: calc((100vw - 350px) / 2);
    &__desc{
      margin-bottom: 0;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>