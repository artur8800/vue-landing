<template>
  <div class="input__field">
    <input
      :id="type"
      :name="type"
      v-model.trim="text"
      @input="inputChangeHandler"
      ref="userNameInput"
      class="form__input text-input"
      type="text"
    />
    <label :for="type">{{ placeholder }}</label>
    <span v-if="err" class="form__error input-helper-text error-text">
      {{ this.helper }}
    </span>
  </div>
</template>

<script>
import * as M from "materialize-css";
// eslint-disable-next-line
import _, { debounce } from "lodash";
import isEmail from "validator/es/lib/isEmail";
import isLength from "validator/es/lib/isLength";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import helpers from "../utils/helpers";

export default {
  props: {
    type: String,
    placeholder: String,
    send: Boolean,
  },
  name: "TextInput",
  data: () => ({
    text: "",
    err: false,
    helper: "",
  }),
  watch: {
    text: function () {
      this.debounceGetAnswer();
    },
    err: function () {
      if (this.err) {
        this.helper = helpers[this.type] ? helpers[this.type] : "Error";
      }
    },
  },
  methods: {
    inputChangeHandler() {
      this.$emit("inputChnage", { text: this.text, err: this.err });
    },

    clearData() {
      this.text = "";
      this.err = false;
    },
    validateInput() {
      switch (this.type) {
        case "name":
          this.err = isLength(this.text, { min: 0, max: 255 }) ? false : true;
          break;
        case "email":
          this.err = isEmail(this.text) ? false : true;
          break;
        case "phone":
          // this.text = this.preparePhoneString(this.text);
          this.err = isMobilePhone(this.preparePhoneString(this.text))
            ? false
            : true;
          break;
      }
    },

    preparePhoneString(text) {
      let phoneText = text.replace(/\D/g, "");
      return phoneText;
    },
  },
  created() {
    this.debounceGetAnswer = _.debounce(this.validateInput, 1000);
    M.updateTextFields();
  },
};
</script>
