<template>
  <div id="app">
    <Header />
    <BannerSection />
    <SectionAcquainted />
    <UsersSection />
    <Form />
  </div>
</template>

<script>
import Header from "./components/views/Header";
import BannerSection from "./components/views/BannerSection";
import SectionAcquainted from "./components/views/SectionAcquainted";
import UsersSection from "./components/views/UsersSection";
import Form from "./components/views/Form";

export default {
  name: "App",
  components: {
    Header,
    BannerSection,
    SectionAcquainted,
    UsersSection,
    Form,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
