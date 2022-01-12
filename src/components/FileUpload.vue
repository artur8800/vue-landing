<template>
  <div class="form__file__upload">
    <button @click="onChooseFile" type="button" class="upload__button">
      Upload
    </button>
    <label class="upload__button__label" for="file">
      <span v-if="!file">Upload your photo</span>
      <span v-else-if="file">{{ this.file.name }}</span>
    </label>
    <input
      @change="onFileChosen"
      type="file"
      ref="fileInput"
      style="display: none"
    />
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data: () => ({
    file: null,
    imageUrl: String,
  }),
  methods: {
    onChooseFile() {
      this.$refs.fileInput.click();
    },
    onFileChosen(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.file = files[0];

      this.$emit("fileIsLoad", { file: this.file });
    },
  },
};
</script>
