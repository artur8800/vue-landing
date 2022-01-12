<template>
  <header class="page__header">
    <div class="container">
      <div class="header__logo">
        <img class="header__logo" src="../../assets/img/Logo.svg" />
      </div>
      <navigation-l></navigation-l>
      <navigation-s></navigation-s>
    </div>
  </header>
</template>

<script>
import NavigationL from "../NavigationL";
import NavigationS from "../NavigationS";

export default {
  name: "Header",
  components: {
    NavigationL,
    NavigationS,
  },
};
</script>
