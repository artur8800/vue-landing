<template>
  <section id="pageForm" class="page__form">
    <div class="container">
      <page-heading
        class="center-text"
        h2="Register to get a work"
        h3="Your personal data is stored according to the Privacy Policy"
      ></page-heading>
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
          :isSend="formSended"
          :errorFromReponse="validationErrors"
          @inputChnage="getNameFromInput"
        ></text-input>
        <text-input
          type="email"
          placeholder="Email"
          :isSend="formSended"
          :errorFromReponse="validationErrors"
          @inputChnage="getEmailFromInput"
        ></text-input>
        <text-input
          type="phone"
          ref="phone"
          placeholder="Phone"
          :isSend="formSended"
          :errorFromReponse="validationErrors"
          @inputChnage="getPhoneFromInput"
        ></text-input>

        <form-positions
          @getPosition="getPositionFromInput"
          ref="positions"
        ></form-positions>
        <file-upload
          @fileIsLoad="getFileData"
          :isSend="formSended"
          ref="upload"
        />
        <div class="fomr__button center-text">
          <button
            class="btn waves-effect"
            :class="formFieldsReady ? '' : 'disabled'"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { getToken } from "../../utils/api";
import { postUserData } from "../../utils/api";
import TextInput from "../TextInput";
import FileUpload from "../FileUpload";
import FormPositions from "../FormPositions";
import PageHeading from "../PageHeading";

export default {
  name: "PageForm",
  components: {
    TextInput,
    FileUpload,
    FormPositions,
    PageHeading,
  },
  data: () => ({
    formFields: {
      applicantName: null,
      applicantEmail: null,
      applicantPhone: null,
      applicantPosition: null,
      applicantImage: null,
    },
    formSended: false,
    formResponse: null,
    formFieldsReady: false,
    validationErrors: {},
    responseMessage: {},
  }),
  watch: {
    formFields: {
      handler(obj) {
        this.formFieldsReady = Object.values(obj).every((item) => item);
      },
      deep: true,
    },
  },
  methods: {
    getNameFromInput(data) {
      this.formFields.applicantName = data.text;
    },
    getEmailFromInput(data) {
      this.formFields.applicantEmail = data.text;
    },
    getPhoneFromInput(data) {
      this.formFields.applicantPhone = data.text;
    },
    getFileData(data) {
      this.formFields.applicantImage = data.file;
    },
    getPositionFromInput(data) {
      this.formFields.applicantPosition = data.position;
    },
    async sendForm() {
      const token = await getToken(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );

      if (token) {
        const formData = new FormData();
        formData.append("position_id", this.formFields.applicantPosition);
        formData.append("name", this.formFields.applicantName);
        formData.append("email", this.formFields.applicantEmail);
        formData.append("phone", this.formFields.applicantPhone);
        formData.append("photo", this.formFields.applicantImage);
        const response = await postUserData(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          formData,
          {
            headers: {
              Token: token,
            },
          }
        );

        if (response) {
          this.formResponse = response;
          if (response.status == 422) {
            this.validationErrors = response.data.fails;
          } else if (
            response.status == 409 ||
            response.status == 200 ||
            response.status == 201
          ) {
            const success =
              response.status == 201 || response.status == 200 ? true : false;

            this.responseMessage = response.data.message;
            this.$emit("formSended", { text: this.responseMessage, success });
            this.formSended = true;
            setTimeout(() => {
              this.formSended = false;
              this.formFieldsReady = false;
            }, 500);
          }
        }
      } else {
        console.log("Error with getting token");
      }
    },
  },
};
</script>
