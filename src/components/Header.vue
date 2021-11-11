<template>
  <div class="wrap-header">
    <header class="header container">
      <h1 class="header__logo">{{ $t('logoText') }}</h1>
      <div class="header__links">
        <router-link class="header__link" to="dashboard">{{ $t('linkDashboard') }}</router-link>
        <router-link class="header__link" to="about">{{ $t('linkAbout') }}</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.wrap-header {
  background-color: var(--base-color);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  &__logo {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  &__links {
    display: grid;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
    grid-auto-rows: auto;
  }

  &__link {
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-decoration: none;
  }
}

// лучше унести в отдельный файл или выпилить из сборки, история гита всё помнит
//.switch {
//  position: relative;
//  display: inline-block;
//  width: 30px;
//  height: 17px;
//  margin: 0 5px;
//  & input {
//    opacity: 0;
//    width: 0;
//    height: 0;
//  }
//}
//
//.slider {
//  position: absolute;
//  cursor: pointer;
//  top: 0;
//  left: 0;
//  right: 0;
//  bottom: 0;
//  background-color: #ccc;
//  -webkit-transition: .4s;
//  transition: .4s;
//  &:before {
//    position: absolute;
//    content: "";
//    height: 13px;
//    width: 13px;
//    left: 4px;
//    bottom: 2px;
//    background-color: white;
//    -webkit-transition: .4s;
//    transition: .4s;
//  }
//}
//
//.input:checked + .slider {
//  background-color: var(--greyLight);
//}
//
//.input:focus + .slider {
//  box-shadow: 0 0 1px #2196F3;
//}
//
//.input:checked + .slider:before {
//  -webkit-transform: translateX(10px);
//  -ms-transform: translateX(10px);
//  transform: translateX(10px);
//}
//
///* Rounded sliders */
//.slider.round {
//  border-radius: 34px;
//  &:before {
//    border-radius: 50%;
//  }
//}


</style>
