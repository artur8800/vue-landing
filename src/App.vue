<template>
  <div id="app">
    <Header />
    <BannerSection />
    <SectionAcquainted />
    <UsersSection />
  </div>
</template>

<script>
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import SectionAcquainted from "./components/SectionAcquainted";
import UsersSection from "./components/UsersSection";

export default {
  name: "App",
  components: {
    Header,
    BannerSection,
    SectionAcquainted,
    UsersSection,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
