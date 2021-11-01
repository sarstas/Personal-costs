<template>
  <div class="wrap-header">
    <header class="header container">
      <h1 class="header__logo">My personal costs</h1>
      <div class="header__links">
        <router-link class="header__link" to="dashboard">Dashboard</router-link>
        <router-link class="header__link" to="about">About</router-link>
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
  font-size: 24px;
  font-weight: 600;
  color: #ccc;
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
    color: #ccc;
    text-decoration: none;
  }
}

</style>