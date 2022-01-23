<template>
  <div class="input__field">
    <input
      :id="type"
      :name="type"
      v-model.trim="text"
      @input="inputChangeHandler"
      ref="textInput"
      class="form__input text-input"
      type="text"
    />
    <label ref="textInputLabel" :for="type">{{ placeholder }}</label>
    <span
      v-if="errorFromReponse && text !== ''"
      class="form__error input-helper-text error-text"
    >
      {{ this.helperText }}
    </span>
  </div>
</template>

<script>
import * as M from "materialize-css";

export default {
  props: {
    type: String,
    placeholder: String,
    isSend: Boolean,
    errorFromReponse: Object,
  },
  name: "TextInput",
  data() {
    return {
      text: "",
      err: false,
    };
  },
  computed: {
    helperText: function () {
      if (Array.isArray(this.errorFromReponse[this.type])) {
        return this.errorFromReponse[this.type][0];
      } else {
        return null;
      }
    },
  },
  watch: {
    err: function () {
      if (this.errorFromReponse) {
        this.err = true;
      }
    },
    isSend: function () {
      if (this.isSend) {
        this.text = this.helper = "";
        this.err = false;
        if (this.$refs.textInputLabel.classList.contains("active")) {
          this.$refs.textInputLabel.classList.remove("active");
        }
      }
    },
  },
  methods: {
    inputChangeHandler() {
      this.$emit("inputChnage", { text: this.text, err: this.err });
    },
    preparePhoneString(text) {
      let phoneText = text.replace(/\D/g, "");
      return phoneText;
    },
  },
  created() {
    M.updateTextFields();
  },
};
</script>
