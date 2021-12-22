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
      >
        <text-input
          type="name"
          placeholder="Yourr Name"
          @inputChnage="getNameFromInput"
        ></text-input>
        <text-input
          type="email"
          placeholder="Email"
          @inputChnage="getEmailFromInput"
        ></text-input>
        <text-input
          type="phone"
          placeholder="Phone"
          @inputChnage="getPhoneFromInput"
        ></text-input>

        <form-positions @getPosition="getPositionFromInput"></form-positions>
        <file-upload @fileIsLoad="getFileData" />

        <button type="button">Click Me</button>
      </form>
    </div>
  </section>
</template>

<script>
import { getToken } from "../../utils/api";
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
  }),

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
  },

  async mounted() {
    const token = await getToken(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    console.log(token);
    // this.positions = await getPositionsList(
    //   "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    // );
  },
};
</script>
