<template>
  <header
    ref="pageHeader"
    class="page__header"
    :class="{ sticky: activeScroll }"
  >
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
  data: () => ({
    activeScroll: false,
  }),
  methods: {
    scrollHadle() {
      this.activeScroll =
        window.pageYOffset > 100
          ? true
          : window.pageYOffset == 0
          ? false
          : true;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.scrollHadle);
    });
  },
};
</script>
