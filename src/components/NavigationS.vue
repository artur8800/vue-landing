<template>
  <div class="sidenav" id="sideNav" ref="mobileNavigation">
    <div class="sidenav__header">
      <img src="../assets/img/Logo.svg" alt="Logo" />
    </div>
    <ul class="sidenav__list">
      <li
        class="sidenav__item"
        v-for="link in links.slice(0, 5)"
        :key="link.title"
      >
        <a class="sidenav__link page-link" :href="link.href">{{
          link.title
        }}</a>
      </li>
    </ul>
    <div class="divider">&nbsp;</div>
    <ul class="sidenav__list">
      <li
        class="sidenav__item"
        v-for="link in links.slice(5, 10)"
        :key="link.title"
      >
        <a class="sidenav__link page-link" :href="link.href">{{
          link.title
        }}</a>
      </li>
    </ul>
    <div class="divider">&nbsp;</div>
    <ul class="sidenav__list">
      <li
        class="sidenav__item"
        v-for="link in links.slice(10, 15)"
        :key="link.title"
      >
        <a class="sidenav__link page-link" :href="link.href">{{
          link.title
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import * as M from "materialize-css";
import linksMixin from "../components/mixins/nav-links";
export default {
  name: "NavigationS",
  mixins: [linksMixin],
  mounted() {
    M.Sidenav.init(this.$refs.mobileNavigation);
  },
};
</script>
