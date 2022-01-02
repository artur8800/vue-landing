<template>
  <section class="page__form">
    <div class="container">
      <h1 class="section__heading center-text">Register to get a work</h1>
      <h2 class="section__heading__small center-text">
        Your personal data is stored according to the Privacy Policy
      </h2>
      <form
        type="multipart/form-data"
        class="register__form"
        name="register-form"
        ref="dataForm"
        @submit.prevent="sendForm"
      >
        <text-input
          type="name"
          placeholder="Your name"
          @inputChnage="getNameFromInput"
        ></text-input>
        <text-input
          type="email"
          placeholder="Email"
          @inputChnage="getEmailFromInput"
        ></text-input>
        <text-input
          type="phone"
          ref="phone"
          placeholder="Phone"
          @inputChnage="getPhoneFromInput"
        ></text-input>

        <form-positions
          @getPosition="getPositionFromInput"
          ref="positions"
        ></form-positions>
        <file-upload @fileIsLoad="getFileData" ref="upload" />

        <button type="submit">Click Me</button>
      </form>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import { getToken } from "../../utils/api";
import { postUserData } from "../../utils/api";
import TextInput from "../TextInput";
import FileUpload from "../FileUpload";
import FormPositions from "../FormPositions";

export default {
  name: "Form",
  components: {
    TextInput,
    FileUpload,
    FormPositions,
  },
  data: () => ({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    applicantPosition: "",
    applicantImage: null,
    formSended: false,
  }),
  watch: {
    formSended: function () {
      if (this.formSended) {
        $(this.$refs.dataForm)
          .find("input.text-input")
          .each(function () {
            $(this).parent().find("label").removeClass("active");
            $(this).val("");
          });
      }
    },
  },
  methods: {
    getNameFromInput(data) {
      this.applicantName = data.text;
    },
    getEmailFromInput(data) {
      this.applicantEmail = data.text;
    },
    getPhoneFromInput(data) {
      this.applicantPhone = data.text;
    },
    getFileData(data) {
      this.applicantImage = data.file;
    },
    getPositionFromInput(data) {
      this.applicantPosition = data.position;
    },
    async sendForm() {
      const token = await getToken(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );

      if (token) {
        console.log(typeof token);
        const formData = new FormData();
        formData.append("position_id", this.applicantPosition);
        formData.append("name", this.applicantName);
        formData.append("email", this.applicantEmail);
        formData.append("phone", this.applicantPhone);
        formData.append("photo", this.applicantImage);
        console.log(formData);
        const response = await postUserData(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          formData,
          {
            headers: {
              Token: token,
            },
          }
        );
        this.formSended = true;
        console.log(response);
      }
    },
  },
};
</script>
