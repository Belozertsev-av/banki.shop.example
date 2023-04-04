<template>
  <div class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__menu">
          <div class="header__burger"
               @click="isClicked = !isClicked"
               :class="{active: isClicked}">
            <div class="header__burger-line"></div>
          </div>
            <ul class="header__menu-body">
              <li class="header__menu-item" @click="isClicked = !isClicked"><router-link to="/">Каталог</router-link></li>
              <li class="header__menu-item" @click="isClicked = !isClicked"><router-link to="/">Доставка</router-link></li>
              <li class="header__menu-item" @click="isClicked = !isClicked"><router-link to="/">Оплата</router-link></li>
              <li class="header__menu-item" @click="isClicked = !isClicked"><router-link to="/">Контакты</router-link></li>
              <li class="header__menu-item" @click="isClicked = !isClicked"><router-link to="/">О компании</router-link></li>
            </ul>
        </div>
        <form @submit.prevent="searchByValue(searchValue)"
              class="header__search"
              v-if="$route.path !== '/cart'">
          <input placeholder="Поиск по названию картины"
                 type="text"
                 class="header__search-input"
                 v-model="searchValue">
          <input type="submit" class="header__search-btn btn"
                  value="Найти"/>
        </form>
        <router-link class="header__cart" to="/cart">
          <bs-cart-icon/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BsCartIcon from "./BsCartIcon.vue";
import {useSearch} from "../stores/store.js";

export default {
  name: "BsHeader",
  components: {BsCartIcon},
  data() {
    return{
      search: useSearch(),
      isClicked: false,
      searchValue: '',
    }
  },
  methods: {
    searchByValue(value) {
      this.search.setSearchValue(value)
    }
  }

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

 .header{
   background-color: $bgc;
   width: 100%;
   height: 85px;
   border-bottom: 1px solid $secondary-disable;

   &__body{
     display: flex;
     width: 100%;
     justify-content: space-between;
   }
   &__menu{
     width: 50%;
     display: flex;
   }
   &__menu-body{
     display: flex;
     width: 100%;
     justify-content: space-around;
     transition-duration: 0.2s;
   }
   &__menu-item{
     margin: 37px 0;
   }
   &__search{
     height: fit-content;
     display: flex;
     justify-content: flex-end;
     align-self: center;
   }
   &__search-input{
     background: none;
     max-width: 350px;
     border: 1px solid $secondary-disable;
     padding: 13px;
   }
   &__search-btn{
     cursor: pointer;
   }
   &__cart{
     align-self: center;
   }
   &__burger{
     margin: 5px;
     align-self: center;
     cursor: pointer;
     width: 30px;
     height: 30px;
     display: none;
   }
   &__burger-line{
     margin-top: calc(50% - 2px);
     height: 4px;
     width: 30px;
     background-color: $primary;
     position: relative;

     &:before, &:after{
       content: "";
       height: 4px;
       width: 30px;
       position: absolute;
       background-color: $primary;
     }
     &:before{
       top: 10px;
     }
     &:after{
       bottom: 10px;
     }
   }
 }

@media screen and (max-width: 979px){
  .header{
    &__burger{
      display: flex;
      margin: 27px 0;
    }
    &__menu-body{
      display: none;
    }
  }
  .active{
    position: relative;
    + .header__menu-body{
      animation: fade-in-out .2s backwards ease-in-out;
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 3;
      background-color: $bgc;
      border-bottom: 1px solid $secondary-disable;
      top: 85px;
      left: 0;
      li{
        margin: 15px;
      }
    }
  }
}
@media screen and (max-width: 673px){
  .header{
    &__search-input{
      max-width: 180px;
    }
    &__search-btn{
      padding: 0 15px;
    }
  }
}

</style>