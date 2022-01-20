<template>
  <div class="main__page">
    <Header />
    <BannerSection />
    <SectionAcquainted />
    <users-section :needToUpdate="needToUpdate"></users-section>
    <page-form @formSended="getFormResponse"></page-form>
    <modal-window :responseData="responseData"></modal-window>
  </div>
</template>

<script>
import Header from "./Header";
import BannerSection from "./BannerSection";
import SectionAcquainted from "./SectionAcquainted";
import UsersSection from "./UsersSection";
import PageForm from "./PageForm";
import ModalWindow from "../ModalWindow";

export default {
  name: "MainPage",
  components: {
    Header,
    BannerSection,
    SectionAcquainted,
    UsersSection,
    PageForm,
    ModalWindow,
  },
  data: () => ({
    responseData: null,
    openModalWindow: false,
    needToUpdate: false,
  }),
  watch: {
    responseData: {
      handler(data) {
        if (data !== null) {
          this.needToUpdate = data.success;
        }
      },
      deep: true,
    },
  },
  methods: {
    getFormResponse(data) {
      this.responseData = data;
    },
  },
};
</script>
