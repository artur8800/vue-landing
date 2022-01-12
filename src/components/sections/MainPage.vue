<template>
  <div class="main__page">
    <Header />
    <BannerSection />
    <SectionAcquainted />
    <UsersSection />
    <Form @formSended="getFormResponse" />
    <modal-window :responseData="responseData"></modal-window>
  </div>
</template>

<script>
import Header from "./Header";
import BannerSection from "./BannerSection";
import SectionAcquainted from "./SectionAcquainted";
import UsersSection from "./UsersSection";
import Form from "./Form";
import ModalWindow from "../ModalWindow";

export default {
  name: "MainPage",
  components: {
    Header,
    BannerSection,
    SectionAcquainted,
    UsersSection,
    Form,
    ModalWindow,
  },
  data: () => ({
    responseData: null,
    openModalWindow: false,
  }),
  methods: {
    getFormResponse(data) {
      this.responseData = data;
    },
  },
};
</script>
