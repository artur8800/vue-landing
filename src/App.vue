<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/sections/MainPage";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
