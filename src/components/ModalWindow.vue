<template>
  <div id="modalWindow" ref="modalWindowRef" class="page__modal modal">
    <div class="modal-content">
      <h3 class="modal__header heading-small-secondary">{{ headerText }}</h3>
      <p v-if="responseData" class="modal__text secondary-text">
        {{ responseData.text }}
      </p>
      <button @click="closeModal" class="modal__button btn waves-effect yellow">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  props: {
    responseData: Object,
  },
  name: "ModalWindow",
  data: () => ({
    instance: null,
  }),
  watch: {
    responseData: function () {
      M.Modal.getInstance(this.instance).open();
    },
  },
  computed: {
    buttonText: function () {
      return this.responseData && this.responseData.success ? "Great" : "Ok";
    },
    headerText: function () {
      return this.responseData && this.responseData.success
        ? "Congratulations"
        : "Warning!";
    },
  },
  mounted() {
    this.instance = this.$refs.modalWindowRef;
    M.Modal.init(this.instance);
  },
  beforeDestroy() {
    M.Modal.getInstance(this.instance).destroy();
  },
  methods: {
    closeModal: function () {
      M.Modal.getInstance(this.instance).close();
    },
  },
};
</script>
