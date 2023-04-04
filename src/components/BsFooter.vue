<template>
  <div class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__menu">
          <ul class="footer__menu-body">
            <li class="footer__menu-item"><router-link to="/">Каталог</router-link></li>
            <li class="footer__menu-item"><router-link to="/">Доставка</router-link></li>
            <li class="footer__menu-item"><router-link to="/">Оплата</router-link></li>
            <li class="footer__menu-item"><router-link to="/">Контакты</router-link></li>
            <li class="footer__menu-item"><router-link to="/">О компании</router-link></li>
          </ul>
        </div>
        <div class="footer__tel">
          <img src="src/assets/img/tel.png" alt="phone">
          <p>+7 (812) 555-55-55</p>
        </div>
        <div class="footer__address">
          <img src="src/assets/img/address.png" alt="phone">
          <a href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_yefimova_3s/Z0kYdQVgSE0HQFtjfXVzdH1mYQ==/?indoorLevel=1&ll=30.320180%2C59.925155&z=16.89">г. Санкт-Петербург, ул. Ефимова, 3</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BsFooter"
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

  .footer{
    background-color: $secondary-foot;
    width: 100%;
    &__body{
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    &__menu{
      width: 50%;
    }
    &__menu-body{
      display: flex;
      justify-content: space-around;
    }
    &__menu-item{
      margin: 37px 0;
    }

    &__tel{
      display: flex;
      justify-content: center;
      width: fit-content;
      align-self: center;
      img{
        margin-right: 10px;
        height: fit-content;
        align-self: center;
      }
    }

    &__address{
      display: flex;
      align-self: center;
      justify-content: center;
      width: fit-content;
      img{
        margin-right: 10px;
        align-self: center;
        height: fit-content;
      }
    }
  }

@media screen and (max-width: 1020px){
  .footer{
    &__body{
      flex-direction: column;
    }
    &__menu{
      width: 100%;
    }
    &__menu-item{
      margin: 30px 0 10px 0;
    }
    &__tel {
      margin: 10px 0;
    }
    &__address{
      margin: 10px 0 30px;
    }
  }
}
@media screen and (max-width: 530px){
  .footer{
    &__menu{
      width: 100%;
    }
    &__menu-body{
      width: 100%;
      flex-direction: column;
      align-self: center;
      margin: 0 auto;
      justify-content: center;
    }
    &__menu-item{
      &:first-child{
        margin-top: 30px;
      }
      margin: 10px auto;
    }
  }
}
</style>